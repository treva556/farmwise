
import React from 'react';

const TopShowcase = () => {
  // Define your top categories data here
  const topCategories = [
    { name: 'Electronics', image: '/electronics.jpg' },
    { name: 'Clothing', image: '/clothing.jpg' },
    { name: 'Home & Kitchen', image: '/home.jpg' },
    // Add more categories as needed
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topCategories.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopShowcase;
  