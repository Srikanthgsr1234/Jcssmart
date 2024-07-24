
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => { // Receive onLogin function prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/login", { email, password });
      if (result.data.message === "Success") {
        onLogin(result.data.user); // Update user state in parent component
        navigate('/');
      } else {
        console.log("Login failed");
        // Handle invalid login case, show error message if needed
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  };

  return (
    <div className="flex justify-center items-center py-28 bg-blue-950">
      <div className="bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <strong>Email</strong>
            </label>
            <input 
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="p-2 form-input mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              <strong>Password</strong>
            </label>
            <input 
              type="password"
              placeholder="Enter Password"
              name="password"
              className="p-2 form-input mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Login
          </button>
        </form>
        <p className="mt-4">Create New Account?</p>
        <Link to="/signup" className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-xl text-center">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
