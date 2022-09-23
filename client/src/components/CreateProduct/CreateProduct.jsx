import React, { useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { cleanDetails, getDetails, URL } from "../../redux/actions";
import styles from "./CreateProduct.module.css";
import { Widget } from "@uploadcare/react-widget";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { useDispatch } from "react-redux";


export default function CreateProduct() {
  
  const location = useLocation()
  const productEdit = location.state
  const dispatch = useDispatch()
    
  const inicialForm = {
      title: productEdit? productEdit.title : "",
      model: productEdit? productEdit.model : "",
      image: productEdit? productEdit.image : "",
      price: productEdit? productEdit.price: "",
      brand: productEdit? productEdit.brands.map(b=>b.name):"",
      category: productEdit? productEdit.categories.map(c=>c.name):""
  }

  const navigate = useNavigate()
  const [errors, setErrors] = useState({ first: true });
  
  const [input, setInput] = useState(inicialForm);

  const imgChange = (file) => {
    setInput({
      ...input,
      image: file.cdnUrl,
    });
  };
  
  const handleSelectCategory = (e) => {
    setInput({
      ...input,
      category: e.target.value,
    });
  };

const[size35, setSize35] = useState({
    number:35,
    stock:productEdit && productEdit.sizes.find(e=>e.number===35)?.stock || 0
})
const[size36, setSize36] = useState({
  number:36,
  stock:productEdit && productEdit.sizes.find(e=>e.number===36)?.stock || 0
})
const[size37, setSize37] = useState({
  number:37,
  stock:productEdit && productEdit.sizes.find(e=>e.number===37)?.stock || 0
})
const[size38, setSize38] = useState({
  number:38,
    stock: productEdit && productEdit.sizes.find(e => e.number===38)?.stock || 0
})
const[size39, setSize39] = useState({
  number:39,
    stock:productEdit && productEdit.sizes.find(e=>e.number===39)?.stock || 0
  })
const[size40, setSize40] = useState({
  number:40,
  stock:productEdit && productEdit.sizes.find(e=>e.number===40)?.stock || 0
})
const[size41, setSize41] = useState({
  number:41,
  stock:productEdit && productEdit.sizes.find(e=>e.number===41)?.stock || 0
})
const[size42, setSize42] = useState({
  number:42,
  stock:productEdit && productEdit.sizes.find(e=>e.number===42)?.stock || 0
})
const[size43, setSize43] = useState({
  number:43,
  stock:productEdit && productEdit.sizes.find(e=>e.number===43)?.stock || 0
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
useEffect(()=>{
  if(productEdit && productEdit.id)dispatch(getDetails(productEdit.id, true))
},[dispatch, productEdit])

useEffect(()=>{
  const aux = [size35,size36,size37,size38,size39,size40,size41,size42,size43]
  setInput({
    ...input,
    size:aux
  })
},[size35,size36,size37,size38,size39,size40,size41,size42,size43])

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

    const handleSubmit = (e) => {
       e.preventDefault();
      axios.post(`${URL}/shoes`, input);
      setInput({
        title: "",
        model: "",
        image: "",
        price: 0,
        size: [],
        brand: "",
        category: "",
      });
      toast.success("Tu producto fue creado!", {
        className: "cart-toast",
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
      });
    };

  const handleEdit = (e, id) => {
    e.preventDefault()
    swal({
      title:'Editar',
      text:'¿ Estás seguro de que deseas editar este producto ?',
      icon:'warning',
      buttons:['No','Si'],
      timer:'3000'
    }).then(res=>{
      if(res){
      dispatch(cleanDetails())
      axios.put(`${URL}/shoes/${id}`, input)
      swal({
      text:'El producto se ha editado con éxito',
      icon:'success',
      timer:'2000'
      })
      navigate("/")
    }
    })
  }

    
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
      <Link to="/">
        <button className={styles.homeButton}>
          YOUR<span className={styles.shoes}>SHOES</span>
        </button>
      </Link>
      <h1 className={styles.title}>{productEdit ? 'Editar' : 'Crear'} producto</h1>
      <div className={styles.allContainer}>
        <form onSubmit={productEdit ? (e)=>handleEdit(e, productEdit.id) :
            (e) => { handleSubmit(e) }}
             className={styles.form}>
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
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={input.brand}
              name="brand"
              className={styles.input}
            />
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
          <div className={styles.tallesContainer}>
            <label className={styles.label}>Talle </label>
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
                Enviar
              </button>
            ) : (
              <button
                type="submit"
                className={styles.createButton}
                disabled={true}
              >
                Enviar
              </button>
            )}
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}
