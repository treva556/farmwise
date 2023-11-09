

// admin category


import React, { useState } from "react";
import Sidebar from "./Sidebar";


const Category = () => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    slug: "",
    image: null // Use null for the image state
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategoryData({ ...categoryData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input
    setCategoryData({ ...categoryData, image: file }); // Store the entire file object in the state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("category[name]", categoryData.name);
    formData.append("category[slug]", categoryData.slug);
    formData.append("image", categoryData.image);
    
    fetch('http://localhost:3000/categories', {
      method: 'POST',
      body: formData,
      // Do not set Content-Type header, let the browser set it automatically
    })
    .then(response => {
      if (response.status === 204) {
        // No Content response, handle it appropriately
        console.log('Success: No Content');
      } else if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      if (data) {
        console.log('Success:', data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={categoryData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Slug:
          <input
            type="text"
            name="slug"
            value={categoryData.slug}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            accept="image/*" // Allow only image files
            onChange={handleImageChange}
          />
        </label>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default Category;

