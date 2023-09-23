import React from "react";
import Itemcard from "./Itemcard";

// Define a custom style for smaller item cards
const smallerItemCardStyle = {
  width: "200px", // Adjust the width as needed
  height: "300px", // Adjust the height as needed
};

function ItemShowcase() {
  return (
    <div className="min-h-screen bg-yellow-300">
      
      <h1 className="text-3xl font-bold">Item Showcase</h1>
      <h2 className="text-xl">Explore our products</h2>

      {/* Render your Itemcard components with smallerItemCardStyle */}
      <div className="container mx-auto py-8 flex flex-wrap justify-center space-x-4 space-y-6 bg-white mb-8">
        <div style={smallerItemCardStyle} className="mr-4 mb-2">
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
      {/* Render your Itemcard components with smallerItemCardStyle */}
      <div className="container mx-auto py-8 flex flex-wrap justify-center space-x-4 space-y-6 bg-white mb-7">
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
      {/* Render your Itemcard components with smallerItemCardStyle */}
      <div
       style={{ marginBottom: "20px" }} // Adjust the margin-bottom as needed
       className="container mx-auto py-8 flex flex-wrap justify-center space-x-4 space-y-6 bg-white mb-7">
        <div style={smallerItemCardStyle} className="mr-4 mb-2">
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
      <div className=" bg-yellow-300 text-yellow-300">
          kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
      </div>
    </div>
  );
}

export default ItemShowcase;