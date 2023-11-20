

// addgroup

import React, { useState, useEffect } from 'react';

function AddGroup() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupSlug, setGroupSlug] = useState('');
  const [groupImage, setGroupImage] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories.json');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (!selectedCategory) return;
      try {
        const response = await fetch(`http://localhost:3000/categories/${selectedCategory}/subcategories.json`);
        if (response.ok) {
          const data = await response.json();
          setSubcategories(data);
        }
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchSubcategories();
  }, [selectedCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategory || !selectedSubcategory || !groupName || !groupSlug || !groupImage) {
      console.error('Please fill in all required fields');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', groupName);
      formData.append('slug', groupSlug);
      formData.append('image', groupImage);

      const response = await fetch(`http://localhost:3000/categories/${selectedCategory}/subcategories/${selectedSubcategory}/groups`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Group created successfully!');
      } else {
        console.error('Error creating group');
      }
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <select value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)}>
          <option value="">Select a subcategory</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>
              {subcategory.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter group name"
        />
        <input
          type="text"
          value={groupSlug}
          onChange={(e) => setGroupSlug(e.target.value)}
          placeholder="Enter group slug"
        />
        <input
          type="file"
          onChange={(e) => setGroupImage(e.target.files[0])}
          accept="image/*"
        />
        <button type="submit">Add Group</button>
      </form>
    </div>
  );
}

export default AddGroup;