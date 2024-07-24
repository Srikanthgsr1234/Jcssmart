import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import bgImage from "../Assets/fires.jpg"; // Replace with your background image path
import fireImage from "../Assets/fires1.webp"; // Replace with your fire image path
import "../App.css"; // Ensure the CSS file is imported

const FireDetection = () => {
  const [fireDetected, setFireDetected] = useState(false);

  useEffect(() => {
    const fetchFireData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/fire');
        setFireDetected(response.data.fire);
      } catch (error) {
        console.error('Error fetching fire data:', error);
      }
    };

    fetchFireData();
  }, []);

  return (
    <div className="min-h-screen flex relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Sidebar />
      <div className="flex items-start justify-center flex-1 p-4 lg:p-6">
        <div className="flex items-start mt-16 lg:mt-20">
          <header className="p-4 lg:p-6 rounded-lg shadow-lg max-w-screen-sm bg-white border border-gray-200 relative z-0">
            <h1 className="text-3xl lg:text-4xl mb-3 lg:mb-4 text-center font-semibold text-gray-800">Fire Detection System</h1>
            <div className="flex">
              <div>
                <div className="flex items-center justify-center mb-4 lg:mb-6">
                  <div className="relative mr-4 lg:mr-6">
                    {fireDetected && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Add fire animation here if needed */}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-gray-600 mb-2">Fire Status:</p>
                    <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-full ${fireDetected ? 'bg-red-100' : 'bg-green-100'} flex items-center justify-center`}>
                      <p className={`text-2xl lg:text-4xl ${fireDetected ? 'text-red-500' : 'text-green-500'}`}>{fireDetected ? 'Detected' : 'Safe'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-4 lg:ml-14 mt-8 lg:mt-10 relative">
                <img src={fireImage} alt="Fire" className="w-24 lg:w-28" />
                {fireDetected && (
                  <div className="absolute inset-0 flex flex-col items-center">
                    {/* Add any fire animation or visual indicator here */}
                  </div>
                )}
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default FireDetection;
