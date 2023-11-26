// Cart.js
import React from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <main>
      <h2>Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.items.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Rs. {item.price.toFixed(2)}</span>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </main>
  );
};

export default Cart;
