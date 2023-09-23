import React from "react";
import Itemcard from "./Itemcard";

// Define a custom style for smaller item cards
const smallerItemCardStyle = {
  width: "200px", // Adjust the width as needed
  height: "250px", // Adjust the height as needed
};

function ItemShowcase() {
  return (
    <div className="min-h-screen bg-yellow-300">
      <div className="py-4">
        <ul className="flex items-center space-x-6 pl-4">
          <li>Collection</li>
          <li>Phones</li>
          <li>Shirts</li>
          <li>Shoes</li>
          <li>Glasses</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold">Item Showcase</h1>
      <h2 className="text-xl">Explore our products</h2>

      {/* Render your Itemcard components with smallerItemCardStyle */}
      <div className="container mx-auto py-8 flex flex-wrap justify-center space-x-4 space-y-4">
        <div style={smallerItemCardStyle} className="mr-4">
          <Itemcard />
        </div>
        <div style={smallerItemCardStyle} className="mr-4">
          <Itemcard />
        </div>
        <div style={smallerItemCardStyle} className="mr-4">
          <Itemcard />
        </div>
        <div style={smallerItemCardStyle} className="mr-4">
          <Itemcard />
        </div>
      </div>
    </div>
  );
}

export default ItemShowcase;