

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Allusers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
<div className=" flex">
    <div>
      <Sidebar/>

    </div>
    <div className="bg-green-600 p-8">
     
      <h1 className="text-3xl font-semibold text-white mb-8">All Users</h1>
      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-yellow-300 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-700 mb-2">Location: {user.location}</p>
              <p className="text-gray-700 mb-2">Email: {user.email}</p>
              <p className="text-gray-700">Phone Number: {user.phone_number}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No users found.</p>
      )}
    </div>
    </div>
  );
}

export default Allusers;