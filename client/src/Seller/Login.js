

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginShop = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    } catch (error) {
      console.log(error);
  
  };
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    // other user properties
  });


  useEffect(() => {
    const fetchData = async () => {
      // ... (same as before)
    };

    fetchData();
  }, []);

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