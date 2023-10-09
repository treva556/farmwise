import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { categorySlug, subcategorySlug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${categorySlug}/subcategories/${subcategorySlug}/products.json`)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        if (data && data.length > 0) {
          setProduct(data[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [categorySlug, subcategorySlug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-green-600 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-white mb-8">Products</h1>
      <div className="w-full max-w-3xl bg-yellow-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-green-600 font-semibold">Price: ${product.price}</p>
        {/* Render other product details */}
      </div>
    </div>
  );
}

export default ProductPage;