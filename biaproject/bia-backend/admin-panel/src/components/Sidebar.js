import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyles = ({ isActive }) =>
    `block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 font-medium rounded-lg ${
      isActive ? 'bg-blue-200 text-blue-800' : ''
    }`;

  return (
    <aside className="w-64 h-full bg-white shadow-md p-4">
      <nav className="space-y-2">
        <NavLink to="/" className={linkStyles}>
          Dashboard
        </NavLink>
        <NavLink to="/products" className={linkStyles}>
          Products
        </NavLink>
        <NavLink to="/add-product" className={linkStyles}>
          Add Product
        </NavLink>
        <NavLink to="/orders" className={linkStyles}>
          Orders
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
