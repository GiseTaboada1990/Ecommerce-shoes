import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillCartFill } from "react-icons/bs";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButtonAuth0 from "../authzero/LogoutButtonAuth0";
import LoginButtonAuth0 from "../authzero/LoginButtonAuth0";
import { useDispatch } from "react-redux";
import { getAllShoes } from "../../redux/actions";


export default function NavBar() {

  const { pathname } = useLocation()

  const user = JSON.parse(localStorage.getItem("user"))
  const { isAuthenticated } = useAuth0()
  const dispatch = useDispatch()

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(getAllShoes());
  };

  return (

    <Navbar expand="lg" className={`${styles.navbar} fixed-top`}>
      <Container fluid>
        <Link to="/" className={styles.resetButton}>
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
            {
              pathname.includes('admin') ?
              'ADMIN' // Aquí pueden ir otras opcione para el admin
              :
              <>
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
              </>
            }

            {
              user && user.isAdmin === true ?
                <Link to="/admin/home">
                  <button className={styles.createProdButton}>
                    <p className={styles.link}>Dashboard admin</p>
                  </button>
                </Link> : <p></p>
            }
          </Nav>
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
                      <img className={styles.img} src={user.image} alt={user.image} />
                    )}
                  </Link>
                </div>
              </div>
            ) : (
              // <div className={styles.containerLogout}>
              //   <LoginButtonAuth0 className={styles.icon} />
              // </div>
                <div className="nav-item d-flex align-items-center">
                  <a href="#" className="nav-link text-body font-weight-bold px-0">
                    {/* <i className="fa fa-user me-sm-1" aria-hidden="true"></i> */}
                    <FaUserAlt className="me-sm-2" aria-hidden="true" color="f87d2d "/>
                    <span className="d-sm-inline d-none">Sign In</span>
                  </a>
                </div>
            )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
