import React from 'react';
import landingImage from '../Assets/landing.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="relative bg-blue-950 h-[600px] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-6">
      <div className="flex flex-col items-start lg:items-start lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-4">Starter Kits</h1>
        <h2 className="text-xl lg:text-xl text-white font-medium mb-6">
          New to JCS? Browse our curated Bundles
        </h2>
        <Link
          to="/products"
          className="text-xl lg:text-2xl px-4 py-2 rounded-lg font-bold bg-white text-blue-950 inline-block hover:bg-gray-100 transition-colors duration-300"
        >
          Shop Now
        </Link>
      </div>

      <div className="flex items-center justify-center lg:w-1/2">
        <img
          className="w-full max-w-md lg:max-w-full h-auto rounded-lg"
          src={landingImage}
          alt="landing"
        />
      </div>
    </div>
  );
}

export default Landing;
