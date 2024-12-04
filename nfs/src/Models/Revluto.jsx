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
import AboutUs from "../Ex/AboutUs.jsx";
import PrivatePolicy from "../Ex/PrivatePolicy.jsx";
import Revluto1 from "../img/revulto1.webp";
import Revluto2 from "../img/revulto2.webp";
import Revluto3 from "../img/revulto3.webp";
import Revluto4 from "../img/revulto4.webp";
import St_logo from "../img/St logo.jpg";
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
          <Route path="/AboutUs" element={<AboutUs />} exact />
          <Route path="/PrivatePolicy" element={<PrivatePolicy />} exact />
        </Routes>
      </main>
    </Router>
  );
}

const Revluto = () => {
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
                  style={{ width: "75px" }}
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
      {/* ------------------- Info ------------------- */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-sm-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={Revluto1}
                      className="d-block w-100"
                      alt="First slide"
                      style={{ height: "450px", width: "200px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Revluto2}
                      className="d-block w-100"
                      alt="Second slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Revluto3}
                      className="d-block w-100"
                      alt="Third slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Revluto4}
                      className="d-block w-100"
                      alt="Fourth slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12">
              <u>
                <h1>Lamborghini Revluto:</h1>
              </u>
              <h2>Specifications</h2>
              <ul>
                <li>
                  <strong>Engine:</strong> 6.5-liter V12 hybrid{" "}
                  <span>&#128267;</span>
                </li>
                <li>
                  <strong>Power Output:</strong> 1,015 horsepower{" "}
                  <span>&#9889;</span>
                </li>
                <li>
                  <strong>Top Speed:</strong> Over 217 mph (350 km/h){" "}
                  <span>&#127937;</span>
                </li>
                <li>
                  <strong>Acceleration:</strong> 0-100 km/h in 2.5 seconds{" "}
                  <span>&#128640;</span>
                </li>
                <li>
                  <strong>Transmission:</strong> 8-speed dual-clutch automated
                  manual <span>&#128260;</span>
                </li>
                <li>
                  <strong>Electric Range:</strong> 10 km (6.2 mi){" "}
                  <span>&#128268;</span>
                </li>
              </ul>
              <br />
              <div className="rlogo">
                <img src={St_logo} height="200px" width="400px" alt="Logo" />
              </div>
            </div>
          </div>
          <div className="container">
            <h2>Features</h2>
            <ul className="custom-list">
              <li>Y-shaped LED lights with ALA system</li>
              <li>Active aero spoiler for increased downforce</li>
              <li>Carbon-fiber monocoque chassis for lightweight</li>
              <li>Hybrid driving mode for urban usage</li>
              <li>Redesigned instrument cluster with hybrid indicators</li>
            </ul>
            <h2>Overview</h2>
            <p>
              The Lamborghini Revuelto is a mid-engine plug-in hybrid sports car
              introduced as the successor to the Aventador. Named after a
              Spanish fighting bull, it was unveiled in March 2023 and entered
              full production in July of the same year.
            </p>
            <p>
              Design: The Revuelto features a striking exterior design with
              Y-shaped LED lights and an active aero spoiler. Its interior
              offers increased space and a new hybrid driving mode for urban
              usage, enhancing comfort and convenience.
            </p>
            <p>
              Powertrain: With a 6.5-liter V12 engine and three electric motors,
              the Revuelto delivers a combined power output of 1,015 horsepower,
              propelling it from 0 to 100 km/h in just 2.5 seconds.
            </p>
            <p>
              Body: Constructed with a carbon-fiber monocoque chassis, the
              Revuelto is 10% lighter than its predecessor, the Aventador,
              offering improved agility and performance.
            </p>
            <p>
              Limited Production: The Revuelto is produced in limited numbers,
              with the first units delivered in late 2023. Each car is
              meticulously crafted to meet the highest standards of performance
              and luxury.
            </p>
            <p>
              In conclusion, the Lamborghini Revuelto represents the pinnacle of
              automotive engineering and design, combining cutting-edge
              technology with breathtaking performance and unmatched luxury.
            </p>
            <h2>Price and Availability</h2>
            <p>
              The Lamborghini Revuelto is available at a starting price of
              [Insert Price Here]. Deliveries began in late 2023, with
              production limited to a select number of units.
            </p>
            <h2>Conclusion</h2>
            <p>
              The Lamborghini Revuelto sets a new standard for performance and
              innovation in the world of supercars. With its powerful hybrid
              powertrain, advanced aerodynamics, and luxurious interior, it
              embodies the spirit of Lamborghini's commitment to excellence and
              passion for automotive excellence.
            </p>
          </div>
        </div>
      </section>
      {/*--------------------     Footer section    --------------------- */}
      <footer className="footer">
        <div className="footer__container">
          {/* First Column */}
          <div className="footer__content">
            <a href="#" className="footer__logo">
              NFS
            </a>
            <p className="footer__description">
              Dive into a compact hub of automotive wisdom with our website.
              From engine intricacies to model comparisons, we're your passport
              to informed car choices, packed into every byte.
            </p>
          </div>
          {/* Contact Info Modal */}
          <div className="footer__content">
            <p className="footer__logo">Contact us:</p>
            <p className="footer__description">
              Mobile No : +91 9123456789
              <br />
              Email : nfs@gmail.com
            </p>
          </div>
          {/* Second Column */}
          <div className="footer__content">
            <h3 className="footer__title">Company</h3>
            <div className="footer__links">
              <ul className="footer__links__list">
                <li>
                  <Link to="/PrivatePolicy" className="footer__link">
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUs" className="footer__link">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Column */}
          <div className="footer__content">
            <p className="footer__logo">Follow us:</p>
            <div className="social-icons">
              <br />
              <a
                href="https://www.instagram.com/nfs.44_/?img_index=1"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCtbN_9YUU1gckJH8Z3bvOxw"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer">
        <span className="footer__copy">
          Ridham Patel&#169;All rights reserved
          <br />
          {date}
        </span>
      </footer>
    </>
  );
};

export default Revluto;
