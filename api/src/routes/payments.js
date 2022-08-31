const { Router } = require("express");
const router = Router();
const axios = require("axios");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

let idInterval
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

router.post("/", async (req, res) => {
  clearInterval(idInterval)
  const {as, userId} = req.body;
  let contador = 0
  let orden={}
   idInterval=setInterval(async() => {
    if(contador===0){
      orden = (await axios.post(`http://localhost:3001/order`, { as,userId })).data
    }
    contador++
  },500);
  await timeout(5000)
  clearInterval(idInterval)
  console.log(orden,"orden")
  console.log(idInterval)
  console.log(contador)
 
  try {
    const items_ml = as.map((p) => ({
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
        failure: `http://localhost:3001/payments/failure/${orden.id}`,
        pending: `http://localhost:3001/payments/pending/${orden.id}`,
        success: `http://localhost:3001/payments/success/${orden.id}`,
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
      })
   
  } catch (error) {
    console.log("Entra aca", error);
    res.status(404).json(error);
  }
}); 

router.get("/success/:id", async (req, res) => {

  const {id} = req.params;

  try {
    await axios.put(`http://localhost:3001/order/${id}`, {order: "realizada"})
    /* await axios.put(`http://localhost:3001/stock`,{}) */
    res.redirect("http://localhost:3000/");
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/failure/:id", async(req, res) => {

  const {id} = req.params;

  try {
    await axios.put(`http://localhost:3001/order/${id}`, {order: "cancelada"})
    res.redirect("http://localhost:3000/");
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/pending/:id", async (req, res) =>  {

  const {id} = req.params;

  try {
    await axios.put(`http://localhost:3001/order/${id}`, {order: "pendiente"})
    res.redirect("http://localhost:3000/");
  } catch (error) {
    res.send({ error: error.message });
  }
});


 /*  const url = "https://api.mercadopago.com/checkout/preferences";
  const body = {
    items: item,
    back_urls: {
      failure: `http://localhost:3001/payments/failure/${id}`,
      pending: `http://localhost:3001/payments/pending/${id}`,
      success: `http://localhost:3001/payments/success/${id}`,
    }
  };
  const payment = await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ACCES_TOKEN}`,
    },
  });
////ACCES_TOKEN = APP_USR-7186342339590293-051403-1dd7693603cbe79be81d357b18b1a2cc-185162521

    const result = [
      payment.data.init_point,
      payment.data.id,
      payment.data.items.map((e) => {
      return e;
      }),
    ];
    console.log("Esto es payments ", payment);
    return result; */


module.exports = router;