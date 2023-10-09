


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pic1 from "../images/pic1.png";

function Bodyy() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <>
      {/* Other components */}
      
      <div className="mt-8 bg-yellow-200">
        <h1 className="text-xl underline">Categories</h1>
        <div className="flex flex-wrap justify-around mt-8">
          {categories.map((category) => (
            <Link
              to={`/categories/${category.slug}/subcategories`}
              key={category.id}
              className="w-64 h-80 p-4 m-2 bg-yellow-200 rounded-lg shadow-md text-center hover:border-green-500 transition duration-300"
            >
              <img
                src={pic1}
                alt={category.name}
                className="mx-auto h-32 w-32 object-contain mb-4"
              />
              <h2 className="font-bold text-xl">{category.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bodyy;