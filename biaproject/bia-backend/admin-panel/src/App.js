import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Orders from './pages/Orders';

const App = () => {
  const isAuthenticated = true; // Assume the user is always authenticated since login is removed

  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Header */}
        <Header />
        <div className="flex flex-grow">
          {/* Sidebar */}
          <Sidebar />
          <main className="flex-grow p-6 overflow-y-auto">
            <Routes>
              {/* Routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/update-product/:id" element={<UpdateProduct />} />
              <Route path="/orders" element={<Orders />} />
              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
