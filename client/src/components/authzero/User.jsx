import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FaUserAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Nav } from 'react-bootstrap';
import styles from "../NavBar/Navbar.module.css";

export default function User() {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

    return (
        <>
            {isAuthenticated ? (
                <div className={styles.containerLogout}>
                    <Nav.Link onClick={() => logout()} className={styles.logout_button} >
                        <BiLogOut style={{ color: "#f87d2d" }}></BiLogOut>
                    </Nav.Link>
                </div>
            ) : (
                <div className={styles.containerLogout}>
                    <Nav.Link className={styles.icon} onClick={() => loginWithRedirect()}>
                        <FaUserAlt style={{ color: "#f87d2d" }} />
                    </Nav.Link>
                </div>
            )}
        </>
    )
}
