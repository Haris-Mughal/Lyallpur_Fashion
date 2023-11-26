// Payment.js
import React from "react";
import { useCart } from "../contexts/CartContext";

const Payment = () => {
  const { state } = useCart();

  const handlePayment = () => {
    // Use a payment gateway or API (e.g., Stripe, PayPal) to process payments
    // Implement payment logic here
    alert("Payment Successful!");
  };

  return (
    <div>
      <h2>Payment</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Total Items: {state.items.length}</p>
          <p>
            Total Amount: Rs.{" "}
            {state.items
              .reduce((total, item) => total + item.price, 0)
              .toFixed(2)}
          </p>
          <button onClick={handlePayment}>Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default Payment;
