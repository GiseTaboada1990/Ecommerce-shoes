import styles from "./favorites.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavItem from "./FavoritesItem";
import { deleteOneToFav } from "../../redux/actions";

export default function Favorites() {
  const dispatch = useDispatch();

  const favProducts = useSelector((state) => state.favorites);
  
  useEffect(() => {
    localStorage.setItem("favProducts", JSON.stringify(favProducts));
  }, [favProducts]);

  const deleteProduct = (id) => {
    dispatch(deleteOneToFav({ FavId: id}));
  };
  const usuario = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      {/* <Navbar2></Navbar2> */}
      <div className={styles.container}>
        <div className={styles.favoritosTitle}>
          <h3 className={styles.favoritosTitle2}>Tus productos favoritos</h3>
        </div>
    
        <div>
          {usuario.id ? (
            <div>
              {favProducts.length ? (
                <div className={styles.containerCards}>
                  {favProducts.map((item, index) => (

                    <FavItem key={index} data={item} deleteProduct={deleteProduct} />
                    
                  ))}
                </div>
              ) : (
                <div>
                
                  <h4 className={styles.alertaFavs}>Todavia no tienes productos agregados a favoritos</h4>
              
                </div>
              )}
            </div>
          ) : (
          
            <h4 className={styles.mensaje}>Tienes que estar logueado para ver tus productos favoritos</h4>
          
          )}
        </div>
      </div>
    </div>
  );
}
