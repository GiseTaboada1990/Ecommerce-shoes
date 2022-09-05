import styles from "./Community.module.css";
import { Link } from "react-router-dom";
import NavBar2 from "../Navbar2/Navbar2";

export default function Community() {
    return(
        <div>
            <NavBar2/>
            <div className={styles.infoContainer}>
                <h1>
                    Humildes desarrolladores de este proyecto:
                </h1>
                <br></br>
                <div>
                    <p>» Benjamin Malo</p>
                    <p>» Donaldo Barraza</p>
                    <p>» Giselle Taboada</p>
                    <p>» Juan Carracedo</p>
                    <p>» Marcos Guzman</p>
                    <p>» Nicolas Bringas</p>
                    <p>» Ramiro Hernandez</p>
                </div>

            </div>
        </div>
    )

}
