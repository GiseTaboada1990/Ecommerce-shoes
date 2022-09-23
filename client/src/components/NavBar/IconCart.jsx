import React from 'react'
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

export default function IconCart() {
  const { pathname } = useLocation()

    return (
        <>
        {
            pathname.includes('admin') ?
                'ADMIN' // Aquí pueden ir otras opcione para el admin
                :
                <>
                    <div className={styles.containerLogout}>
                        <Nav.Link className={styles.icon}>
                            <Link to="/cart" className={styles.Link}>
                                {" "}
                                <BsCart className='text-secondary' />
                            </Link>
                        </Nav.Link>
                    </div>
                    <div className={styles.containerLogout}>
                        <Nav.Link className={styles.icon}>
                            <Link to="/favorites">
                                <FaRegHeart className='text-secondary' />
                            </Link>
                        </Nav.Link>
                    </div>
                </>
        }
        </>
    )
}
