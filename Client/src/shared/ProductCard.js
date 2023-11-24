import React from "react";

const ProductCard = ({ product, onAddToBag }) => {
  const { _id, name, price, photo } = product;

  return (
    <div className="product-card">
      <img src={photo} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Price: Rs. {price.toFixed(2)}</p>
        <button className="add-to-bag-button" onClick={() => onAddToBag(product)}>
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
