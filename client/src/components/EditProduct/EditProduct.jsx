import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAllBrands,getDetails, URL} from "../../redux/actions";
import styles from "./EditProduct.module.css";
import { Widget } from "@uploadcare/react-widget";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail";

export default function EditProduct() {
  const { id } = useParams();
  console.log("ID EDIT", id);
  const dispatch = useDispatch();
  const allBrands = useSelector((state) => state.brands);
  const prodDetail = useSelector((state) => state.details);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ first: true });
  

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
  const size_35 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===35)
  console.log(size_35)
  const[size35, setSize35] = useState({
    number:35,
    stock: size_35 && size_35.stock
})
const size_36 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===36)
const[size36, setSize36] = useState({
  number:36,
  stock:size_36?size_36.stock:0
})
const size_37 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===37)
const[size37, setSize37] = useState({
  number:37,
  stock:size_37? size_37.stock:0
})
const size_38 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===38)
const[size38, setSize38] = useState({
  number:38,
    stock:size_38? size_38.stock:0
})
const size_39 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===39)
const[size39, setSize39] = useState({
  number:39,
    stock:size_39? size_39.stock:0
  })
 const size_40 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===40)
const[size40, setSize40] = useState({
  number:40,
  stock:size_40? size_40.stock:0
})
const size_41 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===41)
const[size41, setSize41] = useState({
  number:41,
  stock:size_41?size_41.stock:0
})
const size_42 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===42)
const[size42, setSize42] = useState({
  number:42,
  stock:size_42? size_42.stock:0
})
const size_43 =prodDetail.sizes && prodDetail.sizes.find(e=>e.number===43)
const[size43, setSize43] = useState({
  number:43,
  stock:size_43? size_43.stock:0
})
const handleOnChange = (e)=>{
  e.preventDefault()
  setSize35({ 
    ...size35,
    stock:e.target.value
  })
}
const handleOnChange1 = (e)=>{
  e.preventDefault()
  setSize36({
    ...size36,
    stock: e.target.value
  })
}
const handleOnChange2 = (e)=>{
  e.preventDefault()
  setSize37({
    ...size37,
    stock: e.target.value
  })
}
const handleOnChange3 = (e)=>{
  e.preventDefault()
  setSize38({
    ...size38,
    stock: e.target.value
  })
}
const handleOnChange4 = (e)=>{
  e.preventDefault()
  setSize39({
  ...size39,
  stock: e.target.value
})
}
const handleOnChange5 = (e)=>{
  e.preventDefault()
  setSize40({
    ...size40,
  stock: e.target.value
})
}
const handleOnChange6 = (e)=>{
  e.preventDefault()
  setSize41({
    ...size41,
    stock: e.target.value
  })
}
const handleOnChange7 = (e)=>{
  e.preventDefault()
setSize42({
  ...size42,
  stock: e.target.value
})
}
const handleOnChange8 = (e)=>{
  e.preventDefault()
  setSize43({
    ...size43,
    stock: e.target.value
})
}
  useEffect(() => {
    const aux = [size35,size36,size37,size38,size39,size40,size41,size42,size43]
    if (prodDetail) {
      setInput({
        title: prodDetail.title,
        model: prodDetail.model,
        image: prodDetail.image,
        price: prodDetail.price,
        size: aux,
        brand: prodDetail.brand,
        category: prodDetail.category,
      });
    }
  }, [prodDetail,size35,size36,size37,size38,size39,size40,size41,size42,size43]);

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
    axios.put(`${URL}/shoes/${id}`,input);
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
          <div className={styles.sizeInputsContainer}>
        <label>35 </label>
        <input onChange={(e)=>{handleOnChange(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size35.stock}/>

        <label>36 </label>
        <input onChange={(e)=>{handleOnChange1(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size36.stock}/>

        <label>37 </label>
        <input onChange={(e)=>{handleOnChange2(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size37.stock}/>

        <label>38 </label>
        <input onChange={(e)=>{handleOnChange3(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size38.stock}/>

        <label>39 </label>
        <input onChange={(e)=>{handleOnChange4(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size39.stock}/>

        <label>40 </label>
        <input onChange={(e)=>{handleOnChange5(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size40.stock}/>

        <label>41 </label>
        <input onChange={(e)=>{handleOnChange6(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size41.stock}/>

        <label>42 </label>
        <input onChange={(e)=>{handleOnChange7(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size42.stock}/>

        <label>43</label>
        <input onChange={(e)=>{handleOnChange8(e)}}
        className={styles.inputSizeStock}
        type='number'
        min="0"
        value={size43.stock}/>
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
          </div>
        </form>
      </div>
    </div>
  );
}
