import { ActionTypes } from "../constants/action-types"
const initialState = {
  products: [],
}

 export const setProduct= (state = initialState, action) => {
switch (action.type) {
  // case ActionTypes.SET_PRODUCTS:
  //   return { ...state, products: action.payload };
  case ActionTypes.FETCH_PRODUCTS:
    return {...state, products: action.payload };
  default:
    return state;
}
}

export const selectedProduct = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return{...state, ...action.payload};
   case ActionTypes.REMOVE_SELECTED:
    return {};
    default:
  return state;
  }
};