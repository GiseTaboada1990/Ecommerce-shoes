const { Router } = require("express");
const { Product, Order, Size } = require("../db");
const { Op } = require("sequelize");


const router = Router();

router.get("/inactiveShoes", async (req, res)=>{
    try {
      const product = await Product.findAll({where:{isActive: false}},{include:{all: true}})
      res.status(200).json(product)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
})

router.get("/inactiveOrder", async (req, res)=>{
    try {
      const order = await Order.findAll({where:{isActive: false}},{include:{all: true}})
      res.status(200).json(order)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
})
router.get("/tallessinstock", async (req, res)=>{
  try {
    const product = await Product.findAll({include:{ model: Size, where:{isActive:false}}})
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

module.exports = router;