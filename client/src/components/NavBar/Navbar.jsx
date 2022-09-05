import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButtonAuth0 from "../authzero/LogoutButtonAuth0";
import LoginButtonAuth0 from "../authzero/LoginButtonAuth0";
import Searchbar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import User from '../authzero/User';

function NavBar() {

  return (
    <Navbar expand='lg' className={styles.navbar}>
      <Container fluid>
        <button onClick={(e) => console.log('handleReset(e)')} className={styles.resetButton}>
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
          </Nav>
          <Searchbar
            handleInputName={() => console.log('handleInputName')}
            handleNameSubmit={() => console.log('handleNameSubmit')}
          />
          <User />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar