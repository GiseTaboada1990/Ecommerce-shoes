import "./App.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUsers, postOrder, putProductStock } from "../../redux/actions";
import s from "./Checkout.module.css";

function MercadoPago() {
  const { idPayment } = useSelector(state => state)

  const cart = JSON.parse(localStorage.getItem('cart'))

  useEffect(() => {
    let script = document.createElement("script");

    if (idPayment) {
      script = document.createElement("script"); //Crea un elemento html script
      //Agrega atributos al elemento script
      const attr_data_preference = document.createAttribute("data-preference-id"); //Crea un nodo atribute
      attr_data_preference.value = idPayment; //Le asigna como valor el id que devuelve MP
      script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttributeNode(attr_data_preference);
    }

    //Agrega el script como nodo hijo del elemento form
    document.getElementById("form1").appendChild(script);

    return () => {
      //Elimina el script como nodo hijo del elemento form
      document.getElementById("form1").removeChild(script);
    }
  }, [idPayment])


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
export default MercadoPago;
