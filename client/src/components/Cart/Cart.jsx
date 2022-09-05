import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem.jsx";
import { useSelector, useDispatch } from "react-redux";
import { deleteOneToCart, getIdPayment, removerTodo } from "../../redux/actions";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import MercadoPago from "../MercadoPago/MercadoPago";
import axios from "axios";

export default function Cart() {

  // ################### MODAL ############################ // 
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalIsOpen]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "610px",
      height: "650px",
      "border-radius": "10px",
      "background": "#212121",
    },
  };

  // ################### FIN MODAL ############################ // 

  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(cartProducts, "Soy el producto añadido al carrito")

  let precios = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].quantity === 1) {
      precios += cartProducts[i].price;
    } else {
      precios += cartProducts[i].price * cartProducts[i].quantity;
    }
  }
  const deleteProduct = (id, all = false) => {
    dispatch(deleteOneToCart({ productId: id, all }));
  };
  const clearCart = () => {
    dispatch(removerTodo());
  };
  
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const cart = JSON.parse(localStorage.getItem('cart'))
  const user = JSON.parse(localStorage.getItem('user'))

  const handlePayment = () => {
    axios.post(`${process.env.REACT_APP_URL}/payments`, { userId: user.id, cart })
      .then((res) => {
        dispatch(getIdPayment(res.data.id))
      })
      .catch((err) => console.log(err))
    
    openModal()
  }

  return (
    <div>

    <div className={styles.container}>
      {/* <button onClick={clearCart}>Limpiar carrito</button> */}

      <div>
        {cartProducts && cartProducts.length ? (
          <div className={styles.contenedor}>
            {cartProducts && cartProducts.map((item, index) => (
              <CartItem key={index} data={item} deleteProduct={deleteProduct} />
            ))}
            <div className={styles.carrito}>
                <h2>SUMA TOTAL: ${precios}</h2>
              <div>
                <Link to="/mercadopago" className={styles.mpLinkBtn}>
                  <button onClick={(e) => handlePayment()} 
                    className={styles.buttonsContainer}>
                    Ir a comprar
                  </button> 
                </Link> 
                <button className={styles.buttonsContainer} onClick={clearCart}>
                  Limpiar carrito
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.containerSinDato}>
            <h5>El carrito está vacío.</h5>
            <h5>Vuelve y escoge tus zapatillas favoritas!</h5>
          </div>
        )}
      </div>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <MercadoPago dataPayment={dataPayment} />
      </Modal> */}
    </div>
    </div>
  );
}
