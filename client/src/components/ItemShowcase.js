import React, { useState } from "react";
import { Link } from 'react-router-dom';
import pic1 from "../images/pic1.png"; // Import the image

const catNav = [
  {
    name: "Farm Produce",
    subcategories: [
      "Cereals", "Fruits", "Vegetables"
    ],
  },
  {
    name: "Animal Produce",
    subcategories: [
      "Milk", "Eggs", "Meat"
    ],
  },
  {
    name: "Farm Equipments and Services",
    subcategories: [
      "Equipment 1", "Equipment 2", "Service 1"
    ],
  },
  // Add more categories and subcategories as needed
];

const ItemShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category click
  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <section className="w-full shadow overflow-hidden">
      <hr />

      {/* Category cards */}
      <div className="flex justify-center flex-col space-y-4 mt-4">
        {catNav.map((category, i) => (
          <div key={i} className={`border border-green-500 p-4 ${selectedCategory === i ? "border-2" : ""}`}>
            <div className="flex items-center justify-between">
              <div>
                <div className={`text-lg font-bold ${selectedCategory === i ? "text-primary-blue" : ""}`}>
                  {category.name}
                </div>
              </div>
              <Link
                to="/products"
                className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg"
              >
                VIEW ALL
              </Link>
            </div>
            
            {/* Subcategories */}
            {selectedCategory === i && (
              <div className="flex justify-center space-x-4 mt-4">
                {category.subcategories.map((subcategory, subcategoryIndex) => (
                  <div
                    key={subcategoryIndex}
                    className="flex flex-col items-center"
                  >
                    <img
                      draggable="false"
                      className="h-20 w-20 object-contain"
                      src={pic1}
                      alt={subcategory}
                    />
                    <div className="text-sm text-gray-800 mt-2">
                      {subcategory}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemShowcase;













//carosssel lib



