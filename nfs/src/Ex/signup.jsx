import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    sex: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        signupData
      );
      alert(response.data.message);
      navigate("/login");
    } catch (err) {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-background">
        <div className="form-container">
          <h2 className="title_head">Signup</h2>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signupData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="sex"
              placeholder="Sex"
              value={signupData.sex}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Signup
            </button>
            <hr />
            <Link to="/login">Login</Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
