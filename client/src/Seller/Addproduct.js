

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const navigate = useNavigate(); // Call useNavigate hook here to get the navigate function

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
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch categories and populate the initial category dropdown
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchSubcategories = async (selectedCategory) => {
    try {
      const response = await fetch(`http://localhost:3000/categories/${selectedCategory}/subcategories`);
      const data = await response.json();
      setSubcategories(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const fetchGroups = async (selectedCategory, selectedSubcategory) => {
    try {
      const response = await fetch(`http://localhost:3000/categories/${selectedCategory}/subcategories/${selectedSubcategory}/groups`);
      const data = await response.json();
      setGroups(data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };
////////////////////////////////////////////////////////////

  // Event handlers for dropdown changes
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setProductData({ ...productData, category: selectedCategory, subcategory: "", group: "" });
    fetchSubcategories(selectedCategory);
  };

  const handleSubcategoryChange = (e) => {
    const selectedSubcategory = e.target.value;
    setProductData({ ...productData, subcategory: selectedSubcategory, group: "" });
    fetchGroups(productData.category, selectedSubcategory);
  };

  const handleGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setProductData({ ...productData, group: selectedGroup });
  };
  



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageFiles = [];
    for (let i = 0; i < files.length; i++) {
      imageFiles.push(files[i]);
    }
    setProductData({ ...productData, images: imageFiles });
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

      const response = await fetch("http://localhost:3000/categories/farm-produce/subcategories/fertilizers/groups/organic-fertilizers/products ", {
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

//// navigate
        navigate("/sellershop"); // Redirect to the Dashboard after adding a product

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
        <input
          type="text"
          name="productLoc"
          placeholder="Product location"
          value={productData.productData.location}
          onChange={handleInputChange}
          required
        />
        {/* Add dropdowns for category, subcategory, and group */}
        <select
          name="category"
          value={productData.category}
          onChange={handleCategoryChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select
          name="subcategory"
          value={productData.subcategory}
          onChange={handleSubcategoryChange}
          required
        >
          <option value="">Select Subcategory</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>
              {subcategory.name}
            </option>
          ))}
        </select>
        <select
  name="group"
  value={productData.group}
  onChange={handleGroupChange} // Use handleGroupChange for the group dropdown
  required
>
  <option value="">Select Group</option>
  {groups.map((group) => (
    <option key={group.id} value={group.id}>
      {group.name}
    </option>
  ))}
</select>
        <input
          type="file"
          name="images"
          accept="image/*"
          onChange={handleImageChange}  // Make sure you pass the function reference here
          multiple
          required
        />
        {/* Rest of your form */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;









//http://localhost:3000/categories/farm-produce/subcategories/fertilizers/groups/organic-fertilizers/products