const { payment } = require("mercadopago");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;
const { Router } = require("express");
const router = Router();
const { Product, Size } = require("../db");
const { Op } = require("sequelize");
const e = require("express");

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

router.post("/", function (req, res) {
  try {
    ordenID = 1;
    if (req.body.as.length === 0) res.status(400).send("Carrito vacío");
    const userBody = req.body.userId;
    const items_ml = req.body.as.map((p) => ({
      name: p.title,
      quantity: p.quantity,
      unit_price: p.price,
    }));
    //creamos un objeto de preferencia
    let preference = {
      items: items_ml,
      external_reference: `${ordenID}`,
      payment_methods: {
        exclude_payments_types: [
          {
            id: "atm",
          },
        ],
        installments: 3,
      },
      back_urls: {
        failure: `http://localhost:3001/payments/failure/${ordenID}`,
        pending: `http://localhost:3001/payments/pending/${ordenID}`,
        success: `http://localhost:3001/payments/success/${ordenID}`,
      },
    };

    mercadopago.preferences
      .create(preference)
      .then((r) => {
        console.info("respondio");
        (global.id = r.body.id), res.json({ id: global.id });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

router.put("/", async (req, res) => {
  try {
    const idAll = req.body.cart;
    let productId = [];
    let sizeId;
    let productArray = [];

    for (let i = 0; i < idAll.length; i++) {
      sizeId = idAll[i].sizeNumber;
      productId.push(idAll[i].id);
      console.log(sizeId);
    }

    for (let i = 0; i < productId.length; i++) {
      const productCopy = await Product.findOne({
        where: { id: productId[i] },
        include: [
          { model: Size, where: { number: { [Op.or]: sizeId.map((e) => e) } } },
        ],
      });
      console.log(productCopy.sizes.map((e) => e));
      const data = productCopy.sizes.map((s) => s.id);

      productCopy.removeSizes(data);

      for (let j = 0; j < productCopy.sizes.length; j++) {
        const newSizes = await Size.create({
          number: productCopy.sizes[j].number,
          stock: productCopy.sizes[j].stock - 1,
          solds: productCopy.sizes[j].solds + 1,
        });
        console.log(newSizes);
        await productCopy.addSize(newSizes);
      }
      await productCopy.save();

      productArray.push(productCopy);
    }

    res.status(200).json(productArray);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

module.exports = router;
