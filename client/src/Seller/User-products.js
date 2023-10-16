import React, { useState, useEffect } from "react";

const UserProducts = ({ userId }) => {
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch(`/users/${userId}/products`);
        if (response.ok) {
          const data = await response.json();
          setUserProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching user products:", error);
      }
    };

    fetchUserProducts();
  }, [userId]);

  return (
    <div className="product-list">
      {userProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default UserProducts;



