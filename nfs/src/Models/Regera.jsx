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
import Regera1 from "../img/Koenigsegg-regra2.jpg";
import Regera2 from "../img/Koenigsegg-regra3.jpg";
import Regera3 from "../img/Koenigsegg-regra4.jpg";
import Regera4 from "../img/Koenigsegg-regra5.webp";
import Ghost_logo from "../img/Ghost logo.webp";
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
const Regera = () => {
  const date = getCurrentDate();
  return (
    <>
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
                      src={Regera1}
                      className="d-block w-100"
                      alt="First slide"
                      style={{ height: "450px", width: "200px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Regera2}
                      className="d-block w-100"
                      alt="Second slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Regera3}
                      className="d-block w-100"
                      alt="Third slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Regera4}
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
                <h1>Koenigsegg Regera:-</h1>
              </u>
              <h2>Specifications</h2>
              <ul>
                <li>
                  <strong>Engine:</strong> 5.0-liter twin-turbo V8 with electric
                  motors <span>&#128267;</span>
                </li>
                <li>
                  <strong>Power Output:</strong> Up to 1500 horsepower{" "}
                  <span>&#9889;</span>
                </li>
                <li>
                  <strong>Top Speed:</strong> Estimated over 250 mph (402 km/h){" "}
                  <span>&#127937;</span>
                </li>
                <li>
                  <strong>Acceleration:</strong> 0-60 mph in under 2.8 seconds{" "}
                  <span>&#128640;</span>
                </li>
                <li>
                  <strong>Transmission:</strong> Direct Drive{" "}
                  <span>&#128260;</span>
                </li>
              </ul>
              <br />
              <div className="rlogo">
                <img src={Ghost_logo} height="200px" width="200px" />
              </div>
            </div>
          </div>
          <div className="container">
            <h2>Features</h2>
            <ul className="custom-list">
              <li>Direct Drive transmission for seamless power delivery</li>
              <li>Hybrid powertrain with three electric motors</li>
              <li>Active aerodynamics for optimal performance</li>
              <li>Carbon-fiber monocoque and body</li>
              <li>Luxurious interior with advanced infotainment system</li>
            </ul>
            <h2>Overview</h2>
            <p>
              The Koenigsegg Regera is a hybrid hypercar that redefines
              performance and luxury. Combining a powerful twin-turbo V8 engine
              with three electric motors, the Regera delivers an astonishing
              1,500 horsepower, making it one of the most powerful production
              cars ever built.
            </p>
            <p>
              With its innovative Direct Drive transmission, the Regera offers a
              seamless and exhilarating driving experience. The car's design is
              both functional and beautiful, with active aerodynamics and a
              carbon-fiber body that contribute to its incredible performance.
            </p>
            <p>
              The Koenigsegg Regera is a limited production, plug-in hybrid
              grand touring sports car manufactured by Swedish automotive
              manufacturer Koenigsegg. It was unveiled at the March 2015 Geneva
              Motor Show. The name Regera is a Swedish verb, meaning "to reign"
              or "to rule". Koenigsegg produced 85 Regeras, most of which were
              sold upon unveiling.
            </p>
            <p>
              The Regera was developed and designed to be a more practical,
              luxurious, grand touring alternative to the rest of Koenigsegg's
              lightweight sports car lineup. Consequently it is focused on the
              smooth and instant delivery of power provided by its overhauled
              powertrain, rather than on-track performance.
            </p>
            <p>
              Koenigsegg founder Christian von Koenigsegg purchased a Tesla
              Model S P85+ in 2013 and was impressed by the car's ability to
              instantly deliver power without the need for a downshift or to
              wait for turbo lag. He was especially impressed with the direct
              and intuitive experience provided by an electric car like the
              Tesla, remarking that the instantaneous response of the motors was
              something even a Formula One car could not attain with a
              traditional internal combustion engine.
            </p>
            <p>
              Von Koenigsegg sought to combine this desirable aspect of electric
              powertrains with the traditional Koenigsegg experience of a
              lightweight, powerful sports car.
            </p>
            <h2>Price and Availability</h2>
            <p>
              The Koenigsegg Regera is a limited-production hypercar, with only
              80 units produced. Priced at around $2 million, the Regera is a
              masterpiece of engineering and design, offering a unique blend of
              power, luxury, and innovation.
            </p>
            <h2>Conclusion</h2>
            <p>
              The Koenigsegg Regera represents the pinnacle of automotive
              technology and performance. Its blend of hybrid power, advanced
              aerodynamics, and luxurious interior make it a truly unique
              hypercar that stands out in the world of high-performance
              vehicles.
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

export default Regera;
