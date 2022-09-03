import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillCartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./NavBar2.module.css";
import LoginButtonAuth0 from "../authzero/LoginButtonAuth0";
import LogoutButtonAuth0 from "../authzero/LogoutButtonAuth0";

export default function NavBar2() {

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container fluid>
        <Link to="/">
          <Navbar.Brand className={styles.yourShoes}>
            Your<span>Shoes</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className={styles.containerLogout}>
            <Nav.Link className={styles.icon}>
             <Link to='/cart' className={styles.Link}> <BsFillCartFill  style={{ color: "#f87d2d" }} /></Link> 
            </Nav.Link>
            </div>
            <div className={styles.containerLogout}>
            <Nav.Link  className={styles.icon}>
              <Link to="/favorites"><FaHeart style={{ color: "#f87d2d" }} /></Link> 
            </Nav.Link>
            </div>
            {user && Object.keys(user).length ? (
              <div className={styles.containerLogout}>
              <div>
              <LogoutButtonAuth0/>
              </div>
              <div>
             <Link to='/datauser'>{!user.image ? <img className={styles.img} src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png"/> : <img className={styles.img} src={user.image}/>}</Link> 
              </div>
              </div>
            ) : (
              <div className={styles.containerLogout}>
              <Nav.Link  className={styles.icon}>
                <LoginButtonAuth0/>
              </Nav.Link>
              </div>
            )}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
