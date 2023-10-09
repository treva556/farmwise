



import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SubcategoryPage() {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categorySlug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${categorySlug}/subcategories.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSubcategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [categorySlug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (subcategories.length === 0) {
    return <div>No subcategories found.</div>;
  }

  return (

    <div className=" bg-green-600 h-screen">
      <h1>Subcategories</h1>
    <div className="flex flex-wrap justify-center">
      {subcategories.map((subcategory) => (
        <div key={subcategory.id} className="m-4 bg-yellow-300 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">{subcategory.name}</h1>
          <p className="text-gray-700 mb-2">{subcategory.description}</p>
          <Link
            to={`/categories/${categorySlug}/subcategories/${subcategory.slug}/products`}
            className="text-green-600 font-semibold hover:underline"
          >
            View Products
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SubcategoryPage;