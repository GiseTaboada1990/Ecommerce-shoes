import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { URL } from '../../redux/actions';
import { FaStar } from 'react-icons/fa'
import { BsStar } from 'react-icons/bs'
import { RiArrowUpSFill } from 'react-icons/ri'
import styles from './Reviews.module.css';
import swal from 'sweetalert';
import { useAuth0 } from '@auth0/auth0-react';

function Reviews({ myShoes, closeModal }) {

  const [menu, setMenu] = useState(false)
  const { isAuthenticated } = useAuth0()
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    rating: null,
    description: ''
  });
  const [reviews, setReviews] = useState([]);
  const [hover, setHover] = useState(-1);
  const infoUser = JSON.parse(localStorage.getItem("user"))

  console.log('errors', error)

  useEffect(() => {
    axios(`${URL}/reviews/product/${myShoes.id}`)
      .then((data) => setReviews(data.data))
      .catch((error) => console.log(error))
  }, [myShoes.id])

  const validationReviews = (input) => {
    let errores = {}
    if (input.rating === null && input.description === '') error.form = 'Debe agregar una puntuacion con estrellas y un comentario para enviar la reseña'
    if (input.rating === null) errores.rating = 'Debe puntuar el producto para enviar una reseña'
    if (input.description === '') errores.description = 'Debe agregar un comentario sobre el producto para enviar una reseña'

    return errores
  }

  const handleAddReview = (e) => {
    e.preventDefault()
    axios.post(`${URL}/reviews/${myShoes.id}`, {
      userId: infoUser.id,
      value: input.rating,
      description: input.description,
    })
      .then((data) => {
        swal({
          title: 'Tu reseña se ha enviado con éxito',
          icon: 'success',
          timer: '3000'
        })
        closeModal()
      })
      .catch((err) => {
        if (err.response.status === 401) {
          swal({
            title: 'Yas has escrito una reseña para este producto',
            icon: 'error',
            timer: '3000'
          })
        }
        if (err.response.status === 500) {
          swal({
            title: 'Debes agregar una puntuación con estrellas y un comentario para añadir una reseña para este producto',
            icon: 'warning',
            timer: '3000'
          })
        }
      })
    setInput({
      rating: null,
      description: ''
    })
  };

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
      {isAuthenticated &&
        <>
          <button className='bg-black text-white mt-4 mx-auto rounded-4' onClick={() => toggleMenu()}>
            {menu ? <RiArrowUpSFill size={30} /> : 'Añadir Reseña'}
          </button>
          <form onSubmit={handleAddReview} className={`${menu ? 'd-block' : 'd-none'}`}>
            <div className='d-flex justify-content-center'>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={input.rating}
                      onBlur={() => validationReviews(input)}
                      onClick={() => {
                        setInput({
                          ...input,
                          rating: ratingValue
                        })
                        setError(validationReviews({
                          ...input,
                          rating: ratingValue
                        }))
                      }} />
                    {ratingValue <= (hover || input.rating) ? 
                      <FaStar
                        color='#ffc107'
                        className={styles.star}
                        size={30}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)} />
                      :
                      <BsStar
                        color='#000'
                        className={styles.star}
                        size={30}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)} />
                      }
                  </label>
                )
              })}
            </div>
            {Object.keys(error).length && error.rating ? 
              <p className='text-danger text-center w-90  '>{error.rating}</p>
              :
              null
            }
            <div>
              <textarea
                className='w-100 h-50'
                type='text'
                name='description'
                value={input.description}
                onBlur={() => validationReviews(input)}
                onChange={(e) => {
                  setInput({
                    ...input,
                    description: e.target.value
                  })
                  setError(
                    validationReviews({
                      ...input,
                      description: e.target.value
                    })
                  )
                }}></textarea>
              <div className='d-flex'>
                  <span className='text-danger text-center w-90'>{error.description}</span>
                <button
                  className='px-4 rounded-4 bg-black text-white align-self-end'
                  type='submit'
                  disabled={Object.keys(error).length ? true : false}>Enviar</button>
              </div>
              {Object.keys(error).length && error.form ?
                <span className={styles.error}>{error.form}</span>
              :
                null
              }
            </div>
          </form>
        </>
      }
      <div>
      {reviews.length > 0 ? reviews.map((r) => (
          <div className="card w-100 p-3 text-center px-4 shadow-lg my-2">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={r.user.image} className="rounded-circle" width="80" />
                <span className="mb-0 text-black">{r.user?.username}</span>
              </div>
              <div className='col-md-8 text-start px-4 py-2 d-flex flex-column justify-content-between'>
                <p className='mt-2 mb-0'>{r.description}</p>
                <div>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return <FaStar
                      color={ratingValue <= r.value ? '#ffc107' : '#e4e5e9'} />
                  })}
                </div>
              </div>
            </div>
          </div>
        )) : (
        <h5 className='text-black mt-5'>No se encontraron reseñas para este producto.</h5>
      )}
      </div>
    </>

  );
}
export default Reviews