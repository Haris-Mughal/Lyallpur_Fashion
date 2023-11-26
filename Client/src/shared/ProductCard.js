// ProductCard.js
import React from "react";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const { id, name, price, photo } = product;

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { id, name, price } });
  };

  return (
    <div className="product-card">
      <img src={photo} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Price: Rs. {price.toFixed(2)}</p>
        <button className="add-to-bag-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
