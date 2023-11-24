


// AddSubcategory component

import React, { useState, useEffect } from 'react';

function AddSubcategory() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [subcategorySlug, setSubcategorySlug] = useState('');
  const [subcategoryImage, setSubcategoryImage] = useState(null); // For handling image upload

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories.json');
        if (response.ok) {
          const data = await response.json();
          setCategories(data); // Update the categories state with fetched data
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategory || !subcategoryName || !subcategorySlug || !subcategoryImage) {
      console.error('Please fill in all required fields');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('subcategory[name]', subcategoryName);
      formData.append('subcategory[slug]', subcategorySlug);
      formData.append('subcategory[image]', subcategoryImage);
  
      const response = await fetch(`https://farmerr-dgb1.onrender.com/categories/${selectedCategory}/subcategories`, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Subcategory created successfully!');
      } else {
        console.error('Error creating subcategory');
      }
    } catch (error) {
      console.error('Error creating subcategory:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category) => (
    <option key={category.id} value={category.slug}>
    {category.name}
  </option>
  ))}
        </select>

        <input
          type="text"
          value={subcategoryName}
          onChange={(e) => setSubcategoryName(e.target.value)}
          placeholder="Enter subcategory name"
        />
        <input
          type="text"
          value={subcategorySlug}
          onChange={(e) => setSubcategorySlug(e.target.value)}
          placeholder="Enter subcategory slug"
        />
        <input
          type="file"
          onChange={(e) => setSubcategoryImage(e.target.files[0])}
          accept="image/*"
        />
        <button type="submit">Add Subcategory</button>
      </form>
    </div>
  );
}

export default AddSubcategory;