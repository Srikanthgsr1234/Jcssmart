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
    if (!user) {
      setMessage('You have to login first');
      navigate('/login');
    } else {
      navigate('/options');
    }
  };

  return (
    <div className="relative top-0 left-0 w-full z-10 p-2 flex flex-row pl-6 items-center bg-white py-3 shadow-md">
      <img className="w-20 h-auto rounded-md" src={jcsGroupImage} alt="jcsGroup" />

      <div className="flex flex-row  items-center pl-6 flex-grow">
        <Link to="/" className="p-2 px-2 text-xl font-semibold">
          Home
        </Link>
        <Link to="/products" className="p-2 px-2 text-xl font-semibold">
          Products
        </Link>
        <Link to="/about-us" className="p-2 text-xl px-2 font-semibold">About Us</Link>
      </div>

      <div className="flex items-center justify-end">
        <button
          onClick={handleSmartHomeClick}
          className="p-2 px-4 bg-blue-950 text-xl font-semibold mr-6 text-white rounded-lg transition-transform transform hover:scale-105"
        >
          Smart Home
        </button>
        {user ? (
          <>
            <span className="p-2 text-xl font-semibold pr-4">{user.name}</span>
            <button
              onClick={handleLogout}
              className="p-2 text-xl font-semibold pr-10 transition-transform transform hover:scale-105"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="p-2 text-xl font-semibold pr-10">
            Login
          </Link>
        )}
      </div>
      {message && (
        <div className="fixed top-20 right-10 p-4 bg-red-500 text-white rounded-lg shadow-lg animate-fade-in-down transition-opacity duration-300">
          {message}
        </div>
      )}
    </div>
  );
};

export default Header;

