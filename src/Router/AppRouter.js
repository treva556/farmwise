



// Parent
import React, { useState } from 'react';


import { BrowserRouter, Route, Routes } from "react-router-dom";

// // //users routes
import Home from '../pages/Homepage';
// import Searchpage from '../pages/Searchpage';
import About from '../components/Aboutus';
import SubcategoryPage from '../pages/SubcategoryPage';
// import CategoryPage from '../pages/CategoryPage';
import ProductPage from '../pages/ProductPage';
import Groups from '../pages/Groups';


// user page
import AddProduct from '../Seller/Addproduct';
import UserDashboard from '../Seller/Shop';
import LoginShop from '../Seller/Login';
// import createProduct from '../Seller/Productform';
import Form from '../Seller/reg2';
import TermsandCond from '../Seller/T&C';
import ProductDetailPage from '../pages/ProductDetailsPage';


// admin routes
import Adminprofile from '../Admin/Adminprofile';
// import Shops from '../Admin/Shops';
import Pendingshops from '../Admin/Pendingshops';
import Allusers from '../Admin/Userspage';
import Category from '../Admin/AddCategories';
import AddSubcategory from '../Admin/add subcategory';
import AddGroup from '../Admin/Add-group';
import AllCategories from '../Admin/Category';


function AppRouter() {
  // const { user, setUser } = useAuth(); // Use the custom hook to get user data
  const [selectedSlug] = useState(''); // Assuming you set this value somehow
  // , setSelectedSlug
 

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellershop" element={<UserDashboard/>} />

        <Route path="/login" element={<LoginShop />} /> 
        {/* <Route path="/search" element={<Searchpage />} /> */}
        <Route path="/form" element={<Form/>} />
        <Route path="/addproduct" element={<AddProduct/>} />

{/*admin}*/}
        <Route path="/admin" element={<Adminprofile />} />
        <Route path="/admin/shops" element={<Allusers/>} /> 
        <Route path="/admin/pending" element={<Pendingshops/>} />
        <Route path="/admin/addcategory" element={<Category/>} />
        <Route path="/admin/addsub" element={<AddSubcategory selectedSlug={selectedSlug} />} />
       <Route path="/admin/addgroup" element={<AddGroup/>} />
        <Route path="/admin/all" element={<AllCategories/>} />





        <Route path="/about" element={<About/>} />
        {/* <Route path="/create" element={<createProduct/>} /> */}
        <Route path="/terms" element={<TermsandCond/>} />
 
      
        {/* Subcategory and Product routes */}
         <Route path="/categories/:categorySlug/subcategories/:subcategorySlug/groups" element={<Groups/>} />
         <Route path="/categories/:categorySlug/subcategories" element={<SubcategoryPage/>} /> 
         <Route path="/categories/:categorySlug/subcategories/:subcategorySlug/groups/:groupSlug/products"
  element={<ProductPage />}
/>
<Route
  path="/categories/:categorySlug/subcategories/:subcategorySlug/groups/:groupSlug/products/:productId"
  element={<ProductDetailPage />}
/>
        {/* <Route path="/categories/:categoryId" element={<CategoryPage />} /> */}


      </Routes>
       
    </BrowserRouter>
  );
}

export default AppRouter;









//  marktreva11@example.com
//  Trevamark113_



//  marktreva12@example.com
//  youyou78