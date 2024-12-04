import React from "react";
import NFSlogo from "../img/NfsLogo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";
import getCurrentDate from "../js/Date";
import Home from "../NFS.jsx";
import Bugatti from "../company/Bugatti.jsx";
import Ferrari from "../company/Ferrari.jsx";
import Koenigsegg from "../company/Koenigsegg.jsx";
import Lamborghini from "../company/Lamborghini.jsx";
import RollsRoyce from "../company/RollsRoyce.jsx";
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Bugatti" element={<Bugatti />} exact />
          <Route path="/Ferrari" element={<Ferrari />} exact />
          <Route path="/Koenigsegg" element={<Koenigsegg />} exact />
          <Route path="/Lamborghini" element={<Lamborghini />} exact />
          <Route path="/RollsRoyce" element={<RollsRoyce />} exact />
        </Routes>
      </main>
    </Router>
  );
}
const AboutUs = () => {
  const date = getCurrentDate();
  return (
    <>
      {/*--------------------    NavBar   --------------------- */}
      <header id="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Logo */}
            <div className="navbar-brand">
              <Link to="/">
                <img
                  src={NFSlogo}
                  alt="NFS Logo"
                  style={{ width: "140px" }}
                  className="rounded-pill"
                />
              </Link>
            </div>

            {/* Website Title */}
            <div id="header_heading" className="text-white">
              <h3>NFS: Car Review and Information - Website</h3>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {/* Dropdown Menu */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Car Brands
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/Bugatti" className="dropdown-item">
                        Bugatti
                      </Link>
                    </li>
                    <li>
                      <Link to="/Ferrari" className="dropdown-item">
                        Ferrari
                      </Link>
                    </li>
                    <li>
                      <Link to="/Koenigsegg" className="dropdown-item">
                        Koenigsegg
                      </Link>
                    </li>
                    <li>
                      <Link to="/Lamborghini" className="dropdown-item">
                        Lamborghini
                      </Link>
                    </li>
                    <li>
                      <Link to="/RollsRoyce" className="dropdown-item">
                        Rolls Royce
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Other Navbar Links */}
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* -------------------- Main Section ------------------- */}
      <div class="aboutus__container">
        <h1 id="ln">About NFS Car Review and Information System</h1>
        <br />
        <p>
          Welcome to NFS Car Review and Information System, your ultimate
          destination for comprehensive car reviews and insightful automotive
          information. Founded and owned by Ridham Patel, our platform is
          dedicated to providing enthusiasts and car buyers with detailed
          insights into the world of automobiles.
        </p>
        <p>
          At NFS, we understand the significance of making informed decisions
          when it comes to purchasing a vehicle. With a passion for cars and a
          commitment to excellence, we strive to deliver accurate, unbiased, and
          up-to-date reviews on a wide range of vehicles, from sleek sedans to
          powerful SUVs and everything in between.
        </p>
        <p>
          Our team of expert reviewers and automotive enthusiasts meticulously
          test and analyze each vehicle, examining performance, safety features,
          technology, design, and much more. We believe that by offering
          comprehensive evaluations, we empower our audience to make educated
          choices that align with their preferences and lifestyle.
        </p>
        <p>
          Beyond reviews, NFS Car Review and Information System serves as a hub
          for all things automotive. Whether you're researching the latest
          trends in the industry, comparing different models, or seeking advice
          on maintenance and repairs, our platform is your go-to resource.
        </p>
        <p>
          Driven by a commitment to transparency and integrity, we prioritize
          the needs and interests of our audience above all else. We believe
          that every car purchase should be a rewarding and fulfilling
          experience, and we are here to guide you every step of the way.
        </p>
        <p>
          Thank you for choosing NFS Car Review and Information System as your
          trusted source for all things automotive. Join us on our journey as we
          explore the exciting world of cars together.
        </p>
        <p id="ln">
          <strong>
            Ridham Patel
            <br />
            Founder & Owner, NFS Car Review and Information System
          </strong>
          <br />
          <footer className="footer">
            <span className="footer__copy">
              Ridham Patel&#169;All rights reserved
              <br />
              {date}
            </span>
          </footer>
        </p>
      </div>
    </>
  );
};

export default AboutUs;
