import React from 'react';
import NFSlogo from '../img/NfsLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';
import getCurrentDate from '../js/Date';
import Home from '../NFS.jsx';
import AstonMartin from '../company/AstonMartin.jsx';
import Bugatti from '../company/Bugatti.jsx';
import Ferrari from '../company/Ferrari.jsx';
import Koenigsegg from '../company/Koenigsegg.jsx';
import Lamborghini from '../company/Lamborghini.jsx';
import RollsRoyce from '../company/RollsRoyce.jsx';
import AboutUs from '../Ex/AboutUs.jsx';
import PrivatePolicy from '../Ex/PrivatePolicy.jsx';
import Spectre1 from '../img/spectre1.webp';
import Spectre2 from '../img/spectre.webp';
import Spectre3 from '../img/spectre3.webp';
import Spectre4 from '../img/spectre4.webp';
import Sprit_of_Ecstasy from '../img/Sprit of Ecstasy logo.png';
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
                </Routes>
            </main>
        </Router>
    );
}

const Spectre = () => {
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
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="0"
                                        className="active"
                                    ></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={Spectre1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Spectre2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Spectre3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Spectre4}
                                            className="d-block w-100"
                                            alt="Fourth slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-12">
                            <u>
                                <h1>Rolls-Royce Spectre:</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> Electric <span>&#128267;</span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 585 PS<span>&#9889;</span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> Over 155 mph (250 km/h)
                                    <span>&#127937;</span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-100 km/h in 4.5 seconds
                                    <span>&#128640;</span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> Automatic<span>&#128260;</span>
                                </li>
                                <li>
                                    <strong>Electric Range:</strong> Up to 530 km (WLTP)
                                    <span>&#128268;</span>
                                </li>
                            </ul>
                            <br />
                            <div className="rlogo">
                                <img src={Sprit_of_Ecstasy} height="200px" width="200px" alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Redesigned Spirit of Ecstasy</li>
                            <li>Multiple digital screens</li>
                            <li>Ventilated, heated, and massaging seats</li>
                            <li>Multi-zone climate control</li>
                            <li>Connected car technology</li>
                        </ul>
                        <h2>Overview</h2>
                        <p>
                            The Rolls-Royce Spectre is a full-sized luxury electric car manufactured by Rolls-Royce Motor Cars. The first
                            deliveries of the car were made in the last quarter of 2023. It is Rolls-Royce's first electric vehicle (EV) and
                            rides on the same platform as the Phantom and Cullinan. The new Rolls-Royce coupe model: the Spectre. It’s
                            priced and positioned between the Cullinan SUV and the Phantom flagship in the Rolls-Royce hierarchy, but this
                            is much more than a niche-filler – it’s a sign of things to come for the double-R brand. By the end of the
                            decade, every single Rolls-Royce will be fully electric.
                        </p>
                        <p>
                            The Spectre is the first battery-powered model to carry the Spirit of Ecstasy on the prow of its bonnet. Don’t
                            mistake the Spectre as being an ‘eco-Rolls’. It isn’t swathed in vegan pleather or sustainably-sourced hemp.
                            This is a huge monument to conspicuous consumption, and you could argue it’s actually rather vulgar. Sure, the
                            cells in the battery are produced using ‘green electricity’, says Rolls, and there’s a commitment to only use
                            responsibly-sourced rare earth metals in the batteries, but compared to the likes of a Polestar 2 for example,
                            this isn’t a car which you’ll buy because it’s got an eye on lifetime CO2 emissions.
                        </p>
                        <p>
                            You’ll buy it because it’s a Rolls-Royce, first and foremost. You’ll buy it because it may very well be the
                            finest motor car in the world. The Spectre is a truly immense coupe. That glinting grille is lower and wider
                            than a Phantom’s Parthenon-esque façade, and the corners of its bonnet taper gently downwards instead of
                            standing as upright as a bearskin-topped guardsman, but these nods to slippery aerodynamics don’t diminish the
                            gravitational presence this mighty two-door generates.
                        </p>
                        <h2>Price and Availability</h2>
                        <p>
                            The Rolls-Royce Spectre is priced at Rs. 7.50 crore (ex-showroom Delhi). Deliveries began in the last quarter of
                            2023.
                        </p>
                        <h2>Conclusion</h2>
                        <p>
                            The Rolls-Royce Spectre sets a new standard for luxury electric vehicles. With its cutting-edge technology,
                            elegant design, and unparalleled comfort, it embodies the essence of Rolls-Royce craftsmanship and innovation.
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

export default Spectre;
