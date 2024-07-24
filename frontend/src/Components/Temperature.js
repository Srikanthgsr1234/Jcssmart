import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import bgImage from "../Assets/temperature.jpg"; // Replace with your background image path
import tempImage from "../Assets/temps2.gif"; // Replace with your temperature image path
import "../App.css"; // Ensure the CSS file is imported

const Temperature = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/temperature');
        setTemperature(response.data.temperature);
      } catch (error) {
        console.error('Error fetching temperature data:', error);
      }
    };

    fetchTemperatureData();
  }, []);

  return (
    <div className="min-h-screen flex relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Sidebar />
      <div className="flex items-start justify-center flex-1 p-4 lg:p-6">
        <div className="flex items-start mt-16 lg:mt-20">
          <header className="p-4 lg:p-6 rounded-lg shadow-lg max-w-screen-sm bg-white border border-gray-200 relative z-0">
            <h1 className="text-3xl lg:text-4xl mb-3 lg:mb-4 text-center font-semibold text-gray-800">Temperature Monitoring</h1>
            <div className="flex">
              <div>
                <div className="flex items-center justify-center mb-4 lg:mb-6">
                  <div className="relative mr-4 lg:mr-6">
                    {temperature !== null && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Add your animation here if needed */}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-gray-600 mb-2">Current Temperature:</p>
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-blue-100 flex items-center justify-center">
                      <p className="text-2xl lg:text-4xl text-blue-500">{temperature !== null ? `${temperature} °C` : 'Loading...'}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4">
                  {/* Add any additional controls or buttons here if needed */}
                </div>
              </div>
              <div className="ml-8 lg:ml-14 mt-6 lg:mt-10 relative">
                <img src={tempImage} alt="Temperature" className="w-20 lg:w-24" />
                {temperature !== null && (
                  <div className="absolute inset-0 flex flex-col items-center">
                    {/* Add any animation or visual indicator here */}
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

export default Temperature;
