


import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginShop = () => {
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
        console.log("Server Response:", data); // Log the entire response to inspect the structure

        // setUser(data.user);
 ////////////  yy  //////////////////////////////////////////////// 
 localStorage.setItem("user", JSON.stringify(data.user));
 localStorage.setItem("token", data.token);
 
 console.log("User data stored in localStorage:", data.user);

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
    <div className="bg-white text-white">
      <h2 className=" text-black">Login</h2>
      <form className="bg-green-800" onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            required
            style={{
              backgroundColor: "green",
              color: "green",
              marginBottom: "10px",
              padding: "5px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "5px",
            }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: "green", color: "white" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginShop;