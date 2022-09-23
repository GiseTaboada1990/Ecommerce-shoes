import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOneToCart, cleanDetails, getDetails, getIdPayment } from '../../redux/actions';
import styles from "./ProductDetail.module.css";
import { useNavigate, Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import { FaStar } from 'react-icons/fa';
import swal from 'sweetalert'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'


function ProductDetail({ id, closeModal }) {

    const { loginWithRedirect } = useAuth0()
    const { isAuthenticated } = useAuth0()
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
    }
    const divisor = myShoes && myShoes.reviews?.length === 0 ? 1 : myShoes.reviews?.length
    const promedio = contador / divisor
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
            swal({
                text: 'Debes delegir al menos un talle',
                icon: 'error',
                timer: '3000'
            })
        } else {
            if (isAuthenticated) {
                dispatch(addOneToCart(shoesAdd));
                swal({
                    text: 'El producto se añadió correctamente al carrito de compras',
                    icon: 'success',
                    timer: '3000'
                })
                closeModal()

                setSize([]);
            } else {
                swal({
                    text: 'Debes estar logueado para poder añadir al carrito',
                    icon: 'error',
                    timer: '3000'
                })
            }
        }
    };

    const handleEdit = () => {
        navigate('/post', {
            state: myShoes
        })
    }
    const user = JSON.parse(localStorage.getItem('user'))

    const handlePayment = () => {
        if(size.length > 0){
            navigate('/mercadopago')
            addToCart()
            axios.post(`${process.env.REACT_APP_URL}/payments`, { userId: user.id, cart: [shoesAdd] })
                .then((res) => {
                    console.log(res.data)
                    dispatch(getIdPayment(res.data.id))
                })
                .catch((err) => console.log(err))
        }else{
            swal({
                text:'Debes elegir al menos un talle',
                icon: 'warning',
                timer:'3000'
            })
        }
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
                    <br />
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1
                        return <FaStar
                            color={ratingValue <= promedio ? '#ffc107' : '#e4e5e9'}
                            size={30} />
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
                                            <h3 className={styles.price}>${size.length ? myShoes.price * size.length : myShoes.price}</h3>
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
                                Añadir al carrito
                            </button>{" "}
                        </div>
                        <button onClick={() => handleEdit(myShoes.id)}>Editar Producto</button>
                        {isAuthenticated ? (
                            <button onClick={(e) => handlePayment()}
                                className={styles.cart}>
                                Ir a comprar
                            </button>) : (
                        <button onClick={() => loginWithRedirect()}
                            className={styles.cart}>
                            Logueate para comprar
                        </button>
                        )}
                    </div>
                    <Reviews
                        myShoes={myShoes}
                        closeModal={closeModal} />
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

export default React.memo(ProductDetail)