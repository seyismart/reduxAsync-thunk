import { ActionTypes } from "../constants/action-types";
//import fakestoreapi from "../../apis/fakestoreapi";
import axios from "axios";
import fakestoreapi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
  const resp = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: resp.data });
  };

// export const setProduct = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   }
// }
export const selectedProduct = (id) => async (dispatch) => {
    const resp = await fakestoreapi.get(
      `https://fakestoreapi.com/products/${id}`
    );
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: resp.data });
  };
// export const selectedProduct = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCT,
//     payload: product,
//   };
// };
export const removeSelected = () => (dispatch) => {
dispatch({type:ActionTypes.REMOVE_SELECTED})
  }
