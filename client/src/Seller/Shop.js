


import React from "react";

const Dashboard = () => {
  const userDataString = localStorage.getItem("user");

  if (!userDataString) {
    return <div>User data not found...</div>;
  }

  try {
    const userData = JSON.parse(userDataString);
    const { email } = userData;

    return (
      <div className="dashboard">
        <h1>Welcome</h1>
        <p>Email: {email}</p>
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






