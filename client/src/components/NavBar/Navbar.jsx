import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useDispatch } from "react-redux";
import { getAllShoes } from "../../redux/actions";
import IconCart from "./IconCart";
import IconUser from "./IconUser";
import SearchBar from "../SearchBar/SearchBar";


export default function NavBar() {


  const user = JSON.parse(localStorage.getItem("user"))
  const dispatch = useDispatch()

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(getAllShoes());
  };

  return (

    <Navbar expand="lg" bg="light" className={`${styles.navbar} fixed-top`}>
      <Container fluid>
        <Link to="/" className={styles.resetButton}>
          <Navbar.Brand className={`${styles.yourShoes} fs-5`}>
            Your<span>Shoes</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-end">
          <Nav
            className="d-flex justify-content-end my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {
              user && user.isAdmin === true ?
                <Link to="/admin/home">
                  <button className={styles.createProdButton}>
                    <p className={styles.link}>Dashboard admin</p>
                  </button>
                </Link> : null
            }
            <SearchBar />
            <IconCart />
            <IconUser />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
