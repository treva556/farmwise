
import React from "react";
import Sidebar from "./Sidebar";
import Pendingshops from "./Pendingshops";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shops from "./Shops";

function Adminprofile() {
  return (
    <div className="flex">
      
     
      <Sidebar />
     
    </div>
  );
}

export default Adminprofile;