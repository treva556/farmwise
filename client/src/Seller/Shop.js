

import React from "react";

const UserDashboard = ({ user }) => {
  console.log('User data:', user);

  if (!user) {
    // Handle the case when the user object is not defined or not yet loaded
    return <div>Loading...</div>;
  }

  if (!user.email) {
    // Handle the case when the user email is not defined or falsy
    return <div>Email not found...</div>;
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






