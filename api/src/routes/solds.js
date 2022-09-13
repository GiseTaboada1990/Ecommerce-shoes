const { Router } = require("express");
const { Product, Size } = require("../db");
const { Op } = require("sequelize")
const router = Router();

router.get('/', async(req, res)=>{
    try {
        const solds = await Product.findAll({
            include:[{ model: Size, where:{solds:{[Op.gt]: 0}}}]
            })
            
        res.status(200).json(solds)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})
module.exports = router