import React from "react";
import styles from "./Pagination.module.css";
import { GrLinkNext } from 'react-icons/gr'

export default function Pagination({
  shoesPerPage,
  allProducts,
  pagination,
  nextPageButton,
  prevPageButton,
  currentPage,
}) {
  const pageNumber = Math.ceil(allProducts / shoesPerPage) || 1; // si el mathceil me da 0 (osea un valor false) va al 1
  // y si divuelve un valor true vale lo que de el mathceil

  return (
    <nav>
      <ul className={styles.contenedor}>
        <div className={styles.contenedor1}>
          <button
            onClick={(e) => pagination(1)}
            disabled={currentPage === 1}
            className={styles.button}
          >
            Primera
          </button>
          <button
            onClick={(e) => prevPageButton(e)}
            disabled={currentPage === 1}
            className={styles.button}
          >
            <GrLinkNext />
          </button>
          <p className={styles.currentPage}>
            {" "}
            {currentPage} de {pageNumber}{" "}
          </p>
          <div className={styles.right}>
            <button
              onClick={(e) => nextPageButton(e)}
              disabled={currentPage === pageNumber}
              className={styles.button}
            >
              <GrLinkNext />
            </button>
            <button
              onClick={(e) => pagination(pageNumber)}
              disabled={currentPage === pageNumber}
              className={styles.button}
            >
              Ultima
            </button>
          </div>
        </div>
      </ul>
    </nav>
  );
}
