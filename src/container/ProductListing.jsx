import React from 'react'
//import axios from "axios"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/actions/ProductAction';

const ProductListing = () => {
  const dispatch = useDispatch();
//   const fetchProduct = async () => {
// const response = await axios.get("https://fakestoreapi.com/products")
//   .catch((err) => {
//     console.log("Err", err);
//   })
//   dispatch(setProduct(response.data));

//   } 
useEffect(() => {
  dispatch(fetchProducts());
  // eslint-disable-next-line
},[])

     return( 
      <div><ProductComponent /></div>
      );
}

export default ProductListing