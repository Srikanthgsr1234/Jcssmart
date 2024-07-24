import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    inquiryType: 'Smart Door Bells', // default value for dropdown
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message, inquiryType } = formData;
    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AInquiry Type: ${inquiryType}%0AMessage: ${message}`;
    const targetPhoneNumber = '919090007108'; // Replace this with the target phone number in international format
    const whatsappURL = `https://wa.me/${targetPhoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="inquiryType">
          Select Type of Product
        </label>
        <select
          name="inquiryType"
          id="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="Smart Door Bells">Smart Door Bells</option>
          <option value="Security Cameras">Security Cameras</option>
          <option value="Smart Lights">Smart Lights</option>
          <option value="Smart Temperature Detectors">Smart Temperature Detectors</option>
          <option value="Smart Gas Detectors">Smart Gas Detectors</option>
          <option value="Smart Door Locks">Smart Door Locks</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
