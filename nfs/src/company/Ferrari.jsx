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
import Bugatti from './Bugatti.jsx';
import Koenigsegg from './Koenigsegg.jsx';
import Lamborghini from './Lamborghini.jsx';
import RollsRoyce from './RollsRoyce.jsx';
import AboutUs from '../Ex/AboutUs.jsx';
import PrivatePolicy from '../Ex/PrivatePolicy.jsx';
import Daytona from '../Models/Daytona.jsx';
import Laferrari from '../Models/Laferrari.jsx';
import Gtb from '../Models/Gtb.jsx';
import Ferrari_Banner from '../img/Ferrari Banner.jpg';
import Ferrari_Logo from '../img/Ferrari logo.png';
import Ferrari_sp3Daytona_img from '../img/sp3daytona.avif';
import Ferrari_296Gtb_img from '../img/Ferrari 296-gtb m.avif';
import Ferrari_Laferrari_img from '../img/Laferrari m.jpg';
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
                    <Route path="/Daytona" element={<Daytona />} exact />
                    <Route path="/Gtb" element={<Gtb />} exact />
                    <Route path="/Laferrari" element={<Laferrari />} />
                </Routes>
            </main>
        </Router>
    );
}
const Ferrari = () => {
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
                    <img src={Ferrari_Banner} alt="Bugatti Banner" width="1500px" />
                </div>
            </section>
            <br></br>
            {/*--------------------     Header section    --------------------- */}
            <section class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <h2 class="section__title header__title">Ferrari</h2>
                            <p class="header__description">
                                Widely regarded as the maker of the finest supercars of all, not least by Ferrari itself. The iconic
                                ‘Cavallino Rampante’ badge has adorned some of the finest and most expensive fast cars of all time, and also
                                a load of teddies and key-rings in those weird airport-departure-lounge shops. Ferrari’s road car division
                                is inextricably intertwined with its F1 team, which – despite a lean few years – has still bagged more
                                titles than any other constructor.
                            </p>
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-16">
                            <img src={Ferrari_Logo} alt="Ferrari Logo" class="header__logo" />
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-16">
                            <div class="Company__description">
                                <ul class="bugatti-list">
                                    <li>Founded 13 September 1939; 84 years ago in Modena, Italy (as Auto Avio Costruzioni)[1]</li>
                                    <li>Founder: Enzo Ferrari</li>
                                    <li>Subsidiaries: Scuderia Ferrari S.p.A.</li>
                                    <li>Headquarters: Maranello, Emilia-Romagna, Italy Modena, Emilia-Romagna, Italy</li>
                                    <li>
                                        Key people:
                                        <ul>
                                            <li>John Elkann (Executive Chairman)</li>
                                            <li>Piero Ferrari (Vice Chairman)</li>
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
            <section className="about section" id="about-ferrari-296">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">Ferrari Sp3 Daytona</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Ferrari_sp3Daytona_img} alt="Ferrari Sp3 Daytona" className="model__img" />
                                        <div className="text-overlay-sub">
                                            <h2>8/10</h2>
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
                                            The Ferrari Daytona SP3 is a limited-production hypercar unveiled in 2021 as part of Ferrari's
                                            "Icona" series, paying homage to the brand's racing heritage. Inspired by the iconic Ferrari 330
                                            P4, the SP3 features a naturally aspirated 6.5-liter V12 engine producing 829 horsepower, making
                                            it one of the most powerful non-hybrid Ferraris ever built. With a top speed of 211 mph and a
                                            0-60 mph time of 2.85 seconds, the SP3 combines cutting-edge performance with classic design
                                            elements. Only 599 units are being produced, each priced at around $2.25 million, making it a
                                            highly coveted collector's item.
                                        </p>
                                        <Link to="/Daytona" className="button">
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
            <section className="about section" id="about-ferrari-296">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">Ferrari 296 GTB</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Ferrari_296Gtb_img} alt="Ferrari 296 GTB" className="model__img" />
                                        <div className="text-overlay-sub">
                                            <h2>8/10</h2>
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
                                            The Ferrari 296 GTB is a dynamic fusion of performance and sophistication. With its turbocharged
                                            V6 engine and electric motor, it generates over 800 horsepower and achieves 0-60 mph in under 3
                                            seconds. Its sleek design and luxurious interior epitomize Ferrari's legacy of automotive
                                            excellence, making the 296 GTB a symbol of unparalleled craftsmanship and innovation.
                                        </p>
                                        <Link to="/Gtb" className="button">
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
            <section className="about section" id="about-laferrari">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">LaFerrari</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Ferrari_Laferrari_img} alt="LaFerrari" className="model__img" />
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
                                            LaFerrari is Ferrari's flagship model, boasting a hybrid powertrain that churns out 950
                                            horsepower. Its acceleration from 0 to 60 mph in under 3 seconds and top speed exceeding 217 mph
                                            make it a true performance marvel. With only 499 units produced, its striking design and
                                            cutting-edge technology make LaFerrari an iconic symbol of automotive excellence.
                                        </p>
                                        <Link to="/Laferrari" className="button">
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

export default Ferrari;
