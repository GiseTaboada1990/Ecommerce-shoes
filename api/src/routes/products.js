const { Router } = require("express");
const { Product, Brand, Category, Size } = require("../db.js");
const { Op } = require("sequelize");
const {
  getByName,
  getByBrand,
  getByCategory,
  getByPrice,
  getAll,
  getBySize,
} = require("../controllers/products.js");
const { getAllFilters } = require("../controllers/filtersCombinations");
const router = Router();

router.get("/", async (req, res, next) => {
  const { name, priceMax, priceMin, brand, category, size } = req.query;
  const options = getAllFilters(req.query);
  if (Object.keys(options).length) {
    const resulTs = await Product.findAll(options);
    res.status(200).json(resulTs);
  } else if (name) {
    try {
      const results = await getByName(name);

      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  } else if (brand) {
    try {
      const results = await getByBrand(brand);

      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  } else if (category) {
    try {
      const results = await getByCategory(category);

      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  } else if (size) {
    try {
      const results = await getBySize(size);

      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  } else if (priceMax) {
    try {
      const results = await getByPrice(priceMin, priceMax);

      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const results = await getAll();

      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const foundProduct = await Product.findByPk(id, {
        include:[
          { model: Brand },
          { model: Category },
          { model: Size, where:{isActive:true}},
        ],
      });

      if (foundProduct) {
        res.status(200).send(foundProduct);
      } else {
        res.status(400).json("ID not found");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, model, image, price, size, brand, category } = req.body;

    const [newProduct, created] = await Product.findOrCreate({
      where: {
        title,
      },
      defaults: {
        id: `MLA${Math.round(Math.random() * 1000000000)}`,
        model,
        image,
        price,
      },
    });
    const findCategories = await Category.findOne({
      where: { name: { [Op.iLike]: `%${category}%` } },
    });
    const findBrand = await Brand.findOne({
      where: { name: { [Op.iLike]: `%${brand}%` } },
    });
   
    for (let j = 0; j < size.length; j++) {
      let stock = size[j].stock
      const newSizes = await  Size.create({
            number: size[j].number,
            stock: parseInt(stock),
            solds: 0
        })
        console.log(newSizes)
      await newProduct.addSize(newSizes)
      console.log(newSizes)
    }

    
    newProduct.setCategory(findCategories);
    newProduct.setBrand(findBrand);

    !created
      ? res.status(201).send("There is already a Product with that title")
      : res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, model, image, price, brand, category} = req.body;
    const { id } = req.params;

    const productUpdated = await Product.findOne({
      where: { id },
      include: [{ all: true }],
    });
    console.log("product", productUpdated);
    const oldBrand = productUpdated.brand.id;
    console.log("brand", oldBrand);
    const oldCategory = productUpdated.category.id;

    await productUpdated.update(oldBrand);
    await productUpdated.update(oldCategory);
   
    const brandDb = await Brand.findOne({
      where: { name: { [Op.iLike]: `%${brand}%` } },
    });
    const categoryDb = await Category.findOne({
      where: { name: { [Op.iLike]: `%${category}%` } },
    });
   
    await productUpdated.setBrand(brandDb);
    await productUpdated.setCategory(categoryDb);
    
    productUpdated.set({
      title,
      model,
      image,
      price,
    });

    await productUpdated.save();
    res.status(200).send(productUpdated);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    if (id) {
      const product = await Product.findOne({ where: { id: id } })
      if (product) {
        await product.update({ isActive: false })
        res.status(200).send("Producto Inactivo")
      }
    }
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})

module.exports = router;
