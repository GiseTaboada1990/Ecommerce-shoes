import React from 'react'
import LoginButtonAuth0 from "../authzero/LoginButtonAuth0";
import LogoutButtonAuth0 from "../authzero/LogoutButtonAuth0";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Navbar.module.css";

function Navbar() {
    const { isAuthenticated } = useAuth0()
  return (
    <div>
        {isAuthenticated ? (
              <div className={styles.containerLogout}>
                <div>
                  <LogoutButtonAuth0 
                    className={styles.logout_button}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.containerLogout}>
                <LoginButtonAuth0 className={styles.icon}/>
              </div>
            )}
    </div>
  )
}

export default Navbar