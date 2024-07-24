import React, { useState, useEffect } from 'react';
import { BsInstagram, BsTwitterX, BsFacebook, BsLinkedin } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import jcsGroupImage from '../Assets/jcsgr.png';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if the screen size is less than 850px
  const isMobile = windowWidth < 850;

  // Define styles for responsive adjustments
  const responsiveTextStyle = isMobile ? 'text-md' : 'text-lg';
  const responsiveIconStyle = isMobile ? 'w-8 h-8' : 'w-10 h-10';

  return (
    <div className="bg-blue-950 mt-16">
      <div className="flex items-center justify-center pt-16">
        <img className="h-20 w-auto rounded-lg" src={jcsGroupImage} alt="JCS Group" />
      </div>
      
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center pt-8`}>
        <NavLink to="/about-us" className={`px-6 text-white font-semibold ${responsiveTextStyle} ${isMobile ? 'pb-6' : ''}`}>
          About Us
        </NavLink>
        <NavLink to="/contact-us" className={`px-6 text-white font-semibold ${responsiveTextStyle} ${isMobile ? 'pb-6' : ''}`}>
          Contact Us
        </NavLink>
      </div>

      <div className="flex justify-center space-x-10 py-8 border-b border-gray-700">
        <a href="https://www.facebook.com/jcserviceshub" target="_blank" rel="noopener noreferrer" className="hover:text-[#2f29d6]">
          <BsFacebook className={`${responsiveIconStyle}`} />
        </a>
        <a href="https://www.instagram.com/jcs.hub/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d62976]">
          <BsInstagram className={`${responsiveIconStyle}`} />
        </a>
        <a href="https://www.linkedin.com/company/jcs-hub/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5]">
          <BsLinkedin className={`${responsiveIconStyle}`} />
        </a>
        <a href="https://x.com/jcshub?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#00acee]">
          <BsTwitterX className={`${responsiveIconStyle}`} />
        </a>
      </div>
      
      <div className="py-8 text-gray-300 flex items-center justify-center">
        <h1 className={`${responsiveTextStyle}`}>©2020 JCS Global. All Rights Reserved | Caution Notice</h1>
      </div>

      <div className="flex flex-wrap justify-center pb-10">
        <h1 className={`text-2xl text-white px-6 ${responsiveTextStyle}`}>JCS Group</h1>
        <h1 className={`text-2xl text-white px-6 ${responsiveTextStyle}`}>Carry Carter</h1>
        <h1 className={`text-2xl text-white px-6 ${responsiveTextStyle}`}>JCS Hub</h1>
      </div>
    </div>
  );
};

export default Footer;
