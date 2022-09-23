import React from 'react'
import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButtonAuth0 from "../authzero/LogoutButtonAuth0";
import LoginButtonAuth0 from "../authzero/LoginButtonAuth0";
import { Link } from "react-router-dom";

export default function IconUser() {
    const { isAuthenticated } = useAuth0()
    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <>
            {
                isAuthenticated ? (
                    <div className={styles.containerLogout}>
                        <div className={styles.logout_button}>
                            <LogoutButtonAuth0 />
                        </div>
                        <div>
                            <Link to="/datauser">
                                {!user.image ? (
                                    <img
                                        className={styles.img}
                                        src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png"
                                        alt={user.name}
                                    />
                                ) : (
                                    <img className={styles.img} src={user.image} alt={user.name} />
                                )}
                            </Link>
                        </div>
                    </div>
                ) : (
                    <LoginButtonAuth0 className={`${styles.icon}`} />
                )
            }
        </>
    )
}
