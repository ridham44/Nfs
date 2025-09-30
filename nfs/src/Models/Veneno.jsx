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
import Veneno1 from '../img/Lamborghini-Veneno-Roadster-2.jpg';
import Veneno2 from '../img/Lamborghini-Veneno-Roadster-3.jpg';
import Veneno3 from '../img/Lamborghini-Veneno-Roadster-4.jpg';
import Veneno4 from '../img/Lamborghini-Veneno-Roadster-5.jpg';
import St_logo from '../img/St logo.jpg';
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

const Veneno = () => {
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
                                            src={Veneno1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Veneno2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Veneno3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Veneno4}
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
                                <h1>Lamborghini Veneno:-</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> 6.5-liter naturally aspirated V12 <span>&#128267;</span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 740 horsepower <span>&#9889;</span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> Over 221 mph (356 km/h) <span>&#127937;</span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-60 mph in under 2.8 seconds <span>&#128640;</span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> 7-speed ISR automated manual <span>&#128260;</span>
                                </li>
                            </ul>
                            <br />
                            <div className="rlogo">
                                <img src={St_logo} height="200px" width="400px" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Extreme aerodynamics for maximum downforce</li>
                            <li>Lightweight carbon-fiber monocoque</li>
                            <li>Race-inspired suspension and handling</li>
                            <li>Exclusive design with aggressive styling</li>
                            <li>Luxurious and customizable interior</li>
                        </ul>
                        <h2>Overview</h2>
                        <p>
                            The Lamborghini Veneno is an extraordinary hypercar that represents the pinnacle of Lamborghini's engineering
                            prowess and design innovation. Launched to celebrate the brand's 50th anniversary, the Veneno is more than just
                            a car; it’s a bold statement of what is possible when limits are pushed to their extremes. Its name, Veneno,
                            meaning "venom" in Spanish, perfectly captures the car’s lethal performance and aggressive aesthetics.
                        </p>
                        <p>
                            Under the hood, the Veneno is powered by a naturally aspirated 6.5-liter V12 engine, producing a staggering 740
                            horsepower and 507 lb-ft of torque. This immense power allows the Veneno to sprint from 0 to 60 mph in a
                            blistering 2.8 seconds and reach a top speed of 221 mph. The engine, a masterpiece of Italian engineering, is
                            paired with a 7-speed ISR automated manual transmission, which ensures lightning-fast gear shifts and optimal
                            performance. The advanced all-wheel-drive system further enhances the car’s stability and handling, making it a
                            force to be reckoned with on both the track and the road.
                        </p>
                        <p>
                            The design of the Veneno is nothing short of spectacular. Every element of the car has been crafted with
                            precision, not just for aesthetics but for functionality. The aggressive front splitter, large rear wing, and
                            extensive use of carbon fiber contribute to the Veneno’s remarkable aerodynamics, generating significant
                            downforce and keeping the car planted at high speeds. The bodywork, inspired by the world of racing, features
                            sharp angles and dynamic lines that give the Veneno an unmistakable presence. The lightweight carbon fiber
                            monocoque chassis ensures that the Veneno is as agile as it is fast, with a curb weight of just 3,285 pounds
                            (1,490 kg).
                        </p>
                        <p>
                            Inside, the Veneno continues Lamborghini's tradition of blending luxury with cutting-edge technology. The
                            cockpit is a blend of high-tech materials and craftsmanship, featuring carbon fiber bucket seats, Alcantara
                            upholstery, and a driver-oriented dashboard. The digital instrument cluster provides the driver with all the
                            necessary information, displayed in a futuristic layout that complements the car’s overall design. Despite its
                            racing pedigree, the Veneno offers a level of comfort and refinement that is rare in the world of hypercars.
                        </p>
                        <p>
                            What truly sets the Veneno apart is its exclusivity. With only 13 units ever produced—comprising 3 coupes and 9
                            roadsters—the Veneno is one of the rarest and most sought-after Lamborghinis in existence. Each car was
                            hand-built and customized to the buyer’s specifications, making every Veneno unique. The astronomical price tag,
                            which started at around $4 million, reflects its rarity, craftsmanship, and the unparalleled driving experience
                            it offers.
                        </p>
                        <p>
                            The Lamborghini Veneno is not just a car; it is a symbol of Lamborghini's relentless pursuit of perfection. It
                            embodies the brand’s core values of innovation, performance, and exclusivity. The Veneno stands as a testament
                            to what Lamborghini can achieve when it sets out to create a vehicle that is beyond the ordinary, offering an
                            experience that is as exhilarating as it is exclusive. For those fortunate enough to own one, the Veneno is more
                            than a hypercar; it is a piece of automotive history, destined to be revered for generations to come.
                        </p>
                        <h2>Price and Availability</h2>
                        <p>
                            The Lamborghini Veneno is an extremely limited production model, with only 13 units produced worldwide. Given
                            its rarity and performance, the Veneno comes with a price tag of around $4.5 million, making it one of the most
                            expensive and exclusive cars in the world.
                        </p>
                        <h2>Conclusion</h2>
                        <p>
                            The Lamborghini Veneno is a true marvel of automotive engineering, combining breathtaking design with
                            unparalleled performance. It is a symbol of Lamborghini's commitment to pushing the boundaries of what is
                            possible in a hypercar, offering an experience that is as exhilarating as it is exclusive.
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

export default Veneno;
