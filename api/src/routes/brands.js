const { Router } = require("express");
const { Brand } = require("../db");
const router = Router();
const axios = require("axios");
const { getDbBrand } = require("../controllers/index.js");
const { defaults } = require("pg");

router.get("/", async (req, res) => {
  try {
    const dbBrands = await getDbBrand();

    if (!dbBrands.length) {
      const url = "https://api.mercadolibre.com/sites/MLA/search?category=";
      //------------------------------TODOS LOS IDS DE LAS CATEGORIAS
      const ids = [
        "MLA109027&BRAND=14671",
        "MLA109027&BRAND=14810",
        "MLA109027&BRAND=252310",
        "MLA109027&BRAND=124578",
        "MLA414251&BRAND=58625",
        "MLA416005&BRAND=130142",
        "MLA415194&BRAND=130114",
        "MLA414674&BRAND=1088662",
        "MLA414610&BRAND=2658635",
        "MLA415192&BRAND=1088662",
        "MLA414673&BRAND=238731",
        // 'MLA455893', 'MLA414673' //---> NO TIENEN BRAND
      ].map((e) => url + e); // armo la url ej: "https://api.mercadolibre.com/sites/MLA/search?category=MLA109027&BRAND=14671"
      //console.log(ids)
      const getAllApi = await Promise.all(
        ids.map(async (link) => {
          return (await axios(link)).data.results;
        })
      );

      const brandsApi = getAllApi.flat().map(e => ({ 
        id: e.attributes[0].values[0].id || `${Math.round(Math.random() * 1000000000)}`, 
        brand: e.attributes[0].value_name 
      }))
 
      const setBrands = [...new Set(brandsApi.map(JSON.stringify))].map(e => JSON.parse(e))
      //me la llevo para toda la vida


      setBrands.forEach(async (s) => {
        await Brand.findOrCreate({
          where: { id: s.id },
          defaults: { name: s.brand }
        })
      })

      res.status(200).send(setBrands)
    } else {
      res.send(dbBrands)
    }
  } catch (err) {
    console.log(err + " - - Catch en brands");
  }
});
module.exports = router