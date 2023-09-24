import React, { useState } from "react";
import { Link } from 'react-router-dom';
import pic1 from "../images/pic1.png"; // Import the image

const catNav = [
  {
    name: "Farm Produce",
    subcategories: ["Cereals", "Fruits", "Vegetables"], // Define subcategories
  },
  {
    name: "Animal Produce",
    subcategories: ["Milk", "Eggs", "Meat"],
  },
  // Add more categories and subcategories as needed
];

const ItemShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Function to handle category click
  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
    setSelectedSubcategory(null); // Reset subcategory when a new category is clicked
  };

  // Function to handle subcategory click
  const handleSubcategoryClick = (subcategoryIndex) => {
    setSelectedSubcategory(subcategoryIndex);
  };

  return (
    <section className="bg-white w-full shadow overflow-hidden">
      <div className="flex px-6 py-3 justify-between items-center">
        <Link to="/products" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</Link>
      </div>
      <hr />

      {/* Category cards */}
      <div className="flex justify-center flex-col items-center space-y-4 mt-4">
        {catNav.map((item, i) => (
          <div key={i}>
            <img
              draggable="false"
              className={`h-20 w-20 object-contain ${
                selectedCategory === i ? "filter invert" : ""
              }`}
              src={pic1}
              alt={item.name}
              onClick={() => handleCategoryClick(i)}
            />
            <div
              className={`cursor-pointer p-2 group ${
                selectedCategory === i ? "bg-primary-blue text-white" : "bg-white text-gray-800"
              }`}
              onClick={() => handleCategoryClick(i)}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Subcategories */}
      {selectedCategory !== null && (
        <div className="flex justify-center space-x-4 mt-4">
          {catNav[selectedCategory].subcategories.map((subcategory, subcategoryIndex) => (
            <div
              key={subcategoryIndex}
              className={`cursor-pointer p-2 group ${
                selectedSubcategory === subcategoryIndex ? "bg-primary-blue text-white" : "bg-white text-gray-800"
              }`}
              onClick={() => handleSubcategoryClick(subcategoryIndex)}
            >
              {subcategory}
            </div>
          ))}
        </div>
      )}

      {/* Product display */}
      {selectedSubcategory !== null && (
        // Render products related to the selected subcategory here
        <div className="mt-4">
          {/* You can map through and display products here */}
          <div>Product 1</div>
          <div>Product 2</div>
          {/* Add more product components as needed */}
        </div>
      )}
    </section>
  );
};

export default ItemShowcase;