import React, { useState, useEffect } from 'react';
import jcsGroupImage from '../Assets/jcsgr.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000); // Clear the message after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleLogout = () => {
    onLogout(); // Call parent component or context function to handle logout
  };

  const handleSmartHomeClick = () => {
    navigate('/options'); // Directly navigate to the options component
  };

  return (
    <header className="relative w-full z-10 p-3 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <img className="w-20 h-auto mr-7 rounded-md" src={jcsGroupImage} alt="JCS Group" />

        <nav className="flex-grow flex items-center space-x-3 lg:space-x-6">
          <Link to="/" className="text-lg lg:text-xl font-semibold transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="text-lg lg:text-xl font-semibold transition-colors hover:text-blue-600">
            Products
          </Link>
          <Link to="/about-us" className="text-lg lg:text-xl font-semibold transition-colors hover:text-blue-600">
            About Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4 lg:space-x-6">
          <button
            onClick={handleSmartHomeClick}
            className="px-3 py-2 bg-blue-950 text-white text-lg lg:text-xl font-semibold rounded-lg transition-transform transform hover:scale-105"
          >
            Smart Home
          </button>
          {user ? (
            <>
              <span className="text-lg lg:text-xl font-semibold">{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-lg lg:text-xl font-semibold transition-transform transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-lg lg:text-xl font-semibold">
              Login
            </Link>
          )}
        </div>
      </div>
      {message && (
        <div className="fixed top-20 right-10 p-4 bg-red-500 text-white rounded-lg shadow-lg animate-fade-in-down transition-opacity duration-300">
          {message}
        </div>
      )}
    </header>
  );
};

export default Header;
