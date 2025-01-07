"use client";

import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import axios from "axios";
import "./checkout.css"; // Include animation CSS

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCheckout = async () => {
    if (!clientName || !clientPhone || !clientAddress) {
      alert("Please fill out all fields.");
      return;
    }

    const orderData = {
      clientName,
      clientPhone,
      clientAddress,
      products: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    };

    if (!isAnimating) {
      setIsAnimating(true);
      setLoading(true);

      try {
        // Send the order data to the backend
        const response = await axios.post("http://localhost:3002/api/orders", orderData);

        if (response.status === 201) {
          setOrderSuccess(true);
          clearCart(); // Clear the cart after a successful order
        }
      } catch (error) {
        console.error("Error creating order:", error);
        alert("Failed to place the order. Please try again.");
      } finally {
        setLoading(false);
        setIsAnimating(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 py-12 px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>

        {orderSuccess ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-500">
              Order Placed Successfully!
            </h2>
            <p className="mt-4">Thank you for your order, {clientName}!</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Your Cart</h2>
              {cartItems.length > 0 ? (
                <ul className="divide-y">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center py-4">
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Your cart is empty.</p>
              )}
              <p className="text-right font-bold mt-4">
                Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </div>

            <h2 className="text-xl font-bold mb-4">Billing Information</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCheckout();
              }}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block font-bold mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                  rows={3}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`order-button ${isAnimating ? "animate" : ""}`}
                disabled={loading}
              >
                {loading ? "Processing..." : "Place Order"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
