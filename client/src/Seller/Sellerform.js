



import React, { useState } from 'react';
import axios from 'axios';

const Sellerform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Registration successful:', response.data);
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-green-200 rounded-md shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase decoration-wavy mb-6">
          Merchant Form
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="text-gray-700">User name</label>
            <input
              type="text"
              name="name"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John Cooks"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john.cooks@example.com"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="0795115545"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="County Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Register Shop
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sellerform;



