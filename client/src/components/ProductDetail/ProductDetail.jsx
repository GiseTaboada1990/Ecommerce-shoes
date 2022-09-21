import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOneToCart, cleanDetails, getDetails } from '../../redux/actions';
import { toast } from "react-toastify";
import styles from "./ProductDetail.module.css";
import { useNavigate } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import { FaStar } from 'react-icons/fa'


function ProductDetail({ id, closeModal }) {


    const myShoes = useSelector((state) => state.details);
    console.log('myshoes -->', myShoes)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(id));
        return () => {
            dispatch(cleanDetails())
        }
    }, [dispatch, id]);
    //Promedio de reviews
    let contador = 0
    for (let i = 0; i < myShoes.reviews?.length; i++) {
        contador = contador + myShoes.reviews[i].value
        console.log(myShoes.reviews[i].value, 'for')
    }
    const divisor = myShoes && myShoes.reviews?.length === 0 ? 1 : myShoes.reviews?.length
    const promedio = contador / divisor
 
  console.log(contador, 'contador') 
    console.log(promedio, 'promedio')
//---------------------------------------------------------------------------------------
  
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
            const cartCurrent = JSON.parse(localStorage.getItem('cart'))
            localStorage.setItem('cart', JSON.stringify([...cartCurrent, shoesAdd]))
            toast.success("Tu producto fue agregado al carrito!", {
                className: "cart-toast",
                draggable: true,
                position: toast.POSITION.TOP_CENTER,
            });
            setSize([]);
        }
        closeModal()
    };
    const handleEdit = () => {
        navigate('/post', {
            state: myShoes
        })
    }

    return (
        <div>
            {myShoes ? (
                <div className={styles.divCard}>
                    <img
                        src={myShoes.image}
                        alt="imgShoes not found"
                        className={styles.imagen}
                    />
                    <br/>
                    {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1
                  return <FaStar
                    color={ratingValue <= promedio ? '#ffc107' : '#e4e5e9'} 
                    size={30}/>
                })}
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
                                            <h3 className={styles.price}>${size.length? myShoes.price * size.length : myShoes.price}</h3>
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
                        <button onClick={() => handleEdit(myShoes.id)}>Editar Producto</button>
                    </div>
                    <Reviews 
                    myShoes = {myShoes}
                    closeModal={closeModal}/>
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