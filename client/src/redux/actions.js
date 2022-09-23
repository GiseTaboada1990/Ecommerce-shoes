import axios from "axios";

export const GET_ALL_SHOES = 'GET_ALL_SHOES';
export const GET_DETAILS = 'GET_DETAILS'
export const GET_ALL_SIZES = 'GET_ALL_SIZES'
export const GET_ALL_BRANDS = 'GET_ALL_BRANDS'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const CLEAN_DETAILS = 'CLEAN_DETAILS'
export const ADD_ONE_TO_FAV = 'ADD_ONE_TO_FAV'
export const DELETE_ONE_FROM_FAV = 'DELETE_ONE_FROM_FAV'
export const LOGIN_USER = 'LOGIN_USER'
export const POST_USER = 'POST_USER'
export const USER_LOGGED = 'USER_LOGGED'
export const EDIT_USER = 'EDIT_USER'
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const FILTER_BY_SIZE = 'FILTER_BY_SIZE'
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE'
export const FILTER_BY_NAME = 'FILTER_BY_NAME'
export const COMBINATION_FILTERS = 'COMBINATION_FILTERS'
export const COMBINATION_FILTERS1 = 'COMBINATION_FILTERS1'
export const COMBINATION_FILTERS2 = 'COMBINATION_FILTERS2'
export const COMBINATION_FILTERS3 = 'COMBINATION_FILTERS3'
export const COMBINATION_FILTERS4 = 'COMBINATION_FILTERS4'
export const COMBINATION_FILTERS5 = 'COMBINATION_FILTERS5'
export const COMBINATION_FILTERS6 = 'COMBINATION_FILTERS6'
export const COMBINATION_FILTERS7 = 'COMBINATION_FILTERS7'
export const COMBINATION_FILTERS8 = 'COMBINATION_FILTERS8'
export const COMBINATION_FILTERS9 = 'COMBINATION_FILTERS9'
export const COMBINATION_FILTERS10 = 'COMBINATION_FILTERS10'
export const COMBINATION_FILTERS11 = 'COMBINATION_FILTERS11'
export const COMBINATION_FILTERS12 = 'COMBINATION_FILTERS12'
export const COMBINATION_FILTERS13 = 'COMBINATION_FILTERS13'
export const COMBINATION_FILTERS14 = 'COMBINATION_FILTERS14'
export const COMBINATION_FILTERS15 = 'COMBINATION_FILTERS15'
export const COMBINATION_FILTERS16 = 'COMBINATION_FILTERS16'
export const COMBINATION_FILTERS17 = 'COMBINATION_FILTERS17'
export const COMBINATION_FILTERS18 = 'COMBINATION_FILTERS18'
export const COMBINATION_FILTERS19 = 'COMBINATION_FILTERS19'
export const ADD_ONE_TO_CART = 'ADD_ONE_TO_CART'
export const DELETE_ONE_FROM_CART = 'DELETE_ONE_FROM_CART'
export const REMOVER_TODO = "REMOVER_TODO"
export const ID_PAYMENT = "ID_PAYMENT"
export const GET_ALL_USER = 'GET_ALL_USER'


export const URL = process.env.REACT_APP_URL;

export const cleanDetails = () => {
  return ({
    type: CLEAN_DETAILS,
    payload: []
  })
}
export const getAllShoes = () => {
  return async (dispatch) => {
    const results = await axios(`${URL}/shoes`);

    return dispatch({
      type: GET_ALL_SHOES,
      payload: results.data,
    });
  };
}

export const getAllUsers = () => {
  return async (dispatch) => {
    const results = await axios(`${URL}/user`);
    return dispatch({
      type: GET_ALL_USER,
      payload: results.data,
    });
  };
}

export const getDetails = (id, edit=false) => {
  return async (dispatch) => {
    const res = await axios(`${URL}/shoes/${id}?edit=${edit}`);
    return dispatch({
      type: GET_DETAILS,
      payload: res.data,
    });
  };
}
export const getAllSizes = () => {
  return async (dispatch) => {
    const results = await axios(`${URL}/size`);
    return dispatch({
      type: GET_ALL_SIZES,
      payload: results.data,
    });
  };
}
export const getAllBrands = () => {
  return async (dispatch) => {
    const results = await axios(`${URL}/brands`);
    return dispatch({
      type: GET_ALL_BRANDS,
      payload: results.data,
    });
  };
}

export const getAllCategories = () => {
  return async (dispatch) => {
    const results = await axios(`${URL}/categories`);
    return dispatch({
      type: GET_ALL_CATEGORIES,
      payload: results.data,
    });
  };
}

export const addOneToFav = (payload) => {
  return {
    type: ADD_ONE_TO_FAV,
    payload,
  };
}
  export const deleteOneToFav = (payload)=>{
    return {
      type: DELETE_ONE_FROM_FAV,
      payload: payload,
    };
  }
  export const login = (payload)=>{
    return async (dispatch)=>{
      try {
        const json = await axios.post(`${URL}/login/signin`, payload);
        localStorage.setItem('user', JSON.stringify(json.user))
  
        return dispatch({
          type: LOGIN_USER,
          payload: json.data.user,
        });
        
      } catch (error) {
        throw error;
      }
    };
  }
  export const postUser = (payload)=>{
    return async(dispatch)=> {
      try {
        const json = await axios.post(`${URL}/login/signup`, payload);
  
        localStorage.setItem('user', JSON.stringify(json.user))
  
        dispatch({
          type: POST_USER,
          payload: json,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export const loginUser = (user)=> {
    return {
      type: USER_LOGGED,
      payload: user,
    };
  }
  export const editUser = (email, props) => {
    return async (dispatch)=>{
      try{
        const res = await axios.put(`${URL}/user?email=${email}`, props);
        return dispatch({
          type: EDIT_USER,
          payload: res.data
        })
      }catch(error){
        console.log(error)
      }
    }
  }
  export const filterByName=(name)=> {
    return async(dispatch)=>{
      const results = await axios(`${URL}/shoes?name=${name}`);
      dispatch({
        type: FILTER_BY_NAME,
        payload: results.data,
        
      });
      return results.data;
    };
  }
  export const filterByBrand=(payload)=> {
    return async (dispatch)=> {
      const results = await axios(`${URL}/shoes?brand=${payload}`);
      dispatch({
        type: FILTER_BY_BRAND,
        payload: results.data,
      });
      return results.data;
    };
  }
  
  export const filterByCategory=(payload)=>{
    return async (dispatch)=> {
      const results = await axios(`${URL}/shoes?category=${payload}`);
      dispatch({
        type: FILTER_BY_CATEGORY,
        payload: results.data,
      });
      return results.data;
    };
  }
  export const filterBySize=(payload)=> {
    return async (dispatch)=> {
      try {
        const results = await axios(`${URL}/shoes?size=${payload}`);
        dispatch({
          type: FILTER_BY_SIZE,
          payload: results.data,
        });
        return results.data;
      } catch (error) {
        throw error;
      }
    };
  }
  export const filterByPrice=(priceMin, priceMax)=> {
    return async (dispatch)=> {
      const results = await axios(
        `${URL}/shoes?priceMin=${priceMin}&priceMax=${priceMax}`
      );
      return dispatch({
        type: FILTER_BY_PRICE,
        payload: results.data,
      });
    };
  }
  
  export const combinationsFilter=(brand, priceMin, priceMax)=>{
    return async (dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter1=(name, priceMin, priceMax)=>{
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS1,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter2=(brand, name, priceMin, priceMax)=>{
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?brand=${brand}&name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS2,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter3=(name, brand)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(`${URL}/shoes?name=${name}&brand=${brand}`);
        dispatch({
          type: COMBINATION_FILTERS3,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter4=(category, priceMin, priceMax)=>{
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?category=${category}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS4,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter5=(category, name)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?category=${category}&name=${name}`
        );
        dispatch({
          type: COMBINATION_FILTERS5,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter6=(brand, category)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?brand=${brand}&category=${category}`
        );
        dispatch({
          type: COMBINATION_FILTERS6,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter7=(category, brand, name)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?category=${category}&brand=${brand}&name=${name}`
        );
        dispatch({
          type: COMBINATION_FILTERS7,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter8=(category, brand, priceMax, priceMin)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?category=${category}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS8,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter9=(category, name, priceMax, priceMin)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?category=${category}&name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS9,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter10=(
    category,
    name,
    priceMax,
    priceMin,
    brand
  )=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?category=${category}&name=${name}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS10,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter11=(brand, priceMin, priceMax, size)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?size=${size}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS11,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter12=(size, priceMin, priceMax)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?size=${size}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS12,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter13 = (size, brand)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(`${URL}/shoes?size=${size}&brand=${brand}`);
        dispatch({
          type: COMBINATION_FILTERS13,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  
  export const combinationsFilter14=(size, brand, name, priceMin, priceMax)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?size=${size}&brand=${brand}&name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS14,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  
  export const combinationsFilter15=(size, name)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(`${URL}/shoes?size=${size}&name=${name}`);
        dispatch({
          type: COMBINATION_FILTERS15,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  
  export const combinationsFilter16=(size, category)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?size=${size}&category=${category}`
        );
        dispatch({
          type: COMBINATION_FILTERS16,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter17=(size, category, brand)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?size=${size}&category=${category}&brand=${brand}`
        );
        dispatch({
          type: COMBINATION_FILTERS17,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter18=(size,category,brand,name,priceMin,priceMax)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?size=${size}&category=${category}&brand=${brand}&name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS18,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }
  export const combinationsFilter19=(size,category,brand, priceMin,priceMax)=> {
    return async(dispatch)=> {
      try {
        const results = await axios(
          `${URL}/shoes?size=${size}&category=${category}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`
        );
        dispatch({
          type: COMBINATION_FILTERS19,
          payload: results.data,
        });
        return results.data;
      } catch (err) {
        throw err;
      }
    };
  }

export const addOneToCart = (payload) => {
  return {
    type: ADD_ONE_TO_CART,
    payload,
  };
}

export const deleteOneToCart = (payload) => {
  return {
    type: DELETE_ONE_FROM_CART,
    payload: payload,
  };
}

export const removerTodo = () => {
  return {
    type: REMOVER_TODO,
  };
}

export const getIdPayment = (id) => {
  return {
    type: ID_PAYMENT, payload: id
  };
}