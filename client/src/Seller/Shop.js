


import React from "react";

const UserDashboard = ({ user }) => {
  console.log('User data:', user);

  if (!user) {
    // Handle the case when the user is not defined or not yet loaded
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {user.email}!</h1>
      {/* Render user-specific content and actions */}
      {/* <ProductList products={user.products} /> */}
      {/* <ProductForm />
      <LogoutButton /> */}
    </div>
  );
};

export default UserDashboard;

// marktreva12@example.com
//  youyou78






