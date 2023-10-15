


import React from "react";

const Dashboard = () => {
  const userDataString = localStorage.getItem("user");

  if (!userDataString) {
    return <div>User data not found...</div>;
  }

  try {
    const userData = JSON.parse(userDataString);
    const { name, email } = userData;

    return (
      <div className=" bg-green-800">
        <h1>Welcome {name}</h1>
        <p className=" text-yellow-300">Email: {email}</p>
        <button className=" bg-white"> Add Product</button>
        {/* Render user-specific content and actions */}
        {/* Add buttons to delete account, add products, etc. */}
      </div>
    );
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return <div>Error loading user data...</div>;
  }
};


export default Dashboard;












// marktreva12@example.com
//  youyou78






