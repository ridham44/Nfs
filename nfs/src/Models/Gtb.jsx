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
import Gtb1 from '../img/296-gtb1.webp';
import Gtb2 from '../img/296-gtb2.webp';
import Gtb3 from '../img/296-gtb3.webp';
import Gtb4 from '../img/Ferrari 296-gtb m.avif';
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
const Gtb = () => {
    
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
                                            src={Gtb1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Gtb2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Gtb3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Gtb4}
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
                                <h1>Ferrari 296-gtb:-</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> 3.0-liter twin-turbocharged V6 hybrid{' '}
                                    <span role="img" aria-label="bolt">
                                        🔧
                                    </span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 819 horsepower{' '}
                                    <span role="img" aria-label="lightning">
                                        ⚡
                                    </span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> Over 205 mph (330 km/h){' '}
                                    <span role="img" aria-label="flag">
                                        🏁
                                    </span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-60 mph in under 2.9 seconds{' '}
                                    <span role="img" aria-label="rocket">
                                        🚀
                                    </span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> 8-speed dual-clutch automatic{' '}
                                    <span role="img" aria-label="gear">
                                        ⚙️
                                    </span>
                                </li>
                                <li>
                                    <strong>Weight:</strong> Approximately 1470 kg{' '}
                                    <span role="img" aria-label="scale">
                                        ⚖️
                                    </span>
                                </li>
                            </ul>
                            <br />
                            <div className="rlogo">
                                <img src={Sf_logo} alt="Ferrari Logo" height="400px" width="250px" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Sleek and aerodynamic design for optimal performance</li>
                            <li>Advanced hybrid powertrain for enhanced efficiency and power</li>
                            <li>Dynamic driving experience with customizable settings</li>
                            <li>Luxurious interior with cutting-edge technology and premium materials</li>
                            <li>State-of-the-art infotainment system with touchscreen interface</li>
                        </ul>
                        <h2>Overview</h2>
                        <p>
                            The Ferrari 296 GTB is a mid-engine hybrid sports car produced by the Italian manufacturer Ferrari. It
                            represents the latest evolution in Ferrari's lineup, combining electrifying performance with cutting-edge
                            technology and iconic design.
                        </p>
                        <p>
                            <strong>Design:</strong> The Ferrari 296 GTB features a sleek and aerodynamic design, characterized by flowing
                            lines and sculpted curves. Its aggressive stance and striking proportions exude performance and athleticism,
                            while paying homage to Ferrari's rich heritage of automotive excellence.
                        </p>
                        <p>
                            <strong>Interior:</strong> Inside the Ferrari 296 GTB, drivers are greeted by a luxurious and driver-focused
                            cockpit. The interior boasts premium materials, exquisite craftsmanship, and state-of-the-art technology,
                            creating an immersive driving experience that seamlessly blends comfort with performance.
                        </p>
                        <p>
                            <strong>Hybrid Powertrain:</strong> At the heart of the Ferrari 296 GTB lies a potent 3.0-liter
                            twin-turbocharged V6 engine paired with an electric motor. This advanced hybrid powertrain delivers a combined
                            output of 819 horsepower, providing exhilarating acceleration and dynamic performance while also enhancing fuel
                            efficiency and reducing emissions.
                        </p>
                        <p>
                            <strong>Driving Dynamics:</strong> The Ferrari 296 GTB offers unparalleled driving dynamics, thanks to its
                            advanced chassis, adaptive suspension system, and responsive steering. With customizable driving modes and
                            electronic aids, drivers can tailor the car's performance to suit their preferences and driving style.
                        </p>
                        <p>
                            <strong>Technology:</strong> The Ferrari 296 GTB is equipped with a host of cutting-edge technology features,
                            including a state-of-the-art infotainment system, advanced driver assistance systems, and connectivity options.
                            From its intuitive touchscreen interface to its seamless integration of digital services, the 296 GTB redefines
                            the modern sports car experience.
                        </p>
                        <h2>Price and Availability</h2>
                        <p>
                            The Ferrari 296 GTB is priced at approximately $320,000 USD, with availability varying by market. Deliveries to
                            customers are expected to begin in the near future.
                        </p>
                        <h2>Conclusion</h2>
                        <p>
                            The Ferrari 296 GTB stands as a testament to Ferrari's unwavering commitment to pushing the boundaries of
                            automotive innovation and performance. With its breathtaking design, electrifying performance, and unmatched
                            craftsmanship, the 296 GTB represents the ultimate expression of Ferrari's legendary legacy and passion for
                            excellence.
                        </p>
                    </div>
                </div>
            </section>
            {/*--------------------     Footer section    --------------------- */}
            <Footer />
        </>
    );
};

export default Gtb;
