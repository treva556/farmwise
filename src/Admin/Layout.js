// Layout.js
import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}

export default Layout;