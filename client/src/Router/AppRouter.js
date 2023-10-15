

import React, { useState } from 'react';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Homepage';
import Searchpage from '../pages/Searchpage';
import Adminprofile from '../Admin/Adminprofile';
import Form from '../Seller/reg2';
import About from '../components/Aboutus';
// import Layout from '../Admin/Layout';
import SubcategoryPage from '../pages/SubcategoryPage';
// import CategoryPage from '../pages/CategoryPage';
// import ProductPage from '../pages/ProductPage';
import TermsandCond from '../Seller/T&C';

import Shops from '../Admin/Shops';
import Pendingshops from '../Admin/Pendingshops';
import Addcategory from '../Admin/addcategory';
import Allusers from '../Admin/Userspage';
import UserDashboard from '../Seller/Shop';
import LoginShop from '../Seller/Login';
// import createProduct from '../Seller/Productform';
import Groups from '../pages/Groups';
// import { formToJSON } from 'axios';

function AppRouter() {
  // const { user, setUser } = useAuth(); // Use the custom hook to get user data

 



  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellershop" element={<UserDashboard/>} />

        <Route path="/login" element={<LoginShop />} /> 
        <Route path="/search" element={<Searchpage />} />
        <Route path="/admin" element={<Adminprofile />} />
        <Route path="/about" element={<About/>} />
        
        <Route path="/form" element={<Form/>} />
        <Route path="/create" element={<createProduct/>} />
        <Route path="/terms" element={<TermsandCond/>} />


        <Route path="/admin/pending" element={<Pendingshops/>} />
         <Route path="/admin/shops" element={<Shops/>} /> 
         <Route path="/admin/add" element={<Addcategory/>} /> 


        {/* Subcategory and Product routes */}
         <Route path="/categories/:categorySlug/subcategories/:subcategorySlug/groups" element={<Groups/>} />
         <Route path="/categories/:categorySlug/subcategories" element={<SubcategoryPage/>} /> 


        {/* <Route path="/categories/:categoryId" element={<CategoryPage />} /> */}
        <Route path="/admin/users" element={<Allusers/>} /> 


      </Routes>
       
    </BrowserRouter>
    </UserProvider>
  );
}

export default AppRouter;









//  marktreva11@example.com
//  Trevamark113_



//  marktreva12@example.com
//  youyou78