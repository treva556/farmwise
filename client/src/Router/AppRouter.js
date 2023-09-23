import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Homepage';
import Searchpage from '../pages/Searchpage';
// import Sellerform from '../pages/Sellerform';
import LoginPage from '../pages/Loginpage';
import Sellerform from '../pages/Sellerform';


function AppRouter() {
  return (
   
<BrowserRouter>
<div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/form" element={<Sellerform/>} />
    <Route path="/search" element={<Searchpage/>} />


 
    {/* admin routes  
    <Route path="admin/products" element={<AdminProducts />} />
    <Route path="admin/services" element={<AdminServices />} />
    <Route path="admin/orders" element={<AdminOrders />} />
  <Route path="admin/home" element={<AdminHome />} />  */}
  </Routes>
</div>
</BrowserRouter>


   
  
  );
}

export default AppRouter;