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
import Laferrari1 from '../img/Laferrari1.webp';
import Laferrari2 from '../img/Laferrari2.webp';
import Laferrari3 from '../img/Laferrari3.webp';
import Laferrari4 from '../img/Laferrari4.webp';
import Sf_logo from '../img/Sf logo.png';

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

const Laferrari = () => {
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
                                            src={Laferrari1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Laferrari2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Laferrari3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Laferrari4}
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
                                <h1>Ferrari Laferrari-</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> 6.3-liter V12 hybrid{' '}
                                    <span role="img" aria-label="bolt">
                                        🔧
                                    </span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 949 horsepower{' '}
                                    <span role="img" aria-label="lightning">
                                        ⚡
                                    </span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> Over 217 mph (349 km/h){' '}
                                    <span role="img" aria-label="flag">
                                        🏁
                                    </span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-60 mph in under 3 seconds{' '}
                                    <span role="img" aria-label="rocket">
                                        🚀
                                    </span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> 7-speed dual-clutch{' '}
                                    <span role="img" aria-label="gear">
                                        ⚙️
                                    </span>
                                </li>
                                <li>
                                    <strong>Electric Range:</strong> N/A{' '}
                                    <span role="img" aria-label="scale">
                                        ⚖️
                                    </span>
                                </li>
                            </ul>
                            <br />
                            <div className="rlogo">
                                <img src={Sf_logo} alt="Ferrari Logo" height="200px" width="200px" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Hy-KERS hybrid system for enhanced performance</li>
                            <li>Active aerodynamics for improved efficiency</li>
                            <li>Carbon-fiber construction for lightweight and strength</li>
                            <li>Advanced traction control and stability systems</li>
                            <li>Luxurious interior with premium materials</li>
                        </ul>
                        <h2>Overview</h2>
                        <p>
                            The LaFerrari is a limited-production hybrid sports car built by Italian manufacturer Ferrari. Combining
                            cutting-edge technology with the exhilarating performance of a V12 engine, it represents the pinnacle of
                            automotive engineering and design.
                        </p>
                        <p>
                            <strong>Design:</strong> The LaFerrari boasts a striking and aerodynamic design, with every curve and contour
                            optimized for maximum performance and efficiency. Its carbon-fiber construction ensures lightweight agility,
                            while advanced aerodynamics provide exceptional stability and downforce.
                        </p>
                        <p>
                            <strong>Interior:</strong> Inside the LaFerrari, drivers are treated to a luxurious and high-tech cockpit.
                            Premium materials, including fine leather and carbon fiber, adorn the interior, creating a comfortable and
                            immersive driving experience. Advanced technology, such as a customizable digital instrument cluster and
                            touchscreen infotainment system, puts control at the driver's fingertips.
                        </p>
                        <p>
                            <strong>Powertrain:</strong> Powering the LaFerrari is a potent 6.3-liter V12 engine paired with Ferrari's
                            Hy-KERS hybrid system. This innovative powertrain delivers a combined output of 949 horsepower, propelling the
                            LaFerrari from 0 to 60 mph in under 3 seconds and reaching a top speed of over 217 mph (349 km/h).
                        </p>
                        <p>
                            <strong>Performance:</strong> With its advanced hybrid system and aerodynamic design, the LaFerrari offers
                            breathtaking performance in every aspect. From its lightning-fast acceleration to its precise handling and
                            cornering abilities, the LaFerrari delivers an unparalleled driving experience that pushes the boundaries of
                            what is possible in a road car.
                        </p>
                        <p>
                            <strong>Limited Production:</strong> Production of the LaFerrari is limited to just 499 units, making it one of
                            the most exclusive and sought-after Ferraris ever produced. Each car is meticulously handcrafted and tailored to
                            the specifications of its owner, ensuring a truly unique and unforgettable driving experience.
                        </p>
                        <p>
                            In conclusion, the LaFerrari represents the ultimate fusion of performance, technology, and luxury. With its
                            breathtaking design, groundbreaking hybrid powertrain, and unparalleled exclusivity, the LaFerrari is a true
                            masterpiece of automotive engineering and design.
                        </p>
                        <h2>Price and Availability</h2>
                        <p>
                            The LaFerrari was priced at approximately $1.4 million USD and was available only to select Ferrari customers.
                            Due to its limited production, obtaining a LaFerrari required an invitation from Ferrari and a significant
                            financial commitment.
                        </p>
                        <h2>Conclusion</h2>
                        <p>
                            The LaFerrari stands as a symbol of Ferrari's commitment to pushing the boundaries of automotive excellence.
                            With its cutting-edge technology, breathtaking performance, and unmatched exclusivity, the LaFerrari is destined
                            to become a timeless icon in the world of high-performance sports cars.
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

export default Laferrari;
