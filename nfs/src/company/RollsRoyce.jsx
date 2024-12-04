import React from "react";
import NFSlogo from "../img/NfsLogo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../App.css";
import Home from "../NFS.jsx";
import { useState, useEffect } from "react";
import getCurrentDate from "../js/Date.js";
import Bugatti from "./Bugatti.jsx";
import Koenigsegg from "./Koenigsegg.jsx";
import Ferrari from "./Ferrari.jsx";
import Lamborghini from "./Lamborghini.jsx";
import AboutUs from "../Ex/AboutUs.jsx";
import PrivatePolicy from "../Ex/PrivatePolicy.jsx";
import Cullinan from "../Models/Cullinan.jsx";
import Ghost from "../Models/Ghost.jsx";
import Spectre from "../Models/Spectre.jsx";
import RollsRoyce_banner from "../img/Rolls Royce banner.jpg";
import RollsRoyce_logo from "../img/Rolls Royce logo.png";
import RollsRoyce_cullinan_img from "../img/rolls-royce-cullinan1.webp";
import RollsRoyce_spectre_img from "../img/Rolls Royce spectre m.jpg";
import RollsRoyce_ghost_img from "../img/ghost1.webp";
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
          <Route path="/Cullinan" element={<Cullinan />} exact />
          <Route path="/Ghost" element={<Ghost />} exact />
          <Route path="/Spectre" element={<Spectre />} exact />
        </Routes>
      </main>
    </Router>
  );
}
const RollsRoyce = () => {
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
      {/*--------------------     Banner section    --------------------- */}
      <section class="banner">
        <div class="container-fluid">
          <img
            src={RollsRoyce_banner}
            alt="Rolls-Royce Banner"
            width="1500px"
          />
        </div>
      </section>
      <br></br>
      {/*--------------------     Header section    --------------------- */}
      <section class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <h2 class="section__title header__title">Rolls-Royce</h2>
              <p class="header__description">
                Purveyors of probably the most luxurious cars on the planet.
                Rolls-Royce offers vast, lavish, impossibly comfortable land
                yachts to the sort of customers who light their Cuban cigars
                with £50 notes. Now owned by BMW, but retaining an ethos as
                British as cucumber sandwiches. If you like your cars compact
                and unobtrusive, you need not apply. If you don’t already own at
                least a couple of yachts and a helicopter, you need not apply.
              </p>
            </div>
            <div class="col-xl-3 col-md-3 col-sm-16">
              <img
                src={RollsRoyce_logo}
                alt="RollsRoyce Logo"
                class="header__logo"
              />
            </div>
            <div class="col-xl-3 col-md-3 col-sm-16">
              <div class="Company__description">
                <ul class="bugatti-list">
                  <li>
                    Founded: March 1998; 26 years ago in the United Kingdom
                  </li>
                  <li>Parent: BMW</li>
                  <li>
                    Headquarters: Goodwood, West Sussex, England, United Kingdom
                  </li>
                  <li>
                    Key people:
                    <ul>
                      <li>Chris Brownridge(CEO)</li>
                      <li>Henry Cloke(Chief Design Officer)</li>
                      <li>Jonathan Simms(Lead Engineer)</li>
                      <li>Peter Schwarzenbauer(Chairman)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/*--------------------     Model section    --------------------- */}
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__group">
            <form>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <h2 className="lr">Rolls-Royce Cullinan</h2>
                  <br />
                  <div className="about__img-container">
                    <img
                      src={RollsRoyce_cullinan_img}
                      alt="Rolls-Royce Cullinan"
                      className="model__img"
                    />
                    <div className="text-overlay-sub">
                      <h2>9/10</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="about__data">
                    <p className="about__description">
                      The Rolls-Royce Cullinan is a luxury SUV that epitomizes
                      opulence and off-road capability. Powered by a 6.75-liter
                      V12 engine with 563 horsepower, it delivers a smooth and
                      powerful ride on any terrain. The Cullinan's interior is a
                      sanctuary of comfort, with plush seating, high-end
                      materials, and customizable features. With its commanding
                      presence and advanced technology, the Cullinan redefines
                      luxury in the SUV segment, offering an unparalleled
                      driving experience both on and off the road.
                    </p>
                    <Link to="/Cullinan" className="button">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <hr />
      <br />
      <br />
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__group">
            <form>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <h2 className="lr">Rolls-Royce Spectre</h2>
                  <br />
                  <div className="about__img-container">
                    <img
                      src={RollsRoyce_spectre_img}
                      alt="Rolls-Royce Spectre"
                      className="model__img"
                    />
                    <div className="text-overlay-sub">
                      <h2>9/10</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="about__data">
                    <p className="about__description">
                      The new Rolls-Royce coupe model: the Spectre. It’s priced
                      and positioned between the Cullinan SUV and the Phantom
                      flagship in the Rolls-Royce hierarchy, but this is much
                      more than a niche-filler – it’s a sign of things to come
                      for the double-R brand. By the end of the decade, every
                      single Rolls-Royce will be fully electric. The Spectre is
                      the first battery-powered model to carry the Spirit of
                      Ecstasy on the prow of its bonnet.
                    </p>
                    <Link to="/Spectre" className="button">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <hr />
      <br />
      <br />
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__group">
            <form>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <h2 className="lr">Rolls-Royce Ghost</h2>
                  <br />
                  <div className="about__img-container">
                    <img
                      src={RollsRoyce_ghost_img}
                      alt="Rolls-Royce Ghost"
                      className="model__img"
                    />
                    <div className="text-overlay-sub">
                      <h2>9/10</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="about__data">
                    <p className="about__description">
                      The Rolls-Royce Ghost is a luxury sedan that combines
                      elegance with modern technology. Powered by a 6.75-liter
                      V12 engine, it offers a smooth, effortless drive with 563
                      horsepower. The Ghost's interior is a masterpiece of
                      craftsmanship, featuring the finest materials and bespoke
                      options like the Starlight headliner. Its design is
                      understated yet refined, making it an ideal choice for
                      those who seek both luxury and performance in a more
                      dynamic, driver-focused Rolls-Royce.
                    </p>
                    <Link to="/Ghost" className="button">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <hr />
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

export default RollsRoyce;
