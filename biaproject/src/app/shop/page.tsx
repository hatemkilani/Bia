"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../components/CartContext";
import { useRouter } from "next/navigation"; // Correctly import useRouter
import { FaShoppingCart } from "react-icons/fa";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  image: string;
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cartVisible, setCartVisible] = useState<boolean>(false); // Toggle for the cart panel
  const { cartItems, addToCart, removeFromCart } = useCart();
  const router = useRouter(); // Move useRouter inside the Shop component

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  const handleConfirm = () => {
    console.log("Navigating to /checkout...");
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#320707] text-white py-12 px-8 relative">
      {/* Shopping Cart Icon */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setCartVisible((prev) => !prev)} // Toggle cart visibility
          className="relative bg-[#5b0c0c] p-4 rounded-full text-white hover:bg-opacity-80"
        >
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Cart Panel */}
      {cartVisible && (
        <div className="fixed top-16 right-4 bg-white text-black p-4 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center mb-2"
                  >
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-bold"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              {/* Total Price */}
              <p className="mt-4 text-right font-bold">
                Total: $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              {/* Confirm Button */}
              <button
                onClick={handleConfirm} // Redirects to the checkout page
                className="w-full bg-[#5b0c0c] text-white py-2 px-4 mt-4 rounded-lg font-bold hover:bg-opacity-80"
              >
                Confirm
              </button>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      {/* Shop Section */}
      <h1 className="text-6xl font-bold text-center mb-8">Shop Our Collection</h1>
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div
              key={product._id}
              className="product bg-[#5b0c0c] p-8 rounded-lg shadow-lg"
            >
              <img
                src={`http://localhost:3002/uploads/${product.image}`}
                alt={product.name}
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg text-gray-300 mb-4">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-white text-[#5b0c0c] py-2 px-6 rounded-full font-bold hover:bg-opacity-90"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
