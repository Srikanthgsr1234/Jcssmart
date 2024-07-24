import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Adjust the import path as needed
import plantImage from "../Assets/plants.gif"; // Replace with your plant image path
import bgImage from "../Assets/bgImage.jpg"; // New background image import
import "../App.css"; // Ensure the CSS file is imported

function PlantWateringSystem() {
  const [moisture, setMoisture] = useState(0);
  const [pumpState, setPumpState] = useState('off');

  useEffect(() => {
    const fetchMoisture = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/moisture'); // Adjusted backend port
        setMoisture(response.data.moisture);
      } catch (error) {
        console.error('Error fetching moisture level:', error);
      }
    };

    fetchMoisture();
    const interval = setInterval(fetchMoisture, 10000); // Fetch moisture level every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const togglePump = async () => {
    const newState = pumpState === 'off' ? 'on' : 'off';
    try {
      await axios.post('http://localhost:3001/api/water', { state: newState }); // Adjusted backend port
      setPumpState(newState);
    } catch (error) {
      console.error('Error updating pump state:', error);
    }
  };

  return (
    <div className="min-h-screen flex relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
      <Sidebar />
      <div className="flex items-start justify-center flex-1 p-4 lg:p-6">
        <div className="flex items-start mt-16 lg:mt-20">
          <div className="absolute top-0 right-0 mt-24 mr-4 w-24 z-10">
            {/* Empty space for potential future content */}
          </div>
          <header className="p-4 lg:p-6 rounded-lg shadow-lg max-w-screen-sm bg-white border border-gray-200 relative z-0">
            <h1 className="text-3xl lg:text-4xl mb-3 lg:mb-4 text-center font-semibold text-gray-800">Plant Watering System</h1>
            <div className="flex">
              <div>
                <div className="flex items-center justify-center mb-4 lg:mb-6">
                  <div className="relative mr-4">
                    {pumpState === 'on' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500 animate-drop">
                          <use xlinkHref="#water-drop" />
                        </svg>
                        <svg className="w-6 h-6 text-blue-500 animate-drop" style={{ animationDelay: '0.5s' }}>
                          <use xlinkHref="#water-drop" />
                        </svg>
                        <svg className="w-6 h-6 text-blue-500 animate-drop" style={{ animationDelay: '1s' }}>
                          <use xlinkHref="#water-drop" />
                        </svg>
                        <svg className="w-6 h-6 text-blue-500 animate-drop" style={{ animationDelay: '1.5s' }}>
                          <use xlinkHref="#water-drop" />
                        </svg>
                        <svg className="w-6 h-6 text-blue-500 animate-drop" style={{ animationDelay: '2s' }}>
                          <use xlinkHref="#water-drop" />
                        </svg>
                        <svg className="w-6 h-6 text-blue-500 animate-drop" style={{ animationDelay: '2.5s' }}>
                          <use xlinkHref="#water-drop" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-gray-600 mb-2">Soil Moisture Level: {moisture}%</p>
                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                      <p className="text-3xl lg:text-4xl text-blue-500">{moisture}%</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <button
                    onClick={togglePump}
                    className={`px-4 py-2 rounded-lg text-base lg:text-lg w-auto ${
                      pumpState === 'off'
                        ? 'bg-blue-500 hover:bg-blue-700'
                        : 'bg-red-500 hover:bg-red-700'
                    } text-white`}
                  >
                    {pumpState === 'off' ? 'Turn Pump On' : 'Turn Pump Off'}
                  </button>
                </div>
              </div>
              <div className="ml-6 mt-8 lg:mt-10 relative">
                <img src={plantImage} alt="Plant" className="w-24 lg:w-28" />
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default PlantWateringSystem;
