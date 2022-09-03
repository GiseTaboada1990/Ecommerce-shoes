import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBrands, getAllCategories, getAllShoes, getAllSizes } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import ProductCards from "../ProductCards/ProductCards";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";



export default function HomePage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  console.log(allProducts)
  
    useEffect(() => {
      dispatch(getAllSizes())
      dispatch(getAllBrands())
      dispatch(getAllCategories())
      dispatch(getAllShoes()); 
    }, [dispatch]);
   
  //Paginado//
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPerPage, /* setShoesPerPage */] = useState(12);
  const indexOfLastShoe = currentPage * shoesPerPage;
  const indexOfFirstShoe = indexOfLastShoe - shoesPerPage;
  const currentShoes =
    Array.isArray(allProducts) &&
    allProducts.slice(indexOfFirstShoe, indexOfLastShoe);

  const pagination = (page) => {
    setCurrentPage(page);
  };

  const nextPageButton = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPageButton = () => {
    setCurrentPage(currentPage - 1);
  };
  //Paginado//

  return(
    <div>
        <NavBar/>
        <Pagination
        shoesPerPage={shoesPerPage}
        allProducts={allProducts && allProducts.length}
        pagination={pagination}
        nextPageButton={nextPageButton}
        prevPageButton={prevPageButton}
        currentPage={currentPage}
      />
        <Filters setCurrentPage={setCurrentPage}/>
      <div className={styles.cardContainer}>
      <div>
          {currentShoes ? (
            <ProductCards allProducts={currentShoes} />
          ) : (
            <ProductCards allProducts={allProducts} />
          )}
        </div>
        <Pagination
          shoesPerPage={shoesPerPage}
          allProducts={allProducts && allProducts.length}
          pagination={pagination}
          nextPageButton={nextPageButton}
          prevPageButton={prevPageButton}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}