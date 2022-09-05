import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOneToCart, cleanDetails, getDetails } from '../../redux/actions';
import { ToastContainer, toast } from "react-toastify";
import styles from "./ProductDetail.module.css";


function ProductDetail({ id }) {
    const myShoes = useSelector((state) => state.details);
    console.log('myshoes -->',myShoes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetails(id));
        return () => {
            dispatch(cleanDetails())
        }
    }, [dispatch, id]);

    const [size, setSize] = useState([]);
    const shoesAdd = {
        id: id,
        title: myShoes.title,
        size: size.map((e) => parseInt(e)),
        price: myShoes.price,
        quantity: size.length,
    };

    const handleOnChangeSize = (e) => {
        e.preventDefault();
        setSize(size.concat(e.target.value));
    };
    const handleDeleteSizes = (e, el) => {
        e.preventDefault();
        setSize(size.filter((en) => en !== el));
    };

    const addToCart = () => {
        if (size.length === 0) {
            toast.error("Debes elegir al menos 1 talle!", {
                className: "cart-toast",
                draggable: true,
                position: toast.POSITION.TOP_CENTER,
            })
        } else {
            dispatch(addOneToCart(shoesAdd));
            localStorage.setItem('cart' ,JSON.stringify([shoesAdd]))

            toast.success("Tu producto fue agregado al carrito!", {
                className: "cart-toast",
                draggable: true,
                position: toast.POSITION.TOP_CENTER,
            });
            setSize([]);
        }
    };

    return (
        <div>
            {myShoes ? (
                <div className={styles.divCard}>
                    <img
                        src={myShoes.image}
                        alt="imgShoes not found"
                        className={styles.imagen}
                    />
                    <div className={styles.divContent}>
                        <h1 className={styles.title}>{myShoes.title}</h1>
                        <div className={styles.sizePriceCont}>
                            <div className={styles.sizeContainer}>
                                <div className={styles.sizeYSelect}>
                                    <div className={styles.tallesContainer}>
                                        <div className={styles.talleDetails}>
                                            <h1 className={styles.size}>Talle: </h1>
                                            <select
                                                className={styles.selectSize}
                                                onChange={(e) => {
                                                    handleOnChangeSize(e);
                                                }}
                                            >
                                                {myShoes.sizes &&
                                                    myShoes.sizes.map((s, i) => (
                                                        <option key={i} value={s.number}>
                                                            {s.number}
                                                        </option>
                                                    ))}
                                            </select>
                                            {size.length ?
                                                size.map((sn, i) => (
                                                    <span
                                                        className={styles.selectedSize}
                                                        key={i}
                                                        onClick={(e) => {
                                                            handleDeleteSizes(e, sn);
                                                        }}
                                                    >
                                                        {sn}
                                                    </span>
                                                )) : null}
                                        </div>
                                        <div className={styles.cantYPrecio}>
                                            <h4>
                                                Cantidad: {size.length}
                                            </h4>
                                            <h3 className={styles.price}>${myShoes.price}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button
                                className={styles.cart}
                                onClick={addToCart}
                                id={myShoes.id}
                            >
                                Añadir al carro
                            </button>{" "}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <img
                        src="https://i.pinimg.com/originals/76/59/35/7659353c8fcde74a4c224dafd7a5eccf.gif"
                        alt="Shoes"
                    />
                    <p>Loading...</p>
                </div>
            )}
        </div>
    )
}

export default ProductDetail