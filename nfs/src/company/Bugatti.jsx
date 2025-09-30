import React from 'react';
import NFSlogo from '../img/NfsLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import Home from '../NFS.jsx';
import { useState, useEffect } from 'react';
import AstonMartin from './AstonMartin.jsx';
import getCurrentDate from '../js/Date.js';
import Ferrari from './Ferrari.jsx';
import Koenigsegg from './Koenigsegg.jsx';
import Lamborghini from './Lamborghini.jsx';
import RollsRoyce from './RollsRoyce.jsx';
import AboutUs from '../Ex/AboutUs.jsx';
import PrivatePolicy from '../Ex/PrivatePolicy.jsx';
import Bugatti_Tourbillon from '../Models/Tourbillon.jsx';
import Bugatti_Chiron from '../Models/Chiron.jsx';
import Bugatti_Centodice from '../Models/Centodieci.jsx';
import Bugatti_Banner from '../img/Bugatti banner.png';
import Bugatti_Logo from '../img/Bugatti logo.png';
import Bugatti_Turbillon_img from '../img/Bugatti Tourbillon.jpg';
import Bugatti_Centodieci_img from '../img/Bugatti-Centodieci-Prototype-02.webp';
import Bugatti_Chiron_img from '../img/bugatti.jpg';
function App() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/AstonMartin" element={<AstonMartin />} exact />
                    <Route path="/Bugatti" element={<Bugatti />} exact />
                    <Route path="/Ferrari" element={<Ferrari />} exact />
                    <Route path="/Koenigsegg" element={<Koenigsegg />} exact />
                    <Route path="/Lamborghini" element={<Lamborghini />} exact />
                    <Route path="/RollsRoyce" element={<RollsRoyce />} exact />
                    <Route path="/AboutUs" element={<AboutUs />} exact />
                    <Route path="/PrivatePolicy" element={<PrivatePolicy />} exact />
                    <Route path="/Tourbillon" element={<Bugatti_Tourbillon />} exact />
                    <Route path="/Chiron" element={<Bugatti_Chiron />} exact />
                    <Route path="/Centodieci" element={<Bugatti_Centodice />} exact />
                </Routes>
            </main>
        </Router>
    );
}
export const Bugatti = () => {
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
                                <img src={NFSlogo} alt="NFS Logo" style={{ width: '75px' }} className="rounded-pill" />
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
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link to="/AstonMartin" className="dropdown-item">
                                                Aston Martin
                                            </Link>
                                        </li>
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
                    <img src={Bugatti_Banner} alt="Bugatti Banner" />
                </div>
            </section>
            <br />
            <br />
            {/*--------------------     Header section    --------------------- */}
            <section class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <h2 class="section__title header__title">Bugatti</h2>
                            <p class="header__description">
                                French maker of cheap and cheerful city runab—nah just kidding, it’s Bugatti. Creator of the Veyron and the
                                Chiron, this aristocratic branch of the Volkswagen Group can justifiably claim to build the fastest cars in
                                the world. If you want to experience the awesome power of a Bugatti, you’ll need (a) a decent Euromillions
                                win and (b) a very large and empty airfield to get anywhere near the limits of its performance.
                            </p>
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-16">
                            <img src={Bugatti_Logo} alt="Bugatti Logo" class="header__logo" />
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-16">
                            <div class="Company__description">
                                <ul class="bugatti-list">
                                    <li>Founded 1909; 115 years ago</li>
                                    <li>Founder: Ettore Bugatti</li>
                                    <li>Defunct 1963; 61 years ago</li>
                                    <li>Fate Sold to Hispano-Suiza (1963)</li>
                                    <li>Headquarters: Molsheim, Alsace, France</li>
                                    <li>
                                        Key people:
                                        <ul>
                                            <li>Ettore Bugatti</li>
                                            <li>Jean Bugatti</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr></hr>
            {/*--------------------     Model section    --------------------- */}
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">Bugatti Tourbillon</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Bugatti_Turbillon_img} alt="Bugatti Tourbillon" className="about__img" />
                                        <div className="text-overlay-sub">
                                            <h2>10/10</h2>
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
                                            The tourbillon stands as a pinnacle of horological mastery, embodying a perfect blend of
                                            precision, craftsmanship, and elegance. Featuring a complex mechanism that counters the effects
                                            of gravity, it ensures unmatched accuracy in timekeeping. Each tourbillon is a marvel of
                                            engineering, with its intricate design and delicate movement captivating watch enthusiasts
                                            worldwide. Limited in production and crafted with the finest materials, the tourbillon is not
                                            just a timepiece but a symbol of sophistication and timeless luxury, cherished by collectors and
                                            connoisseurs alike.
                                        </p>
                                        <Link to="/Tourbillon" className="button">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <hr />
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">Bugatti-Centodieci</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Bugatti_Centodieci_img} alt="Bugatti Centodieci" className="model__img" />
                                        <div className="text-overlay-sub">
                                            <h2>10/10</h2>
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
                                            The Bugatti Centodieci is a rare gem, paying homage to the legendary Bugatti EB110. Limited to
                                            just 10 units, it boasts a formidable 1,600 horsepower from its quad-turbocharged W16 engine.
                                            With design cues reminiscent of its predecessor and contemporary styling, the Centodieci
                                            represents the pinnacle of automotive exclusivity and performance.
                                        </p>
                                        <Link to="/Centodieci" className="button">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <hr />
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">Bugatti Chiron</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Bugatti_Chiron_img} alt="Bugatti Chiron" className="about__img" />
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
                                            The Bugatti Chiron epitomizes automotive excellence with its unparalleled combination of speed,
                                            power, and luxury. Boasting a quad-turbocharged W16 engine generating 1,500 horsepower, it
                                            accelerates from 0 to 60 mph in under 2.5 seconds. Limited to just 500 units, its sleek design
                                            and opulent interior make it a coveted symbol of prestige and exclusivity in the automotive
                                            world.
                                        </p>
                                        <Link to="/Chiron" class="button">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
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
                            Dive into a compact hub of automotive wisdom with our website. From engine intricacies to model comparisons,
                            we're your passport to informed car choices, packed into every byte.
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
                            <a href="https://www.instagram.com/nfs.44_/?img_index=1" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.youtube.com/channel/UCtbN_9YUU1gckJH8Z3bvOxw" target="_blank" rel="noreferrer">
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
export default Bugatti;
