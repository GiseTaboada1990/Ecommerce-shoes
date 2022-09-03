import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { useDispatch} from "react-redux";
import { FaHeart } from "react-icons/fa";
import { addOneToFav } from "../../redux/actions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function ProductCard({ image, title, price, id }) {
  const dispatch = useDispatch();

  //MODAL//
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

  const addToFav = (e) => {
    e.stopPropagation();
    dispatch(addOneToFav(id));
    toast.success("Tu producto fue agregado favoritos!", {
      className: "fav-toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
  };
  
  return (
    <div className={styles.allContainer}>
      <div onClick={(e) => openModal(e)} className={styles.infoContainer}>
        <div className={styles.containerImg}>
          <img src={image} alt="img not found" className={styles.cardImg} />
        </div>
        <div className={styles.botonFav}>
          <button onClick={addToFav}>
            <FaHeart style={{ color: "#f87d2d" }} />
          </button>
        </div>
        <div className={styles.container}>
          <div className={styles.short}>
            {title.length > 20 ? (
              <h4 className={styles.title}>{title.slice(0, 15)}...</h4>
            ) : (
              <h4 className={styles.title}>{title}</h4>
            )}
          </div>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ProductDetail id={id} />
      </Modal>
    </div>
  );
}
