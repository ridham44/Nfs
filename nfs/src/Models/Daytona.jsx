import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import NFSlogo from '../img/NfsLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';

import Home from '../NFS.jsx';
import AstonMartin from '../company/AstonMartin.jsx';
import Bugatti from '../company/Bugatti.jsx';
import Ferrari from '../company/Ferrari.jsx';
import Koenigsegg from '../company/Koenigsegg.jsx';
import Lamborghini from '../company/Lamborghini.jsx';
import RollsRoyce from '../company/RollsRoyce.jsx';
import AboutUs from '../Ex/AboutUs.jsx';
import PrivatePolicy from '../Ex/PrivatePolicy.jsx';
import Sp3_1 from '../img/20-Ferrari-Daytona-SP3.webp';
import Sp3_2 from '../img/2-Ferrari-Daytona-SP3.webp';
import Sp3_3 from '../img/13-Ferrari-Daytona-SP3.webp';
import Sp3_4 from '../img/1-Ferrari-Daytona-SP3.webp';
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

const Daytona = () => {
    
    return (
        <>
            {/*--------------------    NavBar   --------------------- */}
            <Navbar />
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
                                            src={Sp3_1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Sp3_2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Sp3_3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Sp3_4}
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
                                <h1>Ferrari Sp3 Daytona</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> 6.5-liter V12 engine{' '}
                                    <span role="img" aria-label="engine">
                                        🔧
                                    </span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 829 horsepower{' '}
                                    <span role="img" aria-label="lightning">
                                        ⚡
                                    </span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> 211 mph (340 km/h){' '}
                                    <span role="img" aria-label="flag">
                                        🏁
                                    </span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-60 mph in 2.85 seconds{' '}
                                    <span role="img" aria-label="rocket">
                                        🚀
                                    </span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> 7-speed dual-clutch automatic{' '}
                                    <span role="img" aria-label="gear">
                                        ⚙️
                                    </span>
                                </li>
                            </ul>
                            <br />
                            <div className="rlogo">
                                <img src={Sf_logo} alt="Ferrari Logo" style={{ height: '200px', width: '200px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Innovative aerodynamics for enhanced performance</li>
                            <li>Lightweight carbon-fiber body</li>
                            <li>State-of-the-art suspension and braking systems</li>
                            <li>Advanced driver assistance and safety features</li>
                            <li>Luxurious interior with bespoke materials</li>
                        </ul>

                        <h2>Overview</h2>
                        <p>
                            The Ferrari SP3 Daytona is part of the Icona series, representing a perfect blend of classic Ferrari design
                            elements with cutting-edge technology. Inspired by the legendary racing cars of Ferrari's past, the SP3 Daytona
                            is a modern masterpiece of automotive engineering.
                        </p>
                        <p>
                            With its naturally aspirated V12 engine and a top speed of 211 mph, the SP3 Daytona delivers an exhilarating
                            driving experience. The car's design pays homage to the 1967 Ferrari 330 P4, with sleek lines and aggressive
                            styling that turn heads wherever it goes.
                        </p>
                        <p>
                            The Ferrari Daytona SP3 is a limited production mid-engine sports car produced by the Italian automobile
                            manufacturer Ferrari, unveiled on 20 November 2021 for the 2023 model year. The Daytona SP3 is the latest in the
                            "Icona" series of high-performance cars being produced by Ferrari after the Ferrari Monza SP series. 599
                            examples will be built from 2022 and will be sold for $2.25 million each. The Daytona SP3 is powered by a
                            naturally aspirated 6.5-liter V12 that is shared with the 812 Superfast.
                        </p>

                        <h2>Price and Availability</h2>
                        <p>
                            The Ferrari SP3 Daytona is an exclusive model with limited production, making it a prized possession for Ferrari
                            enthusiasts and collectors. Priced at around $2.25 million, the SP3 Daytona is a symbol of Ferrari's rich
                            heritage and future vision.
                        </p>

                        <h2>Conclusion</h2>
                        <p>
                            The Ferrari SP3 Daytona is a tribute to Ferrari's racing heritage, combining timeless design with modern
                            performance and luxury. Its rarity, performance, and exquisite craftsmanship make it a true collector's item and
                            a testament to Ferrari's enduring legacy.
                        </p>
                    </div>
                </div>
            </section>

            {/*--------------------     Footer section    --------------------- */}
            <Footer />
        </>
    );
};

export default Daytona;
