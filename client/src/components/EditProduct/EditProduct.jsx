import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAllBrands,getDetails, URL} from "../../redux/actions";
import styles from "./EditProduct.module.css";
import { Widget } from "@uploadcare/react-widget";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

export default function EditProduct() {
  const { id } = useParams();
  console.log("ID EDIT", id);
  const dispatch = useDispatch();
  const allBrands = useSelector((state) => state.brands);
  const prodDetail = useSelector((state) => state.details);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ first: true });
  console.log(prodDetail,"soy el producto")

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const [input, setInput] = useState({
    title: "",
    model: "",
    image: "",
    price: "",
    size: [],
    brand: "",
    category: "",
  });


  useEffect(() => {
    if (prodDetail) {
      setInput({
        title: prodDetail.title,
        model: prodDetail.model,
        image: prodDetail.image,
        price: prodDetail.price,
        size: prodDetail.size,
        brand: prodDetail.brand,
        category: prodDetail.category,
      });
    }
  }, [prodDetail]);

  const imgChange = (file) => {
    setInput({
      ...input,
      image: file.cdnUrl,
    });
  };

  const handleDeleteSize = (e) => {
    e.preventDefault();
    const sizes = input.size.filter((talle) => {
      return talle !== e.target.value;
    });
    setInput({
      ...input,
      size: sizes,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelectSize = (e) => {
    setInput({
      ...input,
      size: [...input.size, e.target.value],
    });
  };

  const handleSelectCategory = (e) => {
    setInput({
      ...input,
      category: e.target.value,
    });
  };

  const handleSelectBrand = (e) => {
    setInput({
      ...input,
      brand: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put(`${URL}/shoes`,{id,input});
    setInput({
      title: "",
      model: "",
      image: "",
      price: 0,
      size: [],
      brand: "",
      category: "",
    });
    toast.success("Tu producto fue editado!", {
      className: "cart-toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/admin/products");
  };

  //Validaciones//
  const validations = (input) => {
    let errors = {};
    if (!input.title) {
      errors.title = "-Debes ponerle un titulo al producto-";
    } else if (input.title?.trim().length < 2) {
      errors.title = "-El titulo debe tener al menos 2 caracteres-";
    } else if (!input.model) {
      errors.model = "-Debes ponerle un modelo al producto-";
    } else if (!input.price) {
      errors.price = "-Debes ponerle un precio al producto-";
    } else if (!input.brand) {
      errors.brand = "-Debes ponerle una marca al producto-";
    }
    return errors;
  };

  return (
    <div className={styles.Container}>
      <Link to="/admin/products">
        <button className={styles.homeButton}>
          YOUR<span className={styles.shoes}>SHOES</span>
        </button>
      </Link>
      <h1 className={styles.title}>Edicion de producto</h1>
      <div className={styles.allContainer}>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <div className={styles.infoContainer}>
            <label className={styles.label}>Título del producto </label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={input.title}
              name="title"
              className={styles.input}
            />
            {!errors.title ? null : (
              <span className={styles.error}>{errors.title}</span>
            )}
          </div>

          <div className={styles.infoContainer}>
            <label className={styles.label}>Modelo del producto </label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={input.model}
              name="model"
              className={styles.input}
            />
            {!errors.model ? null : (
              <span className={styles.error}>{errors.model}</span>
            )}
          </div>

          <div className={styles.infoContainer}>
            <label className={styles.label}>Imágen </label>
            <Widget
              crop="free, 16:9, 4:3, 5:4, 1:1"
              publicKey="351fcecfb85786702708"
              clearable
              onChange={imgChange}
            />
          </div>

          <div className={styles.infoContainer}>
            <label className={styles.label}>Precio </label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              value={input.price}
              name="price"
              className={styles.input}
            />
            {!errors.price ? null : (
              <span className={styles.error}>{errors.price}</span>
            )}
          </div>

          <div className={styles.infoContainer}>
            <label className={styles.label}>Marca </label>
            <select onChange={(e) => handleSelectBrand(e)} value={input.brand}>
              {allBrands &&
                allBrands.map((brand) => {
                  return <option>{brand.name}</option>;
                })}
            </select>
            {!errors.brand ? null : (
              <span className={styles.error}>{errors.brand}</span>
            )}
          </div>

          <div className={styles.infoContainer}>
            <label className={styles.label}>Categoria </label>
            <select
              onChange={(e) => handleSelectCategory(e)}
              value={input.category}
              className={styles.select}
            >
              <option>Zapatillas</option>
              <option>Botas y Botinetas</option>
              <option>Sandalias y ojotas</option>
              <option>Stilletos y plataformas</option>
              <option>Mocasines y oxfords</option>
              <option>Pantuflas</option>
              <option>Chatitas</option>
              <option>Alpargatas</option>
            </select>
          </div>
          <div>
            {!Object.keys(errors).length ? (
              <button type="submit" className={styles.createButton}>
                EDITAR
              </button>
            ) : (
              <button
                type="submit"
                className={styles.createButton}
                disabled={true}
              >
                EDITAR
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
