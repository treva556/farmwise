
import React from "react";

const Dashboard = () => {
  // Retrieve user data from localStorage
  const userDataString = localStorage.getItem("user");

  // Check if user data is available in localStorage
  if (!userDataString) {
    // Handle the case when user data is not found in localStorage
    return <div>User data not found...</div>;
  }

  let userData;
  try {
    // Attempt to parse the user data string
    userData = JSON.parse(userDataString);
    console.log(userData);

    // Extract name and email from user data
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
    // Handle JSON parsing error
    console.error("Error parsing user data from localStorage:", error);
    return <div>Error loading user data...</div>;
  }
};

export default Dashboard;












// marktreva12@example.com
//  youyou78






