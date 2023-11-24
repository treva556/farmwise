


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Groups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categorySlug, subcategorySlug } = useParams();

  useEffect(() => {
    fetch(`https://farmerr-dgb1.onrender.com/categories/${categorySlug}/subcategories/${subcategorySlug}/groups.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data received

        setGroups(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [categorySlug, subcategorySlug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (groups.length === 0) {
    return <div>No groups found for this subcategory.</div>;
  }

  return (
    <div className="bg-green-600">
      <h1>Groups for Subcategory: {subcategorySlug}</h1>
      <div className="flex flex-wrap justify-center">
        {groups.map((group) => (
          <div key={group.id} className="m-11 bg-yellow-300 p-12 shadow-lg">
            {/* Wrap group details with Link component */}
            <Link to={`/categories/${categorySlug}/subcategories/${subcategorySlug}/groups/${group.slug}/products`}>
         <h1 className="text-2xl font-semibold mb-4">{group.name}</h1>
            </Link>
            {/* Display the image */}
            {group.image_url && (
              <img
                src={group.image_url}
                alt={group.name}
                className="w-20 h-11 object-cover" // Adjust size as needed
              />
            )}
            {/* Add more group details here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groups;