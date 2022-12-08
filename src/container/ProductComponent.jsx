import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const prooduct = useSelector((state) => state.allProduct.products);
  const product = prooduct.map((produce) => {
    const { image, price, title, id, category } = produce;
    return (
      <div className="four column wide" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link card">
            <div className="card">
              <img src={image} alt="caption" />
            </div>
            <div className="content">
              <div className="meta">{title}</div>
              <div className="header">{price}</div>
              <div className="meta-price">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  console.log(product);
  return <div>{product}</div>;
};

export default ProductComponent;
