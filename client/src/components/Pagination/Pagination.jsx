import React from "react";
import styles from "./Pagination.module.css";
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

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
          <div>
            <button
              onClick={(e) => pagination(1)}
              disabled={currentPage === 1}
              className={`btn btn-outline-dark rounded-5`}
            >
              Primera
            </button>
            <button
              onClick={(e) => prevPageButton(e)}
              disabled={currentPage === 1}
              className={`btn border border-0 fs-4 px-3 py-1 mx-2`}
            >
              <GrLinkPrevious />
            </button>
          </div>
          <p className={`text-black`}>
            {" "}
            {currentPage} de {pageNumber}{" "}
          </p>
          <div className={styles.right}>
            <button
              onClick={(e) => nextPageButton(e)}
              disabled={currentPage === pageNumber}
              className={`btn border border-0 fs-4 px-3 py-1 mx-2`}
            >
              <GrLinkNext />
            </button>
            <button
              onClick={(e) => pagination(pageNumber)}
              disabled={currentPage === pageNumber}
              className={`btn btn-outline-dark rounded-5`}
            >
              Ultima
            </button>
          </div>
        </div>
      </ul>
    </nav>
  );
}
