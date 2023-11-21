

// Why is this code for fetching categories fetching and displaying the image okay but not the subcategory

//code

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Bodyy() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const getImageUrl = (category) => {
    const defaultImageUrl = "http://localhost:3000//path/to/default/image.png";
  
    if (category.image_url) {
      const imageUrl = `http://localhost:3000/${category.image_url}`;
      console.log('Image URL:', imageUrl); // Log the image URL
      return imageUrl;
    } else {
      console.log('Using default image URL:', defaultImageUrl); // Log the default image URL
      return defaultImageUrl;
    }
  };

  const handleDelete = (slug) => {
    fetch(`https://farmerr-dgb1.onrender.com//${slug}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Category deleted:', data.message);
        setCategories(categories.filter(category => category.slug !== slug));
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
      {category.image_url ? (
        <img src={getImageUrl(category)} alt={category.name} className="mx-auto h-32 w-32 object-contain mb-4" />
      ) : (
        <div className="mx-auto h-32 w-32 bg-gray-300 mb-4"></div>
      )}
      <h2 className="font-bold text-xl">{category.name}</h2>
    </Link>
    {/* <button onClick={() => handleDelete(category.slug)}>Delete</button> */}
  </div>
))}

        </div>
      </div>
    </>
  );
}
////
export default Bodyy;




// url example:Image URL: http://localhost:3000//rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--42b4e42d64bbf6ffc203474b68f49e1fbfd1cf61/Screenshot%20from%202023-10-27%2023-09-38.png


