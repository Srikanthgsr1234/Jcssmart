import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'; // Adjust the path accordingly
import PlantWateringSystem from './Components/PlantWateringSystem'; // Adjust the path accordingly
import Options from './Components/Options';
import Products from './Components/Products';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import LightControl from './Components/LightControl';
import GasValue from './Components/GasValue';
import Temperature from './Components/Temperature';
import Humidity from './Components/Humidity';
import FireDetection from './Components/FireDetection';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import ContactForm from './Components/ContactForm';

function App() {
  const [user, setUser] = useState(null); // Initialize user state

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data from localStorage
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData); // Update user state on successful login
    localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
    localStorage.removeItem('user'); // Remove user data from localStorage
  };

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} /> {/* Pass user and onLogout function to Header */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plant-watering" element={<PlantWateringSystem />} />
        <Route path="/options" element={<Options user={user} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/light" element={<LightControl />} />
        <Route path="/gas" element={<GasValue />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/humidity" element={<Humidity />} />
        <Route path="/fire" element={<FireDetection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contactform" element={<ContactForm />} />
        {/* Add more routes for other functionalities */}
      </Routes>
    </Router>
  );
}

export default App;
