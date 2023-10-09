

import React from "react";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-green-600 h-screen w-56 rounded-r-3xl overflow-hidden">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <Link to="/admin/shops" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400"><i className="bx bx-home"></i></span>
            <span className="text-sm font-medium">Shops</span>
          </Link>
        </li>
          
        <li>
        <Link to="/admin/pending" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-gray-800">

            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400"><i className="bx bx-message"></i></span>
            <span className="text-sm font-medium">Pending</span>
          </Link>
        </li>

      <li>
        <Link to="/admin/add" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-gray-800">

            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400"><i className="bx bx-message"></i></span>
            <span className="text-sm font-medium">Add</span>
          </Link>
        </li>
        <li>
        <Link to="/admin/users" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-gray-800">

            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400"><i className="bx bx-message"></i></span>
            <span className="text-sm font-medium">Users</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;