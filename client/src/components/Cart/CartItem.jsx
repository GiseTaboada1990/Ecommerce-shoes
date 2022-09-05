import styles from "./CartItem.module.css";

const CartItem = ({ data, deleteProduct }) => {
  let { id, image, price, quantity, sizeNumber } = data;

  return (
    <div className={styles.container}>
      <img src={image} alt="Img Not Found" className={styles.imgCart} />
      <div className={styles.info}>
        <h5>
          ${price} x {quantity} = ${price * quantity}
        </h5>
       
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => deleteProduct(id)}
            className={styles.deleteBtn}
          >
            Eliminar (1)
          </button>
          <button
            onClick={() => deleteProduct(id, true)}
            className={styles.deleteBtn}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
              width={30}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
