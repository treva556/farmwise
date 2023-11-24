


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { categorySlug, subcategorySlug, groupSlug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${categorySlug}/subcategories/${subcategorySlug}/groups/${groupSlug}/products.json`)
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
  }, [categorySlug, subcategorySlug, groupSlug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-green-600 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-white mb-8">Products</h1>
      <div className="w-full max-w-3xl bg-yellow-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
        {/* Other product details */}
    {/* Display all images */}
{product.image_urls && product.image_urls.length > 0 && (
  <div>
    {product.image_urls.map((imageUrl, index) => (
      <img key={index} src={imageUrl} alt={`Image ${index}`} className="max-w-full mb-4" />
    ))}
  </div>
)}
      </div>
    </div>
  );
}

export default ProductPage;