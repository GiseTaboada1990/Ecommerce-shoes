const { Router } = require("express");
const { Product, Order, User } = require("../db");
const router = Router();

//Post Orden Compra
router.post("/", async (req, res) => {
  const  idAll  = req.body.as;
  
  const userBody = req.body.userId
  
  try {
    let productId = [];
    let productArray1 = [];
    let quantity1 = [];
    let totalUnidades = [];
    let totalTotal = [];
    let totalTotal1 = 0;

    const userId = await User.findOne({
      where: { id: userBody}
    });
    for (let i = 0; i < idAll.length; i++) {
      productId.push(idAll[i].id) && quantity1.push(idAll[i].quantity);
    }
    for (let i = 0; i < productId.length; i++) {
      const productCopy1 = await Product.findOne({
        where: { id: productId[i] }
      });
      productArray1.push(productCopy1);
    }

    for (let i = 0; i < productArray1.length; i++) {
      const totalito = productArray1[i].price * quantity1[i];
      totalUnidades.push(totalito);
   
    }
    for (let i = 0; i < totalUnidades.length; i++) {
      totalTotal1 += totalUnidades[i];

      if (i === totalUnidades.length - 1) {
        totalTotal = totalTotal1;
       
      }
    }
    const date = new Date();
    
    const newOrder = await Order.create({
      amount: totalTotal,
      address: userId.address,
      email: userId.email,
      date: date,
      status: ""
    });
    await newOrder.setUser(userId.id);
    idAll.map(async (item) => await newOrder.addProduct(item.id));
    await userId.addOrder(newOrder)
    console.log(newOrder)
    res.status(200).json(newOrder);
   
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
});

router.get("/", async (req, res) => {
  const { email } = req.body; 
  try {
    if (!email) {
      const result = await Order.findAll({where:{isActive:true}},{ include: [{ all: true }] })
      res.send(result)
    } else {
      const result = await Order.findAll({ where: { email: email }, include: [{ all: true }] })
      res.send(result)
    }

  } catch (error) {
    res.status(404).send({ error: error.message })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const found = await Order.findByPk(id, { include:[{ all: true }] })
    if (found) res.send(found)
    else res.status(404).send("ID not found")
  } catch (error) {
    res.send({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { order } = req.body;
  try {
    if (order) {
      const db = await Order.findOne({
        where: {
          id: id
        }
      })
      console.log(db)
      if (db) {
        await db.update({status: order })
        res.status(200).send("Orden actualizada")
      }
    }
  } catch (error) {
    console.log(error.message)
    res.status(404).json(error)
  }
})
router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    if (id) {
      const container = await Order.findOne({ where: { id: id } })
      if (container) {
        await container.update({ isActive: false })
        res.status(200).send("Orden Inactiva")
      }
    }
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})
module.exports = router;