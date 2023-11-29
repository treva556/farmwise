


// Add product


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import LoginShop from "./Login"

const AddProduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
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
  const userId = JSON.parse(localStorage.getItem("user")).id;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await fetch("https://farmerr-dgb1.onrender.com/categories.json");
        const dataCategories = await responseCategories.json();
        setCategories(dataCategories);

        // You can fetch subcategories and groups here similarly...
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 


  //Fetch categories, subcategories, and groups whenever authenticityToken changes

  const fetchSubcategories = async (selectedSlug) => {
    try {
      const response = await fetch(`https://farmerr-dgb1.onrender.com/categories/${selectedSlug}/subcategories.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubcategories(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

/////
/////

  const fetchGroups = async (selectedCategorySlug, selectedSubcategorySlug) => {
    try {
      const response = await fetch(`https://farmerr-dgb1.onrender.com/categories/${selectedCategorySlug}/subcategories/${selectedSubcategorySlug}/groups.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGroups(data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

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
    const imageFiles = Array.from(files); // Convert FileList to Array
    setProductData({ ...productData, images: imageFiles });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (productData.images.length === 0) {
      console.error("No images selected");
      return; // Stop the submission if no images are selected
    }
  
    if (productData.category !== "" && productData.subcategory !== "" && productData.group !== "") {
      const formData = new FormData();
      formData.append("product[name]", productData.name);
      formData.append("product[price]", parseInt(productData.price));
      formData.append("product[description]", productData.description);
      formData.append("product[location]", productData.location);
      formData.append("product[category_id]", productData.category);
      formData.append("product[subcategory_id]", productData.subcategory);
      formData.append("product[group_id]", productData.group);
      formData.append("product[user_id]", userId);

      
      for (let i = 0; i < productData.images.length; i++) {
        formData.append("product[images][]", productData.images[i]);
      }
  
      try {
        const response = await fetch(`https://farmerr-dgb1.onrender.com/categories/${productData.category}/subcategories/${productData.subcategory}/groups/${productData.group}/products`, {
          method: "POST",
          body: formData,
        });
  
        console.log("Response Status:", response.status);
  
        if (response.ok) {
          const data = await response.json();
          console.log("Server Response:", data);
          navigate("/sellershop");
        } else {
          console.error("Add Product error:", response.status);
        }
      } catch (error) {
        console.error("Add Product error:", error);
      }
    } else {
      console.error("Invalid category, subcategory, or group selection");
    }
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Add other input fields for category, subcategory, group, etc. */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleInputChange}
          required
        />
     <input
        type="text"
        name="location"
        placeholder="Product location"
        value={productData.location}  // Change productData.productData.location to productData.location
        onChange={handleInputChange}
        required
      />
        <input
        type="text"
        name="description"
        placeholder="desc"
        value={productData.description}  // Change productData.productData.location to productData.location
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
            <option key={category.slug} value={category.slug}>
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
            <option key={subcategory.slug} value={subcategory.slug}>
              {subcategory.name}
            </option>
          ))}
        </select>
        <select
          name="group"
          value={productData.group}
          onChange={handleGroupChange}
          required
        >
          <option value="">Select Group</option>
          {groups.map((group) => (
            <option key={group.slug} value={group.slug}>
              {group.name}
            </option>
          ))}
        </select>
        <input
        type="number"
        name="price"
        placeholder="Price"
        value={productData.price}  // Change productData.productData.location to productData.location
        onChange={handleInputChange}
        required
      />
      
        {/* Rest of your form */}
      
        {/* Input fields and dropdowns */}
        {/* Add other input fields and dropdowns similarly */}
        <input type="file" name="images" accept="image/*" onChange={handleImageChange} multiple required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;



////hh


//http://localhost:3000/categories/farm-produce/subcategories/fertilizers/groups/npk/products/1

///