
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useAuth } from "./AuthContext" // Import the useAuth hook

const LoginShop = () => {
  const { setUser } = useAuth(); // Access setUser from the context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/sellershop");
      } else {
        // Handle login error
        setError("Invalid email or password"); // Set an appropriate error message
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Error occurred while logging in"); // Set a generic error message for unexpected errors
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
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



