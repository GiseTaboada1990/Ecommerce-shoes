const { Router } = require("express");
const { Product, Size } = require("../db");
const {Op} = require("sequelize")
const router = Router();

router.put("/", async (req, res) => {
  try{
    const idAll = req.body.cart;
    let productId = [];
    let sizeId ;
    let productArray = [];
    
    for (let i = 0; i < idAll.length; i++) {
      sizeId=idAll[i].sizeNumber;
      productId.push(idAll[i].id)
      console.log(sizeId)
  }

  for (let i = 0; i < productId.length; i++) {
     const productCopy = await Product.findOne({
      where: { id: productId[i] },include:[{model:Size, where:{number:{[Op.or]:sizeId.map(e=>e)}}}]})
     console.log(productCopy.sizes.map(e=>e))
      const data = productCopy.sizes.map(s=>s.id)
     
    productCopy.removeSizes(data)
   
    for (let j = 0; j < productCopy.sizes.length; j++) {
      const newSizes = await  Size.create({
            number: productCopy.sizes[j].number,
            stock: productCopy.sizes[j].stock -1,
            solds: productCopy.sizes[j].solds +1,
            isActive: productCopy.sizes[j].stock -1 === 0? false:true
        })
        console.log(newSizes)
      await productCopy.addSize(newSizes)
      }
      await productCopy.save();
  
    productArray.push(productCopy);
   }

   res.status(200).json(productArray)

  } catch(error){
    console.log(error)
    res.status(404).json(error)
  }
});




module.exports= router