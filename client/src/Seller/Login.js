


import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginShop = ({ setUser }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
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
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/sellershop");
      } else {
        console.error("Login error:", response.status);
        // Handle login error (show error message, etc.)
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (show error message, etc.)
    }
  };

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
          ref={emailRef}
          required
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginShop;