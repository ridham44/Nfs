import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        loginData
      );

      if (response.data.success) {
        alert("Login successful");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/F1");
      } else {
        alert(response.data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-background">
        <div className="form-container">
          <h2 className="title_head">Login</h2>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Login
            </button>
            <hr />
            <Link to="/signup">Create Account</Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
