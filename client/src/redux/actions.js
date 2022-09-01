import axios from "axios";

export const GET_ALL_SHOES = 'GET_ALL_SHOES';
export const GET_DETAILS = 'GET_DETAILS'
export const GET_ALL_SIZES = 'GET_ALL_SIZES'
export const GET_ALL_BRANDS = 'GET_ALL_BRANDS'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const CLEAN_DETAILS = 'CLEAN_DETAILS'
export const ADD_ONE_TO_FAV = 'ADD_ONE_TO_FAV'

const URL = process.env.REACT_APP_URL;

export const cleanDetails = () => {
  return ({
      type: CLEAN_DETAILS,
      payload: []
  })
}
export const getAllShoes = ()=> {
    return async (dispatch)=> {
      const results = await axios(`${URL}/shoes`);
      console.log(results)
      return dispatch({
        type: GET_ALL_SHOES,
        payload: results.data,
      });
    };
  }
  export const getDetails = (id)=> {
    return async(dispatch)=> {
      const res = await axios(`${URL}/shoes/${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    };
  }
  export const getAllSizes = ()=>{
    return async (dispatch)=> {
      const results = await axios(`${URL}/size`);
      return dispatch({
        type: GET_ALL_SIZES,
        payload: results.data,
      });
    };
  }
  export const getAllBrands = ()=> {
    return async(dispatch)=>{
      const results = await axios(`${URL}/brands`);
      return dispatch({
        type: GET_ALL_BRANDS,
        payload: results.data,
      });
    };
  }
  
  export const getAllCategories = ()=> {
    return async(dispatch)=>{
      const results = await axios(`${URL}/categories`);
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: results.data,
      });
    };
  }
  export const addOneToFav = (payload)=>{
    return {
      type: ADD_ONE_TO_FAV,
      payload,
    };
  }