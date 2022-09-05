import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <>
      <Carousel className={styles.container}>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://www.vansecuador.com/images/hoverimg/202203022306031337.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://newsolez.com/wp-content/uploads/2018/02/banner_addidas_originals_promo_b7ad4407-7dd0-4ca9-8881-29d04bbda68a_1600x681-e1563918699775.png"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://cdn.shopify.com/s/files/1/0526/0935/1850/files/Banner_nike_web_2048x2048.jpg?v=1651795446"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

