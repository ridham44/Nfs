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
import Bugattti_tourbillon1 from '../img/01 Bugatti_turbillon.jpg';
import Bugattti_tourbillon2 from '../img/02 Bugatti_turbillon.jpg';
import Bugattti_tourbillon3 from '../img/03 Bugatti_turbillon.jpg';
import Bugattti_tourbillon4 from '../img/04 Bugatti_turbillon.jpg';
import Bugatti_elephant from '../img/elephant logo.jpg';
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

const Tourbillon = () => {
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
                                            src={Bugattti_tourbillon1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Bugattti_tourbillon2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Bugattti_tourbillon3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Bugattti_tourbillon4}
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
                                <h1>Bugatti Tourbillon:-</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> Naturally aspirated 8.4L V16 <span>&#128267;</span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 1775 horsepower <span>&#9889;</span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> 445 km/h (277 mph) with speed key <span>&#127937;</span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0–100 km/h in 2.0 seconds <span>&#128640;</span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> 8-speed dual-clutch transmission <span>&#128260;</span>
                                </li>
                                <li>
                                    <strong>Battery:</strong> 24.8 kWh providing an electric-only range of 60 km <span>&#128268;</span>
                                </li>
                            </ul>
                            <br />
                            <div className="rlogo">
                                <img src={Bugatti_elephant} alt="Bugatti Elephant Logo" style={{ height: '200px', width: '200px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Innovative "skeletonized" design showcasing internal components</li>
                            <li>Lightweight carbon-fiber chassis reducing overall weight by 45%</li>
                            <li>Advanced aerodynamics with an active rear spoiler for optimized downforce</li>
                            <li>Luxurious Nappa leather interior with customizable stitching options</li>
                            <li>Next-generation infotainment system with a holographic display</li>
                            <li>Hybrid powertrain enabling electric-only driving for urban environments</li>
                            <li>Adaptive suspension system for enhanced handling and comfort</li>
                            <li>360-degree camera system with parking assist and maneuvering guidance</li>
                            <li>Extensive customization program offering bespoke paint and interior choices</li>
                            <li>Next-generation autonomous driving mode for traffic and highway cruising</li>
                        </ul>

                        <h2>Overview</h2>
                        <p>
                            Bugatti states that the Tourbillon is a completely new design, and does not share any components with the
                            outgoing Chiron, but in keeping with the Bugatti brand lineage, it does share many of its key design cues,
                            including the horseshoe grille, central spine, C-shaped side body lines, and two-tone body colour. One of the
                            stated inspirations for the Tourbillon was mechanical watches, with the car containing a fully analog center
                            console operated by mechanical gears, designed to look like a watch movement, while the speedometer and
                            tachometer needles were arranged to resemble an hour and minute hand.
                        </p>
                        <p>
                            Another design theme of the Tourbillon is a "skeletonized" mechanical design, where the mechanisms of components
                            are made visible as a part of the design. The interior of the Tourbillon features a steering wheel with a fixed
                            central hub where only the outer rim rotates, allowing the instrument cluster to remain visible at all times. It
                            also features an infotainment screen that retracts into the dashboard when not in use. Bugatti says that, as in
                            past models, their goal was to make sure that the car remains "timeless", even when the screen technology
                            inevitably becomes outdated. The center panel of the Tourbillon is made from machined aluminum and machined
                            crystal glass, while the watch-inspired instrument cluster is made from titanium by Swiss watchmaker Concepto.
                        </p>
                        <p>
                            The Tourbillon is powered by a naturally aspirated 8,355 cc (8.4 L; 509.9 cu in) V16 engine. The engine,
                            developed by Cosworth, has a bore x stroke of 92 mm × 78.55 mm (3.62 in × 3.09 in) and is implemented in
                            conjunction with 3 electric motors, 2 located at the front axle and 1 at the rear. The engine has a power output
                            of 1,000 PS (735 kW; 986 hp) and 900 N⋅m (664 lb⋅ft) of torque, while the electric motors have a combined power
                            output of 800 PS (588 kW; 789 hp), making for a total of 1,800 PS (1,324 kW; 1,775 hp).
                        </p>
                        <p>
                            Bugatti says that the choice to replace the quad turbocharger setup of the Chiron with a naturally aspirated
                            engine was to make the experience "more emotional" and allow for a higher rev count, with the engine redlining
                            at 9,000 rpm. The V16 features a crossplane crank design, a 90-degree bank angle, and dry sump lubrication
                            system. The engine weighs a total of 252 kg (556 lb).
                        </p>
                        <p>
                            The Tourbillon uses an 8-speed dual-clutch transmission mounted longitudinally at the rear of the engine, in
                            contrast to the Chiron where it was mounted at the front. The battery is a 24.8 kWh unit mounted in front of the
                            engine in the central tunnel, which allows for a complete electric range of around 60 km (37 mi).
                        </p>

                        <h2>Price and Availability</h2>
                        <p>
                            The Bugatti Tourbillon is limited to just 250 units, with a starting price of €3.8 million or US$4.1 million. It
                            was unveiled on June 20, 2024, and has quickly become a sought-after piece of automotive art.
                        </p>

                        <h2>Conclusion</h2>
                        <p>
                            The Bugatti Tourbillon is a true marvel of engineering, blending unparalleled performance with exquisite design.
                            As a successor to the Chiron, it sets new standards in the world of hypercars, offering both breathtaking speed
                            and refined luxury.
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

export default Tourbillon;
