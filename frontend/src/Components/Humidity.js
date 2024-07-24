import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import bgImage from "../Assets/humidity.jpg"; // Replace with your background image path
import humidityImage from "../Assets/humiditys.jpg"; // Replace with your humidity image path
import "../App.css"; // Ensure the CSS file is imported

const Humidity = () => {
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const fetchHumidityData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/humidity');
        setHumidity(response.data.humidity);
      } catch (error) {
        console.error('Error fetching humidity data:', error);
      }
    };

    fetchHumidityData();
  }, []);

  return (
    <div className="min-h-screen flex relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Sidebar />
      <div className="flex items-start justify-center flex-1 p-4 lg:p-6">
        <div className="flex items-start mt-16 lg:mt-20">
          <header className="p-4 lg:p-6 rounded-lg shadow-lg max-w-screen-sm bg-white border border-gray-200 relative z-0">
            <h1 className="text-3xl lg:text-4xl mb-3 lg:mb-4 text-center font-semibold text-gray-800">Humidity Monitoring</h1>
            <div className="flex">
              <div>
                <div className="flex items-center justify-center mb-4 lg:mb-6">
                  <div className="relative mr-4 lg:mr-6">
                    {humidity !== null && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Add your animation here if needed */}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-gray-600 mb-2">Current Humidity:</p>
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-green-100 flex items-center justify-center">
                      <p className="text-2xl lg:text-4xl text-green-500">{humidity !== null ? `${humidity} %` : 'Loading...'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-8 lg:ml-14 mt-6 lg:mt-8 relative">
                <img src={humidityImage} alt="Humidity" className="w-16 lg:w-20" />
                {humidity !== null && (
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

export default Humidity;
