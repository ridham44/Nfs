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
import Jesko1 from '../img/jesko-1.jpg';
import Jesko2 from '../img/jesko-2.jpg';
import Jesko3 from '../img/jesko-3.jpg';
import Jesko4 from '../img/jesko-4.jpg';
import Ghost_logo from '../img/Ghost logo.webp';
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
export const Jesko = () => {
    const date = getCurrentDate();
    return (
        <>
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
                                            src={Jesko1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Jesko2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Jesko3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Jesko4}
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
                                <h1>Koenigsegg Jesko:</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> 5.0-liter twin-turbo V8{' '}
                                    <span role="img" aria-label="engine">
                                        &#128267;
                                    </span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> Up to 1600 horsepower{' '}
                                    <span role="img" aria-label="lightning">
                                        &#9889;
                                    </span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> Estimated over 300 mph (482 km/h){' '}
                                    <span role="img" aria-label="flag">
                                        &#127937;
                                    </span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-60 mph in under 2.5 seconds{' '}
                                    <span role="img" aria-label="rocket">
                                        &#128640;
                                    </span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> 9-speed multi-clutch{' '}
                                    <span role="img" aria-label="gear">
                                        &#128260;
                                    </span>
                                </li>
                                <li>
                                    <strong>Weight:</strong> Approximately 1400 kg{' '}
                                    <span role="img" aria-label="weight">
                                        &#128268;
                                    </span>
                                </li>
                            </ul>
                            <br />
                            <div className="rlogo">
                                <img src={Ghost_logo} height="200px" width="200px" alt="Koenigsegg Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Aerodynamic design for maximum downforce</li>
                            <li>Carbon fiber chassis for lightweight and rigidity</li>
                            <li>Advanced active suspension system</li>
                            <li>State-of-the-art infotainment system</li>
                            <li>Customizable driving modes and settings</li>
                        </ul>
                        <h2>Overview</h2>
                        <p>
                            The Koenigsegg Jesko is a hypercar produced by the Swedish manufacturer Koenigsegg Automotive AB. Named after
                            Jesko von Koenigsegg, the father of company founder Christian von Koenigsegg, it is one of the most powerful
                            production cars ever made.
                        </p>
                        <p>
                            - <strong>Design:</strong> The Koenigsegg Jesko features a sleek and aerodynamic design, with every aspect
                            optimized for maximum performance. Its carbon fiber chassis and advanced aerodynamics provide exceptional
                            stability and downforce, allowing for blistering acceleration and precise handling.
                        </p>
                        <p>
                            - <strong>Interior:</strong> Inside the Koenigsegg Jesko, drivers are greeted by a luxurious and high-tech
                            cockpit. Premium materials and cutting-edge technology combine to create a comfortable and immersive driving
                            experience, while customizable settings and driving modes allow for personalized performance and comfort.
                        </p>
                        <p>
                            - <strong>Powertrain:</strong> Powering the Koenigsegg Jesko is a monstrous 5.0-liter twin-turbocharged V8
                            engine, capable of producing up to 1600 horsepower on E85 fuel. Coupled with a lightning-fast 9-speed
                            multi-clutch transmission, the Jesko delivers unparalleled acceleration and top speed, making it a true
                            powerhouse on the road.
                        </p>
                        <p>
                            - <strong>Performance:</strong> With its lightweight construction, powerful engine, and advanced aerodynamics,
                            the Koenigsegg Jesko offers breathtaking performance in every aspect. From its lightning-fast acceleration to
                            its record-breaking top speed, the Jesko pushes the boundaries of what is possible in a production car.
                        </p>
                        <p>
                            - <strong>Limited Production:</strong> Production of the Koenigsegg Jesko is limited to just 125 units, making
                            it one of the most exclusive hypercars ever produced. Each car is meticulously handcrafted and tailored to the
                            specifications of its owner, ensuring a truly unique and unforgettable driving experience.
                        </p>
                        <p>
                            In conclusion, the Koenigsegg Jesko represents the pinnacle of automotive engineering and performance. With its
                            breathtaking design, unparalleled performance, and unmatched exclusivity, the Jesko is a true testament to
                            Koenigsegg's dedication to pushing the boundaries of what is possible in a production car.
                        </p>
                        <h2>Price and Availability</h2>
                        <p>
                            The Koenigsegg Jesko is priced at approximately $3 million USD and is available only to a select group of
                            collectors and enthusiasts. Delivery of the Jesko is subject to individual customization options and production
                            schedules.
                        </p>
                        <h2>Conclusion</h2>
                        <p>
                            The Koenigsegg Jesko stands as a symbol of innovation, performance, and exclusivity, representing the pinnacle
                            of automotive engineering and design. With its limited production, breathtaking performance, and unparalleled
                            craftsmanship, the Jesko is destined to become a coveted icon among automotive enthusiasts and collectors alike.
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
export default Jesko;
