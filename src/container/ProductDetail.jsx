import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  removeSelected,
} from "../redux/actions/ProductAction";
//import axios from "axios";
import { selectedProduct } from "../redux/actions/ProductAction";

const ProductDetail = () => {
  const accessDetail = useSelector((state) => state.selected);
  // console.log(accessDetail);
  const {price, category,title, Description, image } = accessDetail;
  const { productId } = useParams();
  const dispatch = useDispatch();
  // const fetchproductDetail = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .then((res) => {
  //       console.log("Res",res);
  //     })
  //     .catch((err) => {
  //       console.log("Err", err);
  //     });
  //   dispatch(selectedProduct(response.data));
  // };
  useEffect(() => {
    if (productId && productId !== "") dispatch(selectedProduct(productId));
   return () => {
     dispatch(removeSelected());
   }
    // eslint-disable-next-line
  }, [productId]);
  return (
    <div className="header">
{Object.keys(accessDetail).length === 0 ? (
<div>Loading</div>
): (
  <div>
  <img className="image" src={image} alt="caption" />
  <div className="header">{price}</div>
  <div className="header">{category}</div>
  <div className="header">{Description}</div>
  <div className="header">{title}</div>
  <div className="add">Add To Cart</div>
  </div>
  )}
</div>
  
  );
};

export default ProductDetail;
