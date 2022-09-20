const { Router } = require("express");
const router = Router();
const { Review, User, Product } = require("../db.js")

router.get("/", async (req, res) => {
    try {
      const results = await Review.findAll({
        where:{
          isActive: true
        }
      })

       res.status(200).json(results) 

    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
});

router.post("/:idProduct", async(req, res ) => {
  const { idProduct } = req.params;
  const { value, description, userId} = req.body;
  console.log(req.body)
 try {
  const [result, created] = await Review.findOrCreate({
    where:{
      userId,
      productId: idProduct
    },
    defaults:{
    value,
    description
  }})
    const findProduct = await Product.findOne({
      where:{ id: idProduct }
    })
    findProduct.addReview(result)
    if(!created)res.status(401).send("Ya has escrito una reseña para este articulo, ve al botón de editar para poder actualizarla")
    else res.status(201).json(result)
 } catch (error) {
  console.log(error)
  res.status(500).json(error)
 }
});

router.put("/:id", async (req, res) => {
  const {id} = req.params
  const { value, description} = req.body;
  try {
    const review = await Review.findByPk(id)
     
    review.set({value, description});
  
      await review.save();
      res.status(200).json(review);
   
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.delete("/delete/:id", async(req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const review = await Review.findOne({ where: { id } })
      if (review) {
        await review.update({isActive: false} )
        res.status(200).send("Reseña Inactiva")
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.get("/product/:id", async(req, res) => {
  const {id} = req.params;
  try {
   const data= await Review.findAll({
      where: {
        productId: id
      },
      include: [{ model: User }]
    })
      res.status(200).send(data)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.get("/byUser/:id", async(req, res, next) => {
  const { id } = req.params;
  try {
    const data= await Review.findAll({
      where: { userId: id },
      include: [{ model: Product }]
    })
       res.status(200).json(data)
      
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

module.exports = router;