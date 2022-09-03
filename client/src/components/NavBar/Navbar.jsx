import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillCartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButtonAuth0 from "../authzero/LogoutButtonAuth0";
import LoginButtonAuth0 from "../authzero/LoginButtonAuth0";
import Filters from "../Filters/Filters";

export default function NavBar({
  handleReset,
  setCurrentPage
}) {
  
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const { isAuthenticated } = useAuth0()

  return (

    <Navbar style={{background: "#212121"}} expand="lg" className={styles.navbar}>
      <Container fluid>
        <button onClick={(e) => handleReset(e)} className={styles.resetButton}>
          <Navbar.Brand className={styles.yourShoes}>
            Your<span>Shoes</span>
          </Navbar.Brand>
        </button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className={styles.containerLogout}>
              <Nav.Link className={styles.icon}>
                <Link to="/cart" className={styles.Link}>
                  {" "}
                  <BsFillCartFill style={{ color: "#f87d2d" }} />
                </Link>
              </Nav.Link>
            </div>
            <div className={styles.containerLogout}>
              <Nav.Link className={styles.icon}>
                <Link to="/favorites">
                  <FaHeart style={{ color: "#f87d2d" }} />
                </Link>
              </Nav.Link>
            </div>
            {isAuthenticated ? (
              <div className={styles.containerLogout}>
                <div className={styles.logout_button}>
                  <LogoutButtonAuth0/>
                </div>
                <div>
                  <Link to="/datauser">
                    {!user.image ? (
                      <img
                        className={styles.img}
                        src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png"
                        alt={user.image}
                      />
                    ) : (
                      <img className={styles.img} src={user.image} alt={user.image} />
                    )}
                  </Link>
                </div>
              </div>
            ) : (
              <div className={styles.containerLogout}>
                <LoginButtonAuth0 className={styles.icon}/>
              </div>
            )}
            { user && user.isAdmin === true ?
            <Link to="/admin">
              <button className={styles.createProdButton}>
                <p className={styles.link}>Dashboard admin</p>
              </button>
              </Link> : <p></p>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
