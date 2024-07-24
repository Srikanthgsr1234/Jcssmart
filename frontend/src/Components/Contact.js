import React from 'react';
import Footer from './Footer';
import { UilEnvelope, UilPhone, UilWhatsappAlt } from '@iconscout/react-unicons';

const Contact = () => {
  return (
    <div>
      <div className="bg-blue-950 text-white h-56 flex items-center justify-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-center w-full px-4 py-16 sm:py-20">
          Contact Us
        </h1>
      </div>
      
      <div className="flex flex-col items-center pt-16 sm:pt-32 px-4 sm:px-0">
        <div className="border border-gray-300 rounded-lg w-full sm:w-4/5 lg:w-3/5 flex flex-col p-6 sm:p-8 bg-white shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Connect with us:</h2>
          <div className="flex items-center mb-4">
            <UilEnvelope className="h-8 w-8 text-blue-500" />
            <p className="ml-4 text-lg font-medium">contact@jcsglobal.in</p>
          </div>
          <div className="flex items-center mb-4">
            <UilPhone className="h-8 w-8 text-blue-500" />
            <p className="ml-4 text-lg font-medium">91-9090007108</p>
          </div>
          <div className="flex items-center mb-4">
            <UilWhatsappAlt className="h-8 w-8 text-blue-500" />
            <a 
              href={`https://wa.me/919090007108`} 
              className="ml-4 text-lg font-medium text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              91-9090007108
            </a>
          </div>
        </div>
        
        <div className="border border-gray-300 rounded-lg w-full sm:w-4/5 lg:w-3/5 flex flex-col p-6 sm:p-8 bg-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Corporate Office:</h2>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">JCS Global</h3>
            <p className="text-lg font-medium mb-1">76-16-53, Urmila Nagar,</p>
            <p className="text-lg font-medium mb-1">Bhavanipuram,</p>
            <p className="text-lg font-medium">Vijayawada, A.P.</p>
          </div>
        </div>
      </div>

      <div className="pt-16 sm:pt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
