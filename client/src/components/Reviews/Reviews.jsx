import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { URL } from '../../redux/actions';
import { FaStar } from 'react-icons/fa'
import styles from './Reviews.module.css';
import swal from 'sweetalert';
import { useAuth0 } from '@auth0/auth0-react';
import { DropdownMenu, Dropdown, DropdownToggle } from 'reactstrap'

function Reviews({ myShoes, closeModal }) {
  
  const [menu, setMenu] = useState(false)
  const {isAuthenticated } = useAuth0()
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    rating: null,
    description: ''
  });
  const [reviews, setReviews] = useState([]);
  const [hover, setHover] = useState(-1);
  const infoUser = JSON.parse(localStorage.getItem("user"))
  
  useEffect(() => {
    axios(`${URL}/reviews/product/${myShoes.id}`)
      .then((data) => setReviews(data.data))
      .catch((error) => console.log(error))
  }, [myShoes.id])

  const validationReviews = (input) => {
    let errores = {}
    if (input.rating === null && input.description === '') error.form = 'Debe agragar una puntuacion con estrellas y un comentario para enviar la reseña'
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
            icon: 'error',
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
    <div className="container mt-5 mb-5">
      <div className="row g-2">
        <div className="ratings">
        {isAuthenticated && <Dropdown isOpen={menu} toggle={toggleMenu}>
      <DropdownToggle >
                    Añadir Reseña
      </DropdownToggle>
      <DropdownMenu >
          <form onSubmit={handleAddReview}>
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
                  <FaStar
                    color={ratingValue <= (hover || input.rating) ? '#ffc107' : '#e4e5e9'}
                    className={styles.star}
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)} />
                </label>
              )
            })}
            {error.length && !error.rating ? null : (
              <span className={styles.error}>{error.rating}</span>
            )}
            <br />
            <textarea
              className={styles.inputConteiner}
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
            {error.length && !error.description ? null : (
              <span className={styles.error}>{error.description}</span>
            )}
            <div>
              <button
                className={!Object.keys(error).length ? styles.createButton : styles.createButton2}
                type='submit'
                disabled={Object.keys(error).length ? true : false}>Enviar</button>
              {error.length && !error.form ? null : (
                <span className={styles.error}>{error.form}</span>
              )}
            </div>
          </form>
          </DropdownMenu>
    </Dropdown>}
        </div>
        {reviews.length > 0 ? reviews.map((r) => (
          <div className="col-md-4">
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img src={r.user.image} className="rounded-circle" width="80" />
              </div>
              <div className="user-content">
                <h5 className="mb-0">{r.user?.username}</h5>
                <p>{r.description}</p>
              </div>
              <div className="ratings">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1
                  return <FaStar
                    color={ratingValue <= r.value ? '#ffc107' : '#e4e5e9'} />
                })}
              </div>
            </div>
          </div>)) : (
          <h5>No se encontraron reseñas para este producto.</h5>
        )}

      </div>
    </div>
    
  );
}
export default Reviews