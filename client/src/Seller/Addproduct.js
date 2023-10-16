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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // Send productData to the backend API, including images

    // Reset form fields after submission if needed
    setProductData({
      productName: "",
      category: "",
      subcategory: "",
      group: "",
      description: "",
      price: "",
      location: "",
      images: [],
    });
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
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