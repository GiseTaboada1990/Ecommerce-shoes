import { useEffect, useState } from "react";
import s from "./Checkout.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { mercadoPago } from "../../services/mercadoPago";
import axios from 'axios'


export default function Comprar() {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const user = JSON.parse(localStorage.getItem('user'))
  const [data, setData] = useState({})
  const [fetching, setFetching] = useState(true)

  console.log('fetchin -->', fetching)

  useEffect(() => {
    if (fetching) {
      console.log('fetch a mercado pago')
      axios.post(`${process.env.REACT_APP_URL}/payments`, { userId: user.id, as: cart })
        .then((res) => {
          setData(res.data)
          setFetching(false)
        })
        .catch((err) => console.log(err))
    }
  }, [])

  useEffect(() => {
    const script = document.createElement("script"); //Crea un elemento html script

    if (fetching) {
      const attr_data_preference = document.createAttribute("data-preference-id"); //Crea un nodo atribute
      attr_data_preference.value = data.id; //Le asigna como valor el id que devuelve MP

      //Agrega atributos al elemento script
      script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttributeNode(attr_data_preference);

      //Agrega el script como nodo hijo del elemento form
      document.getElementById("form1").appendChild(script);
    }

    return () => {
      //Elimina el script como nodo hijo del elemento form
      document.getElementById("form1").removeChild(script);
    }
  }, [])


  let precios = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].quantity === 1) {
      precios += cart[i].price;
    } else {
      precios += cart[i].price * cart[i].quantity;
    }
  }
  return (
    <div>
      <div className={s.container}>
        <form id="form1" className={s.allContainer}>
          <div className={s.hijo}>
            {cart && cart.map((producto, i) => {
              return (
                <div className={s.hijo2} key={i}>
                  <img src={producto.image} alt="" width={200} />
                  <h5>{producto.title}...</h5>
                  <h5>
                    {producto.price} x {producto.quantity} =$
                    {producto.price * producto.quantity}
                  </h5>
                </div>
              );
            })}
          </div>
        </form>
        <h4 className={s.totalAPagar}>Total a pagar: ${precios}</h4>
      </div>
    </div>
  );
}
