import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <h3>NOSOTROS</h3>
            <ul>

              <li><Link to="/aboutUs"><span className={styles.boton}>SOBRE NOSOTROS</span></Link></li>
              <li><Link to="/community"><span className={styles.boton}>EQUIPO DE YOURSHOES</span></Link></li>

            </ul>
          </div>
          <div className={styles.footer_col2}>
            <h3 className={styles.msgHenry}>Hecho con 🧡 por los alumnos de Henry</h3>
            <ul className={styles.yourshoesFooter}>
              <li className={styles.font}>YOURSHOES © 2022 | Todos los derechos reservados.</li>
            </ul>
          </div>
          <div className={styles.footer_col3}>
            <h3>SOPORTE</h3>
            <ul>
              <li><Link to="/contact"><span className={styles.boton}>CONTACTO</span></Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
