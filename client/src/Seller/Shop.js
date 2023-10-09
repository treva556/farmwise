import React from "react";
// import ProductList from "./ProductList";
// import ProductForm from "./ProductForm";
// import LogoutButton from "./LogoutButton";

const UserDashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      {/* Render user-specific content and actions */}
      {/* <ProductList products={user.products} />
      <ProductForm />
      <LogoutButton /> */}
    </div>
  );
};

export default UserDashboard;