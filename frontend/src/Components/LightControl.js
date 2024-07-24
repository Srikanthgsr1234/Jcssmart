import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import bgImage from "../Assets/light1.jpg"; // Replace with your background image path
import lightImage from "../Assets/lightss2.webp"; // Replace with your light image path
import "../App.css"; // Ensure the CSS file is imported

const LightControl = () => {
  const [lightState, setLightState] = useState('off');

  const toggleLight = async () => {
    const newState = lightState === 'off' ? 'on' : 'off';
    try {
      await axios.post('http://localhost:3001/api/light', { state: newState });
      setLightState(newState);
    } catch (error) {
      console.error('Error updating light state:', error);
    }
  };

  return (
    <div className="min-h-screen flex relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Sidebar />
      <div className="flex items-start justify-center flex-1 p-4 lg:p-6">
        <div className="flex items-start mt-16 lg:mt-20">
          <header className="p-4 lg:p-6 rounded-lg shadow-lg max-w-screen-sm bg-white border border-gray-200 relative z-0">
            <h1 className="text-3xl lg:text-4xl mb-3 lg:mb-4 text-center font-semibold text-gray-800">Light Control System</h1>
            <div className="flex">
              <div>
                <div className="flex items-center justify-center mb-4 lg:mb-6">
                  <div className="relative mr-4 lg:mr-6">
                    {lightState === 'on' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Add light animation here if needed */}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-base lg:text-lg text-gray-600 mb-2">Light is currently:</p>
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-yellow-100 flex items-center justify-center">
                      <p className="text-2xl lg:text-4xl text-yellow-500">{lightState}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <button
                    onClick={toggleLight}
                    className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-base lg:text-lg w-auto ${
                      lightState === 'off' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-red-500 hover:bg-red-700'
                    } text-white`}
                  >
                    {lightState === 'off' ? 'Turn Light On' : 'Turn Light Off'}
                  </button>
                </div>
              </div>
              <div className="ml-8 lg:ml-12 mt-6 lg:mt-6 relative">
                <img src={lightImage} alt="Light" className="w-20 lg:w-28" />
                {lightState === 'on' && (
                  <div className="absolute inset-0 flex flex-col items-center">
                    {/* Add any light animation or visual indicator here */}
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

export default LightControl;
