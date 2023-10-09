

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginShop = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate(); // Get the history object from React Router

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user); // Update user state
        localStorage.setItem("token", data.token); // Store token in localStorage
        history.push("/sellershop"); // Redirect to the user dashboard route after successful login
      } else {
        console.error("Login error:", response.status);
        // Handle login error (show error message, etc.)
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (show error message, etc.)
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginShop;






