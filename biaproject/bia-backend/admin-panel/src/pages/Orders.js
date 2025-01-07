import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]); // Store orders
  const [loading, setLoading] = useState(true); // Loading state for better UX
  const [error, setError] = useState(null); // Error state for better debugging

  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch orders from the backend
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3002/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      setError('Failed to load orders. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle status update for an order
  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:3002/api/orders/${orderId}/status`, {
        status: newStatus,
      });

      // Display a success message
      alert(`Order status updated to "${response.data.status}" successfully!`);

      // Update the orders state to reflect changes
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: response.data.status } : order
        )
      );
    } catch (error) {
      console.error(`Failed to update order status:`, error);
      alert('Failed to update order status.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Client Orders</h1>

      {/* Display loading or error message */}
      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Orders Table */}
      {!loading && !error && (
        <table className="w-full table-auto bg-white rounded shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Client</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Products</th>
              <th className="px-4 py-2 text-left">Total Price</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="border px-4 py-2">{order._id}</td>
                <td className="border px-4 py-2">{order.clientName || 'N/A'}</td>
                <td className="border px-4 py-2">{order.clientAddress || 'N/A'}</td>
                <td className="border px-4 py-2">{order.clientPhone || 'N/A'}</td>
                <td className="border px-4 py-2">
                  {order.products && order.products.length > 0 ? (
                    order.products.map((product, index) => (
                      <div key={index}>
                        {product.productId?.name || 'Unknown Product'} (x{product.quantity || 1})
                      </div>
                    ))
                  ) : (
                    <span>No products</span>
                  )}
                </td>
                <td className="border px-4 py-2">{order.totalPrice?.toFixed(2)} TND</td>
                <td className="border px-4 py-2">
                  {order.status === 'Pending' && <span className="text-yellow-500">Pending</span>}
                  {order.status === 'Confirmed' && <span className="text-green-500">Confirmed</span>}
                  {order.status === 'Failed' && <span className="text-red-500">Failed</span>}
                </td>
                <td className="border px-4 py-2">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
                <td className="border px-4 py-2">
                  {order.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleStatusUpdate(order._id, 'Confirmed')}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(order._id, 'Failed')}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Fail
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
