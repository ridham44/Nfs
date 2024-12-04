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
import Agera1 from "../img/Agera1.webp";
import Agera2 from "../img/Agera2.webp";
import Agera3 from "../img/Agera3.jpg";
import Agera4 from "../img/Agera4.jpg";
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
const Agera = () => {
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
                      src={Agera1}
                      className="d-block w-100"
                      alt="First slide"
                      style={{ height: "450px", width: "200px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Agera2}
                      className="d-block w-100"
                      alt="Second slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Agera3}
                      className="d-block w-100"
                      alt="Third slide"
                      style={{ height: "450px", width: "100%" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Agera4}
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
                <h1>Koenigsegg Agera:-</h1>
              </u>
              <h2>Specifications</h2>
              <ul>
                <li>
                  <strong>Engine:</strong> 5.0-liter twin-turbo V8{" "}
                  <span role="img" aria-label="bolt">
                    🔧
                  </span>
                </li>
                <li>
                  <strong>Power Output:</strong> Up to 1160 horsepower{" "}
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>
                </li>
                <li>
                  <strong>Top Speed:</strong> Estimated over 273 mph (440 km/h){" "}
                  <span role="img" aria-label="flag">
                    🏁
                  </span>
                </li>
                <li>
                  <strong>Acceleration:</strong> 0-60 mph in under 2.8 seconds{" "}
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
              </ul>
              <br />
              <div className="rlogo">
                <img
                  src={Ghost_logo}
                  alt="Ghost logo"
                  height="200px"
                  width="200px"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <h2>Features</h2>
            <ul className="custom-list">
              <li>Active aerodynamics and suspension systems</li>
              <li>Carbon fiber monocoque and lightweight body</li>
              <li>Advanced traction and stability control</li>
              <li>Customizable interior with premium materials</li>
              <li>Track-oriented performance capabilities</li>
            </ul>
            <h2>Overview</h2>
            <p>
              The Koenigsegg Agera is a high-performance hypercar that set new
              benchmarks in speed and engineering excellence. Powered by a
              twin-turbo V8 engine, the Agera delivers an astonishing 1,160
              horsepower, allowing it to reach a top speed of 273 mph, making it
              one of the fastest production cars ever built.
            </p>
            <p>
              Designed for both track and road, the Agera features cutting-edge
              aerodynamics and advanced technology, ensuring unparalleled
              performance and driving experience. Its carbon fiber body and
              monocoque construction provide strength and lightweight agility.
            </p>
            <p>
              The Koenigsegg Agera is a mid-engine sports car produced by
              Swedish car manufacturer Koenigsegg. It is a successor to the
              CCX/CCXR. The name comes from the Swedish verb 'agera' which means
              "to act" or in imperative form "(You) act!".
            </p>
            <p>
              It was named Hypercar of the Year in 2010 by Top Gear magazine.
              The Agera RS variant became the world's fastest production car in
              2017, setting a record with a GPS-verified two-way average top
              speed of 447 km/h (278 mph) and a fastest straight-line speed of
              458 km/h (285 mph).
            </p>
            <p>
              The Agera ceased production in July 2018 with the unveiling of the
              two final edition cars at the 2018 Goodwood Festival of Speed. It
              was succeeded by the Jesko in 2019.
            </p>
            <p>
              In early development, the car was fitted with a 4.7-litre V8
              engine with fixed-vane twin-turbochargers, but the engine was
              replaced with an in-house developed 5.0-litre V8 engine and fitted
              with twin-turbochargers which generates a maximum power output of
              706 kW (960 PS; 947 hp) at 6,900 rpm and 1,100 N⋅m (811 lbf⋅ft) of
              torque at 4,000 rpm. The total weight of the engine is only 197 kg
              (434 lb) due to a carbon fibre inlet manifold and aluminium
              construction. The transmission is a specially developed CIMA
              7-speed dual-clutch with paddle shifters. It is the first
              dual-clutch transmission to feature only one input shaft. The
              second clutch slows down the input shaft during up shifts in order
              to reduce the time it takes to synchronise the next gear,
              resulting in faster shift times. Most notably, the transmission
              weighs only 81 kg (179 lb).
            </p>
            <p>
              On 1 October 2017, the Agera RS made the 0–400–0 km/h (0–249–0
              mph) record in 36.44 seconds, 5.56 seconds faster than the record
              made by the Bugatti Chiron. The record was achieved on an old
              Danish airbase in Vandel, Denmark. The car was driven by
              Koenigsegg test driver Niklas Lilja. Koenigsegg mentioned that
              during the record run, the car accelerated from 0–400 km/h in
              26.88 seconds over a distance of 1,958 metres and decelerated in
              9.56 seconds over a distance of 483 metres. The total distance
              used for the record was 2,441 metres. During the speed record run
              on 4 November 2017, Koenigsegg also broke their previous 0–400–0
              km/h record by 2.57 seconds. However, the record was broken by a
              Koenigsegg Regera − which completed the run in 31.49 seconds on 23
              September 2019.
            </p>
            <h2>Price and Availability</h2>
            <p>
              The Koenigsegg Agera was produced in limited numbers, making it a
              highly sought-after collector's car. Depending on the model
              variant, prices can range from $2 million to $2.5 million,
              reflecting its exclusivity and unmatched performance capabilities.
            </p>
            <h2>Conclusion</h2>
            <p>
              The Koenigsegg Agera is a masterpiece of automotive engineering,
              combining extreme speed, cutting-edge technology, and luxurious
              design. It remains an icon in the hypercar world, representing the
              pinnacle of what is possible in automotive performance.
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

export default Agera;
