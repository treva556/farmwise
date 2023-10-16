

import React, { useState } from "react";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    category: "",
    subcategory: "",
    group: "",
    description: "",
    price: "",
    location: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setProductData({ ...productData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("productName", productData.productName);
      formData.append("category", productData.category);
      formData.append("subcategory", productData.subcategory);
      formData.append("group", productData.group);
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      formData.append("location", productData.location);

      // Append each image file to the formData object
      for (let i = 0; i < productData.images.length; i++) {
        formData.append("images", productData.images[i]);
      }

      const response = await fetch("  http://localhost:3000/categories/farm-produce/subcategories/fertilizers/groups/organic-fertilizers/products ", {
        method: "POST",
        headers: {
          // Include your authorization token if needed
          // "Authorization": `Bearer ${YOUR_AUTH_TOKEN}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Server Response:", data); // Log the entire response to inspect the structure

        // Handle success logic here (redirect, show success message, etc.)
      } else {
        console.error("Add Product error:", response.status);
        // Handle error (show error message, etc.)
      }
    } catch (error) {
      console.error("Add Product error:", error);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Add other input fields for category, subcategory, group, etc. */}
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={productData.productName}
          onChange={handleInputChange}
          required
        />
        {/* Add dropdowns for category, subcategory, and group */}
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={productData.location}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          name="images"
          accept="image/*"
          onChange={handleImageChange}
          multiple
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;


//http://localhost:3000/categories/farm-produce/subcategories/fertilizers/groups/organic-fertilizers/products