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
import Chiron1 from "../img/chiron1.webp";
import Chiron2 from "../img/chiron2.webp";
import Chiron3 from "../img/chiron3.webp";
import Chiron4 from "../img/chiron4.webp";
import Bugatti_elephant from "../img/elephant logo.jpg";

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
const Chiron = () => {
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
                      src={Chiron1}
                      className="d-block w-100"
                      alt="First slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Chiron2}
                      className="d-block w-100"
                      alt="Second slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Chiron3}
                      className="d-block w-100"
                      alt="Third slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Chiron4}
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
                <h1>Bugatti Chiron:</h1>
              </u>
              <h2>Specifications</h2>
              <ul>
                <li>
                  <strong>Engine:</strong> 8.0-liter quad-turbocharged W16{" "}
                  <span role="img" aria-label="engine">
                    🔧
                  </span>
                </li>
                <li>
                  <strong>Power Output:</strong> 1500 horsepower{" "}
                  <span role="img" aria-label="power">
                    ⚡
                  </span>
                </li>
                <li>
                  <strong>Top Speed:</strong> Limited to 261 mph (420 km/h){" "}
                  <span role="img" aria-label="speed">
                    🏁
                  </span>
                </li>
                <li>
                  <strong>Acceleration:</strong> 0-60 mph in under 2.5 seconds{" "}
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                </li>
                <li>
                  <strong>Transmission:</strong> 7-speed dual-clutch automatic{" "}
                  <span role="img" aria-label="gear">
                    ⚙️
                  </span>
                </li>
                <li>
                  <strong>Weight:</strong> Approximately 1995 kg{" "}
                  <span role="img" aria-label="weight">
                    ⚖️
                  </span>
                </li>
              </ul>

              <br />

              <div className="rlogo">
                <img
                  src={Bugatti_elephant}
                  alt="Elephant Logo"
                  height="200px"
                  width="200px"
                />
              </div>
            </div>
          </div>

          <div className="container">
            <h2>Features</h2>
            <ul className="custom-list">
              <li>Aerodynamic design for maximum performance</li>
              <li>
                Carbon fiber body construction for lightweight and strength
              </li>
              <li>Advanced suspension system for superior handling</li>
              <li>Luxurious interior with premium materials and technology</li>
              <li>Customizable driving modes for various road conditions</li>
            </ul>

            <h2>Overview</h2>
            <p>
              The Bugatti Chiron is a hypercar developed by Bugatti Automobiles
              S.A.S. It represents the pinnacle of automotive engineering and
              performance, combining unparalleled speed with luxurious comfort.
            </p>
            <p>
              <strong>Design:</strong> The Bugatti Chiron features a sleek and
              aerodynamic design, with every curve and line meticulously crafted
              to optimize airflow and reduce drag. Its distinctive styling sets
              it apart as a true icon of automotive excellence.
            </p>
            <p>
              <strong>Interior:</strong> Inside the Bugatti Chiron, drivers are
              surrounded by opulence and sophistication. The cabin is adorned
              with the finest materials, including handcrafted leather and
              polished metal accents, creating an ambiance of luxury and
              refinement.
            </p>
            <p>
              <strong>Powertrain:</strong> At the heart of the Bugatti Chiron
              lies a ferocious 8.0-liter quad-turbocharged W16 engine,
              delivering an astonishing 1500 horsepower. This powerhouse is
              mated to a lightning-fast 7-speed dual-clutch automatic
              transmission, providing seamless shifts and relentless
              acceleration.
            </p>
            <p>
              <strong>Performance:</strong> With a top speed limited to 261 mph
              (420 km/h) and a 0-60 mph acceleration time of under 2.5 seconds,
              the Bugatti Chiron offers mind-bending performance and agility.
              Its advanced aerodynamics, adaptive suspension system, and
              cutting-edge technology ensure unparalleled handling and
              responsiveness.
            </p>
            <p>
              <strong>Limited Production:</strong> Production of the Bugatti
              Chiron is limited to a select number of units, each meticulously
              handcrafted and customized to the exact specifications of its
              owner. This exclusivity makes the Chiron a rare and coveted
              masterpiece in the world of hypercars.
            </p>
            <p>
              <strong>Ownership Experience:</strong> Owners of the Bugatti
              Chiron are granted access to a world of luxury and privilege,
              including exclusive events, personalized concierge services, and
              unparalleled support from Bugatti's dedicated team. The Chiron
              represents the ultimate expression of automotive artistry and
              craftsmanship.
            </p>

            <h2>Price and Availability</h2>
            <p>
              The Bugatti Chiron is priced at approximately $3 million USD, with
              availability limited to a select number of units. Delivery to
              customers is subject to production schedules and individual
              customization options.
            </p>

            <h2>Conclusion</h2>
            <p>
              The Bugatti Chiron represents the pinnacle of automotive
              engineering and luxury, offering an unparalleled driving
              experience that transcends the boundaries of ordinary hypercars.
              With its unrivaled performance, exquisite craftsmanship, and
              timeless elegance, the Chiron stands as a symbol of automotive
              excellence and a testament to the art of engineering.
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

export default Chiron;
