import {
  SET_ERRORS,
  LOADING_DATA,
  GET_PRODUCTS,
  SET_PRODUCT,
  SET_CART,
  DELETE_PRODUCT
} from "../types";
import axios from "axios";

export const getProducts = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/products")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};
export const setProduct = product => dispatch => {
  dispatch({ type: LOADING_DATA });
  dispatch({
    type: SET_PRODUCT,
    payload: product
  });
};
export const deleteProduct = productId => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .delete(`/users/cart/${productId}`)
    .then(res => {
      dispatch({ type: DELETE_PRODUCT, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.code
      });
    });
};
export const getCart = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/users/cart")
    .then(res => {
      dispatch({
        type: SET_CART,
        payload: res.data
      });
    })
    .catch(err => {
      return console.log(err.code);
    });
};
