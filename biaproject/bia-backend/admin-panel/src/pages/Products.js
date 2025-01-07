import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]); // For multi-selection
  const navigate = useNavigate(); // Navigation for update button

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleSelect = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product._id));
    }
  };

  const handleDeleteMultiple = async () => {
    if (window.confirm("Are you sure you want to delete the selected products?")) {
      try {
        await axios.delete("http://localhost:3002/api/products/bulk-delete", {
          data: { ids: selectedProducts },
        });
        alert("Selected products deleted successfully!");
        fetchProducts();
        setSelectedProducts([]);
      } catch (error) {
        console.error("Failed to delete selected products:", error);
        alert("Failed to delete selected products.");
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:3002/api/products/${id}`);
        alert("Product deleted successfully!");
        fetchProducts();
      } catch (error) {
        console.error("Failed to delete product:", error);
        alert("Failed to delete product.");
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDeleteMultiple}
          disabled={selectedProducts.length === 0}
          className={`bg-red-500 text-white px-4 py-2 rounded ${
            selectedProducts.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
          }`}
        >
          Delete Selected
        </button>
      </div>
      <table className="w-full table-auto bg-white rounded shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedProducts.length === products.length}
              />
            </th>
            <th className="px-4 py-2 text-left">Image</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  onChange={() => handleSelect(product._id)}
                  checked={selectedProducts.includes(product._id)}
                />
              </td>
              <td className="border px-4 py-2">
                {product.image && (
                  <img
                    src={`http://localhost:3002/api/products/uploads/${product.image}`}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                )}
              </td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/update-product/${product._id}`)} // Navigate to update page
                  className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
