
// admin category


import Sidebar from "./Sidebar";

import React, { useState } from "react";

const Category = () => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    slug: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCategoryData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("category[name]", categoryData.name);
    formData.append("category[slug]", categoryData.slug);
    
    // Append image without encoding
    formData.append("image", categoryData.image);
    
    try {
      const response = await fetch("http://localhost:3000/categories", {
        method: 'POST',
        headers: {}, // or you can omit this line entirely
        body: formData,  // Corrected line: use formData instead of body
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
      } else {
        const errorData = await response.json();
        console.error("Validation Errors:", errorData.errors);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
            accept="image/*"
            name="image" 
            onChange={handleImageChange}
          />
        </label>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default Category;




