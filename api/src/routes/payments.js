const { Router } = require("express");
const router = Router();
const axios = require("axios");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN, API_URL, CLIENT_URL } = process.env;
const { Order } = require('../db')

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

router.post("/", async (req, res) => {
  const { cart, userId } = req.body;

  const orden = (await axios.post(`${API_URL}/order`, { cart, userId })).data

  try {
    const items_ml = cart.map((p) => ({
      name: p.title,
      quantity: p.quantity,
      unit_price: p.price,
    }));

    let preference = {
      items: items_ml,
      external_reference: `${orden.id}`,
      payment_methods: {
        exclude_payments_types: [
          {
            id: "atm",
          },
        ],
        installments: 3,
      },
      back_urls: {
        failure: `${API_URL}/payments/failure/${orden.id}`,
        pending: `${API_URL}/payments/pending/${orden.id}`,
        success: `${API_URL}/payments/success/${orden.id}`,
      },
    };

    mercadopago.preferences
      .create(preference)
      .then((r) => {
        (global.id = r.body.id), res.json({ id: global.id });
      })
      .catch((err) => {
        console.log('----------------------PREFERENCE ERROR-----------------------')
        console.log(err)
        throw err
      })

  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/success/:id", async (req, res) => {

  const { id } = req.params

  try {
    const order = await Order.findOne({ where: { id } })
    await order.update({ status: 'realizada' })
    
    await axios.put(`${API_URL}/stock`,{ idOrden: id })

    res.redirect(`${CLIENT_URL}`);

  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/failure/:id", async (req, res) => {

  const { id } = req.params;

  try {
    const order = await Order.findOne({ where: { id } })
    await order.update({ status: 'cancelada' })

    res.redirect(`${CLIENT_URL}`);

  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/pending/:id", async (req, res) => {

  const { id } = req.params;

  try {
    const order = await Order.findOne({ where: { id } })
    await order.update({ status: 'pendiente' })

    res.redirect(`${CLIENT_URL}`);

  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;