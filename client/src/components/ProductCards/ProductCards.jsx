import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductCards.module.css";


function ProductCards({ allProducts }) {
  return (
    <div className='w-80 d-flex flex-wrap justify-content-center align-items-center'>
      {allProducts?.length ? (
        allProducts.map((product) => {
          return (
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
                key={product.id}
              />
          );
        })
      ) : (
        <div className={styles.sinFiltro}>
          <h1>Ups! Parece que no pudimos encontrar el producto que buscabas.</h1>
        </div>
      )}
    </div>
  );
}
export default React.memo(ProductCards)