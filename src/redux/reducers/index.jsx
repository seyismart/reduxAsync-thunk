import { combineReducers } from "redux";
import { selectedProduct, setProduct } from "./productReducer";

export const reducers = combineReducers({
  allProduct: setProduct,
  selected: selectedProduct,
});

