import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands, getDetails, URL } from "../../redux/actions";
import styles from "./EditProduct.module.css";
import { Widget } from "@uploadcare/react-widget";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

export default function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allBrands = useSelector((state) => state.brands);
  const prodDetail = useSelector((state) => state.details);
  console.log(prodDetail)
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ first: true });


  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getDetails(id,true));
  }, [dispatch, id]);

  const [input, setInput] = useState({
    title: "",
    model: "",
    image: "",
    price: "",
    size: [],
    brand: null,
    category: null,
  });

  const [size35, setSize35] = useState({
    number: 35,
    stock: prodDetail.length?  prodDetail.sizes?.find(e => e.number === 35).stock : 0
  })
  console.log(size35)
  const [size36, setSize36] = useState({
    number: 36,
    stock: prodDetail.length && prodDetail.sizes?.find(e => e.number === 36).stock
  })

  const [size37, setSize37] = useState({
    number: 37,
    stock: prodDetail.length && prodDetail.sizes?.find(e => e.number === 37).stock
  })

  const [size38, setSize38] = useState({
    number: 38,
    stock: prodDetail.length && prodDetail.sizes?.find(e => e.number === 38).stock
  })

  const [size39, setSize39] = useState({
    number: 39,
    stock: prodDetail.length && prodDetail.sizes?.find(e => e.number === 39).stock
  })

  const [size40, setSize40] = useState({
    number: 40,
    stock: prodDetail.length && prodDetail.sizes?.find(e => e.number === 40).stock
  })

  const [size41, setSize41] = useState({
    number: 41,
    stock: prodDetail.length && prodDetail.sizes?.find(e => e.number === 41).stock
  })

  const [size42, setSize42] = useState({
    number: 42,
    stock: prodDetail.length && prodDetail.sizes?.find(e => e.number === 42).stock
  })

  const [size43, setSize43] = useState({
    number: 43,
    stock: prodDetail.length && prodDetail.sizes?.find(e => e.number === 43).stock
  })

  const handleOnChange = (e) => {
    e.preventDefault()
    setSize35({
      ...size35,
      stock: e.target.value
    })
  }
  const handleOnChange1 = (e) => {
    e.preventDefault()
    setSize36({
      ...size36,
      stock: e.target.value
    })
  }
  const handleOnChange2 = (e) => {
    e.preventDefault()
    setSize37({
      ...size37,
      stock: e.target.value
    })
  }
  const handleOnChange3 = (e) => {
    e.preventDefault()
    setSize38({
      ...size38,
      stock: e.target.value
    })
  }
  const handleOnChange4 = (e) => {
    e.preventDefault()
    setSize39({
      ...size39,
      stock: e.target.value
    })
  }
  const handleOnChange5 = (e) => {
    e.preventDefault()
    setSize40({
      ...size40,
      stock: e.target.value
    })
  }
  const handleOnChange6 = (e) => {
    e.preventDefault()
    setSize41({
      ...size41,
      stock: e.target.value
    })
  }
  const handleOnChange7 = (e) => {
    e.preventDefault()
    setSize42({
      ...size42,
      stock: e.target.value
    })
  }
  const handleOnChange8 = (e) => {
    e.preventDefault()
    setSize43({
      ...size43,
      stock: e.target.value
    })
  }

  const imgChange = (file) => {
    setInput({
      ...input,
      image: file.cdnUrl,
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
  const handleDelete = (e) => {
    setInput({
        ...input,
        [e.target.id]: null,
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put(`${URL}/shoes/${id}`, input);
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
  console.log(input.size)
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
          </div>

          <div className={styles.infoContainer}>
            <label className={styles.label}>Marca </label>
            <select onChange={(e) => handleSelectBrand(e)} value={input.brand} name='brand'>
              {allBrands &&
                allBrands.map((brand) => {
                  return <option>{brand.name}</option>;
                })}
            </select>
            {input.brand && <button
                    id='brand'
                    onClick={(e) => { handleDelete(e) }}>{input.brand}  x </button>}
          </div>

          <div className={styles.infoContainer}>
            <label className={styles.label}>Categoría </label>
            <select
              onChange={(e) => handleSelectCategory(e)}
              value={input.category}
              className={styles.select}
              name='category'
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
            {input.category && <button
                    id='category'
                    onClick={(e) => { handleDelete(e) }}>{input.category}  x </button>}
          </div>
          <div className={styles.sizeInputsContainer}>
            <label>35 </label>
            <input onChange={(e) => { handleOnChange(e) }}
              className={styles.inputSizeStock}
              name={size35}
              type='number'
              min="0"
              value={size35.stock} />

            <label>36 </label>
            <input onChange={(e) => { handleOnChange1(e) }}
              className={styles.inputSizeStock}
              name={size36}
              type='number'
              min="0"
              value={size36.stock} />

            <label>37 </label>
            <input onChange={(e) => { handleOnChange2(e) }}
              className={styles.inputSizeStock}
              name={size37}
              type='number'
              min="0"
              value={size37.stock} />

            <label>38 </label>
            <input onChange={(e) => { handleOnChange3(e) }}
              className={styles.inputSizeStock}
              name={size38}
              type='number'
              min="0"
              value={size38.stock} />

            <label>39 </label>
            <input onChange={(e) => { handleOnChange4(e) }}
              className={styles.inputSizeStock}
              name={size39}
              type='number'
              min="0"
              value={size39.stock} />

            <label>40 </label>
            <input onChange={(e) => { handleOnChange5(e) }}
              className={styles.inputSizeStock}
              name={size40}
              type='number'
              min="0"
              value={size40.stock} />

            <label>41 </label>
            <input onChange={(e) => { handleOnChange6(e) }}
              className={styles.inputSizeStock}
              name={size41}
              type='number'
              min="0"
              value={size41.stock} />

            <label>42 </label>
            <input onChange={(e) => { handleOnChange7(e) }}
              className={styles.inputSizeStock}
              name={size42}
              type='number'
              min="0"
              value={size42.stock} />

            <label>43</label>
            <input onChange={(e) => { handleOnChange8(e) }}
              className={styles.inputSizeStock}
              name={size43}
              type='number'
              min="0"
              value={size43.stock} />
          </div>
            <div>
                <button
                  type="submit"
                  className={styles.createButton}>
                  EDITAR
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
