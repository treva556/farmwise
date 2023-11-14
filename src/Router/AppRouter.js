




import React, { useState } from 'react';


import { BrowserRouter, Route, Routes } from "react-router-dom";

// // //users routes
import Home from '../pages/Homepage';
import Searchpage from '../pages/Searchpage';
import About from '../components/Aboutus';
import SubcategoryPage from '../pages/SubcategoryPage';
// import CategoryPage from '../pages/CategoryPage';
// import ProductPage from '../pages/ProductPage';
import Groups from '../pages/Groups';


// user page
import AddProduct from '../Seller/Addproduct';
import UserDashboard from '../Seller/Shop';
import LoginShop from '../Seller/Login';
// import createProduct from '../Seller/Productform';
import Form from '../Seller/reg2';
import TermsandCond from '../Seller/T&C';



// admin routes
import Adminprofile from '../Admin/Adminprofile';
// import Shops from '../Admin/Shops';
import Pendingshops from '../Admin/Pendingshops';
import Allusers from '../Admin/Userspage';
import Category from '../Admin/AddCategories';




function AppRouter() {
  // const { user, setUser } = useAuth(); // Use the custom hook to get user data

 



  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellershop" element={<UserDashboard/>} />

        <Route path="/login" element={<LoginShop />} /> 
        <Route path="/search" element={<Searchpage />} />


        <Route path="/admin" element={<Adminprofile />} />
        <Route path="/admin/shops" element={<Allusers/>} /> 


        <Route path="/about" element={<About/>} />
        
        <Route path="/form" element={<Form/>} />
        {/* <Route path="/create" element={<createProduct/>} /> */}
        <Route path="/terms" element={<TermsandCond/>} />
 
        <Route path="/addproduct" element={<AddProduct/>} />

        <Route path="/admin/pending" element={<Pendingshops/>} />
         {/* <Route path="/admin/shops" element={<Shops/>} />  */}
        <Route path="/admin/category" element={<Category/>} />

        {/* Subcategory and Product routes */}
         <Route path="/categories/:categorySlug/subcategories/:subcategorySlug/groups" element={<Groups/>} />
         <Route path="/categories/:categorySlug/subcategories" element={<SubcategoryPage/>} /> 


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