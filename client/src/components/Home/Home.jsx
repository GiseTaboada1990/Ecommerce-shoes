import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBrands, getAllCategories, getAllShoes, getAllSizes } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import ProductCards from "../ProductCards/ProductCards";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";
import Modal from "react-modal";
import Chatbot from "react-chatbot-kit";
import config from "../Chatbot/chatbotConfig";
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";
import Banner from "../Banner/Banner";
import About from "../About/Footer";



export default function HomePage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  console.log(allProducts)

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  
    useEffect(() => {
      dispatch(getAllSizes())
      dispatch(getAllBrands())
      dispatch(getAllCategories())
      dispatch(getAllShoes()); 
      if (modalIsOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [dispatch, modalIsOpen]);
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        width: "610px",
        height: "650px",
        "border-radius": "10px",
        background: "#212121",
        color:"white",
      },
      
    };
   
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
        <Banner/>
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
      <div className={styles.divChatbot}>
      <button onClick={(e) => openModal(e)} className={styles.buttonChatbot}>
      <img className={styles.imgChatbot} src="https://st3.depositphotos.com/8950810/17657/v/380/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg?forcejpeg=true" alt="no se encuentra"></img>
      </button>
      </div>
      <About/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      > 
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        ></Chatbot>
      </Modal>
    </div>
  )
}