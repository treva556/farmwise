

// show products
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductPage() {
  const [products, setProducts] = useState(null);
  const { categorySlug, subcategorySlug, groupSlug } = useParams();
  const baseURL = 'http://localhost:3000';


  useEffect(() => {
    fetch(`http://localhost:3000/categories/${categorySlug}/subcategories/${subcategorySlug}/groups/${groupSlug}/products.json`)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        if (data && data.length > 0) {
          setProducts(data); // Update state with all products
        }
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [categorySlug, subcategorySlug, groupSlug]);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-green-600 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-white mb-8">Products</h1>
      {products.map(product => (
        <div key={product.id} className="w-full max-w-3xl bg-yellow-300 p-8 rounded-lg shadow-lg mb-4">
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          <h1 className="text-2xl font-semibold mb-4">{product.location}</h1>
          <h1 className="text-2xl font-semibold mb-4">{product.price}</h1>

          {/* Other product details */}
          <Link to={`/categories/${categorySlug}/subcategories/${subcategorySlug}/groups/${groupSlug}/products/${product.id}`}>View Details</Link>

        </div>
      ))}

    </div>
  );
}

export default ProductPage;

