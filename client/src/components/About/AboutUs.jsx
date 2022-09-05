import styles from "./AboutUs.module.css";
import NavBar2 from "../Navbar2/Navbar2"


export default function AboutUs() {
  return (
    <div>
      <NavBar2/>
      <div className={styles.container}>
        <div className={styles.hijo}>
          <img src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png" className={styles.henryImg} alt='img not found'/>
          <p className={styles.p}>
            YourShoes es un e-commerce de calzados creado para el proyecto final del bootcamp de SoyHenry,
            se puede adaptar fácilmente a cualquier otro tipo de e-commerce.
            Le hemos dedicado 3 semanas y luego de presentarlo y recibir la aprobación por parte de los instructores de Henry,
            decidimos seguir mejorandolo...Fue un gran paso para nosotros, aprendimos tecnologías nuevas y 
            pudimos plasmar todo el conocimiento adquirido en el bootcamp.
                    Esperamos que sea de su agrado!!
          </p>

        </div>
      </div>
    </div>
  );
}
