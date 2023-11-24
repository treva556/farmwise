

// Product details
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { categorySlug, subcategorySlug, groupSlug } = useParams();

  useEffect(() => {
    fetch(`https://farmerr-dgb1.onrender.com/categories/${categorySlug}/subcategories/${subcategorySlug}/groups/${groupSlug}/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
    }, [categorySlug, subcategorySlug, groupSlug, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Display all images */}
      {product.image_urls && product.image_urls.length > 0 && (
        <div>
          {product.image_urls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} />
          ))}
        </div>
      )}
      {/* Other product details */}
    </div>
  );
}

export default ProductDetailPage;


//http://localhost:3000/categories/animal-produce-input/subcategories/aqua/groups/juy/products/2.json