import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import "../App.css";
import Signup from "./signup.jsx";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </Router>
  );
}
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
    console.log("Login Data:", loginData); // Log login data for debugging

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        loginData
      );
      console.log("Response:", response.data); // Log response for debugging

      if (response.data.success) {
        // Check if the response indicates success
        alert("Login successful");
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user data in local storage
        navigate("/F1");
      } else {
        alert(response.data.message || "Login failed. Please try again."); // Handle unsuccessful login
      }
    } catch (err) {
      console.error(
        "Error during login:",
        err.response ? err.response.data : err
      ); // Log error for debugging
      alert("Login failed. Please try again."); // Alert the user on error
    }
  };

  return (
    <>
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
            <br />
            <hr />
            <Link to="/signup">Create Account</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
