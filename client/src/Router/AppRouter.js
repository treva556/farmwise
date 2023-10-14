


import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Homepage';
import Searchpage from '../pages/Searchpage';
// import LoginPage from '../pages/Loginpage';
import Adminprofile from '../Admin/Adminprofile';
import Form from '../Seller/reg2';
// import Layout from '../Admin/Layout';
import SubcategoryPage from '../pages/SubcategoryPage';
// import CategoryPage from '../pages/CategoryPage';
// import ProductPage from '../pages/ProductPage';

import Shops from '../Admin/Shops';
import Pendingshops from '../Admin/Pendingshops';
import Addcategory from '../Admin/addcategory';
import Allusers from '../Admin/Userspage';
import UserDashboard from '../Seller/Shop';
// import LoginShop from '../Seller/Login';
// import createProduct from '../Seller/Productform';
import Groups from '../pages/Groups';


function AppRouter() {
  // const [user, setUser] = React.useState(null);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginShop setUser={setUser}/>} /> */}
        <Route path="/search" element={<Searchpage />} />
        <Route path="/admin" element={<Adminprofile />} />
        <Route path="/sellershop" element={<UserDashboard/>} />

        
        <Route path="/form" element={<Form/>} />
        <Route path="/create" element={<createProduct/>} />


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
  );
}

export default AppRouter;