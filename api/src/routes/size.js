const { Router } = require("express");
const { Size } = require("../db");
const router = Router();
const { getDbSize, cargoalDB } = require("../controllers/index.js");

router.get("/", async (req, res) => {
  try {
    const sizeDb = await getDbSize();

    if(!sizeDb.length){
    
      const sizeProduct = await cargoalDB()
      const result = sizeProduct.flat().map(s=>s.size.map(a=>{
        return({
          number:a.number,
          stock:a.stock,
          solds:a.solds,
        })
      }))
      const setSizes = [...new Set(result.map(JSON.stringify))].map(e => JSON.parse(e))
      
      const data =setSizes.forEach((s) => s.map(async(i)=>{
        await Size.create({
          number:i.number,
          stock:i.stock, 
          solds:i.solds,
          isActive: i.stock > 0 ? true: false
        })
      }))
      res.status(200).json(data);
    } else {
      res.status(200).json(sizeDb);
    }
    } catch (err) {
      console.log(err)
    res.status(404).json(err);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const sizeDb = await Size.findOne({ include: { model: Product, where: { id } } });

    res.status(200).json(sizeDb);
    
    } catch (err) {
      console.log(err)
      res.status(404).json(err);
  }
})

module.exports = router