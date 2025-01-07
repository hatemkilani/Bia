import React from 'react';

const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login'; // Redirect to login page
};

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <button onClick={handleLogout} className="text-white bg-red-500 px-4 py-2 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;
