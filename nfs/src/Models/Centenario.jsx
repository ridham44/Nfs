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
import Centenario1 from '../img/Centenario 1.jpg';
import Centenario2 from '../img/Centenario 2.jpg';
import Centenario3 from '../img/Centenario 3.jpg';
import Centenario4 from '../img/Centenario 4.jpg';
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

const Centenario = () => {
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
                                            src={Centenario1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Centenario2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Centenario3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Centenario4}
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
                                <h1>Lamborghini Centenario:</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> 6.5-liter V12 <span>&#128267;</span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 770 horsepower <span>&#9889;</span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> Over 217 mph (350 km/h) <span>&#127937;</span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-60 mph in under 2.8 seconds <span>&#128640;</span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> 7-speed automated manual <span>&#128260;</span>
                                </li>
                                <li>
                                    <strong>Weight:</strong> Approximately 1520 kg <span>&#128268;</span>
                                </li>
                            </ul>
                            <br />
                            <div className="rlogo">
                                <img src={St_logo} height="200px" width="400px" alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Aggressive aerodynamic design for enhanced performance</li>
                            <li>Carbon fiber monocoque construction for lightweight and strength</li>
                            <li>Advanced aerodynamics with active rear wing</li>
                            <li>Luxurious interior with cutting-edge technology</li>
                            <li>Intuitive infotainment system with touchscreen interface</li>
                        </ul>
                        <h2>Overview</h2>
                        <p>
                            The Lamborghini Centenario is a limited-production hypercar built by Lamborghini to celebrate the 100th birthday
                            of the company's founder, Ferruccio Lamborghini.
                        </p>
                        <p>
                            Design: The Lamborghini Centenario boasts an aggressive and aerodynamic design, featuring sharp lines, large air
                            intakes, and distinctive LED lighting. Its carbon fiber monocoque construction ensures lightweight performance
                            and exceptional strength, while advanced aerodynamics enhance stability and cornering capabilities.
                        </p>
                        <p>
                            Interior: Inside the Lamborghini Centenario, drivers are treated to a luxurious and high-tech cockpit. Premium
                            materials, including Alcantara and carbon fiber, adorn the interior, while advanced features such as a
                            touchscreen infotainment system and digital instrument cluster provide seamless connectivity and entertainment.
                        </p>
                        <p>
                            Powertrain: Powering the Lamborghini Centenario is a potent 6.5-liter V12 engine, producing 770 horsepower.
                            Mated to a 7-speed automated manual transmission, this powerhouse delivers blistering acceleration and a top
                            speed exceeding 217 mph (350 km/h), making it one of the fastest cars in Lamborghini's lineup.
                        </p>
                        <p>
                            Performance: With its lightweight construction, advanced aerodynamics, and powerful engine, the Lamborghini
                            Centenario offers exhilarating performance both on the road and the track. From its lightning-fast acceleration
                            to its precise handling, every aspect of the Centenario is engineered for maximum driving thrills.
                        </p>
                        <p>
                            Limited Production: Production of the Lamborghini Centenario is limited to just 20 coupes and 20 roadsters,
                            making it highly exclusive and collectible. Each car is meticulously handcrafted and personalized to the exact
                            specifications of its owner, ensuring a truly bespoke driving experience.
                        </p>
                        <p>
                            In conclusion, the Lamborghini Centenario represents the ultimate expression of Lamborghini's passion for
                            performance, innovation, and design. With its breathtaking styling, blistering performance, and unparalleled
                            exclusivity, the Centenario is a fitting tribute to the legacy of Ferruccio Lamborghini and a testament to the
                            brand's commitment to pushing the boundaries of automotive excellence.
                        </p>
                        <h2>Price and Availability</h2>
                        <p>
                            The Lamborghini Centenario is priced at approximately $2.2 million USD and is available only to a select group
                            of collectors and enthusiasts. Delivery of the Centenario is subject to individual customization options and
                            production schedules.
                        </p>
                        <h2>Conclusion</h2>
                        <p>
                            The Lamborghini Centenario stands as a symbol of innovation, performance, and exclusivity, representing the
                            pinnacle of automotive engineering and design. With its limited production, breathtaking performance, and
                            unparalleled craftsmanship, the Centenario is destined to become a coveted icon among automotive enthusiasts and
                            collectors alike.
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

export default Centenario;
