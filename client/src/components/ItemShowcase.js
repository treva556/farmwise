import React from "react";
import Itemcard from "./Itemcard";

function ItemShowcase() {
  return (
    <div className="min-h-screen bg-yellow-300">
      <div>
        <ul className="flex items-center space-x-6 pl-4">
          <li>Collection</li>
          <li>Phones</li>
          <li>Shirts</li>
          <li>Shoes</li>
          <li>Glasses</li>
        </ul>
      </div>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Item Showcase</h1>
        <h2 className="text-xl">Explore our products</h2>

        {/* Render your Itemcard component here */}
        <Itemcard />
      </div>
    </div>
  );
}

export default ItemShowcase;
