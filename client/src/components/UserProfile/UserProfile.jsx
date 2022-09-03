import React from "react";
import styles from "./UserProfile.module.css";
import Navbar2 from "../Navbar2/Navbar2";
import { Link } from "react-router-dom"

export default function UserProfile() {

  const infoUser = JSON.parse(localStorage.getItem("user"))
  
  return (
    <div className={styles.container}>
      <Navbar2></Navbar2>
      <div>
        <Link to="/edituser">
          <button className={styles.editBtn}>Editar</button>
        </Link>
        {infoUser ? (
          <div>
            {!infoUser.image ? (
              <img
                className={styles.img}
                src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png"
              />
            ) : (
              <img className={styles.img} src={infoUser.image} />
            )}
            {!infoUser.name ? (
              <div className={styles.nameContainer}><p className={styles.userName}>Nombre: </p> <h2>{infoUser.name}</h2></div>
            ) : (
              <div className={styles.nameContainer}><p className={styles.userName}>Nombre: </p> <h2>{infoUser.name}</h2></div>
            )}
            <div className={styles.nameContainer}><p className={styles.userName}>Apellido: </p> <h2 className={styles.userData}>{infoUser.surname}</h2></div>
            <div className={styles.nameContainer}><p className={styles.userName}>E-mail: </p> <h2 className={styles.userData}>{infoUser.email}</h2></div>
            <div className={styles.nameContainer}>{infoUser.address === null ? <><p className={styles.userName}>Direccion: </p><h2 className={styles.userData}>Debes agregar una direccion</h2></> : <><p className={styles.userName}>Direccion: </p><h2 className={styles.userData}>{infoUser.address}</h2></>}</div>
            <div className={styles.nameContainer}>{infoUser.date_of_Birth === null ? <><p className={styles.userName}>Fecha de nacimiento: </p><h2 className={styles.userData}>Debes agregar una fecha de nacimiento</h2></> : <><p className={styles.userName}>Fecha de nacimiento: </p><h2 className={styles.userData}>{infoUser.date_of_Birth}</h2></>}</div>  
            <div className={styles.nameContainer}>{infoUser.username === null ? <><p className={styles.userName}>Nombre de usuario: </p><h2 className={styles.userData}>Debes agregar un nombre de usuario</h2></> : <><p className={styles.userName}>Nombre de usuario: </p><h2 className={styles.userData}>{infoUser.username}</h2></>}</div>
            <div className={styles.nameContainer}>{infoUser.phone_number === null ? <><p className={styles.userName}>Numero de telefono: </p><h2 className={styles.userData}>Debes agregar un numero de telefono</h2></> : <><p className={styles.userName}>Numero de telefono: </p><h2 className={styles.userData}>{infoUser.phone_number}</h2></>}</div>
            <div >
              <div className={styles.historialContainer}>
                <p className={styles.compras}>Historia de compras: </p>
                <div className={styles.divHistorial}>{infoUser.orders && infoUser.orders.map(e => <div className={styles.historial}><h2>Fecha de compra: {e.date.slice(0,10)}</h2><h2>Precio: ${e.amount}</h2><h2>Estado de compra: {e.status.charAt(0).toUpperCase() + e.status.slice(1)}</h2></div>)}</div></div>
            </div>
            
          </div>
        ) : null}
      </div>
    </div>
  );
}
