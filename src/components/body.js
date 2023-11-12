

//body

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Bodyy() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const getImageUrl = (imageData) => {
    if (imageData && imageData.image && imageData.image.url) {
      return `http://localhost:3000${imageData.image.url}`;
    } else if (typeof imageData === 'string' && imageData !== 'null') {
      return `http://localhost:3000${imageData}`;
    } else {
      return '/path/to/default/image.png';
    }
  };

  const handleDelete = (slug) => {
    fetch(`http://localhost:3000/categories/${slug}`, { // Updated endpoint with slug
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Category deleted:', data.message);
        // Optionally, update the state or re-fetch categories list after deletion
        setCategories(categories.filter(category => category.slug !== slug)); // Updated filter condition
      })
      .catch(error => {
        console.error('Error deleting category:', error);
      });
  };

  return (
    <>
      <div className="mt-8 bg-yellow-200">
        <h1 className="text-xl underline">Categories</h1>
        <div className="flex flex-wrap justify-around mt-8">
          {categories.map((category) => (
            <div key={category.id} className="w-64 h-80 p-4 m-2 bg-yellow-200 rounded-lg shadow-md text-center hover:border-green-500 transition duration-300">
              <Link to={`/categories/${category.slug}/subcategories`} className="block mb-4">
                <img src={getImageUrl(category.image)} alt={category.name} className="mx-auto h-32 w-32 object-contain mb-4" />
                <h2 className="font-bold text-xl">{category.name}</h2>
              </Link>
              {/* <button onClick={() => handleDelete(category.slug)}>Delete</button> Pass slug instead of id */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bodyy;


