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
    const defaultImageUrl = '/path/to/default/image.png';

    if (imageData && imageData.image && imageData.image.url) {
      const imageUrl = `http://localhost:3000${imageData.image.url}`;
      console.log('Image URL:', imageUrl);
      return imageUrl;
    } else if (typeof imageData === 'string' && imageData !== 'null') {
      const imageUrl = `http://localhost:3000${imageData}`;
      console.log('Image URL:', imageUrl);
      return imageUrl;
    } else {
      console.log('Using default image URL:', defaultImageUrl);
      return defaultImageUrl;
    }
  };

  const handleDelete = (slug) => {
    fetch(`http://localhost:3000/categories/${slug}`, {
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
                {category.image && category.image.url ? (
                  <img src={`http://localhost:3000${category.image.url}`} alt={category.name} className="mx-auto h-32 w-32 object-contain mb-4" />
                ) : (
                  <div className="mx-auto h-32 w-32 bg-gray-300 mb-4"></div>
                )}
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