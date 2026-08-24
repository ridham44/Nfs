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
import Ghost1 from '../img/ghost2.webp';
import Ghost2 from '../img/ghost3.webp';
import Ghost3 from '../img/ghost4.webp';
import Ghost4 from '../img/ghost5.webp';
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

const Ghost = () => {
    
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
                                            src={Ghost1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Ghost2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Ghost3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Ghost4}
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
                                <h1>Rolls-Royce Ghost:</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> 6.75-liter twin-turbo V12 <span>&#128267;</span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 563 HorsePower
                                    <span>&#9889;</span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> Over 155 mph (250 km/h)
                                    <span>&#127937;</span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-60 km/h in 4.6 seconds
                                    <span>&#128640;</span>
                                </li>
                                <li>
                                    <strong>Transmission:</strong> 8-speed automatic
                                    <span>&#128260;</span>
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
                            <li>Handcrafted luxury interior with bespoke options</li>
                            <li>Advanced air suspension for a smooth ride</li>
                            <li>Starlight headliner and ambient lighting</li>
                            <li>Cutting-edge infotainment and connectivity systems</li>
                            <li>Exquisite exterior design with signature Rolls-Royce details</li>
                        </ul>
                        <h2>Overview</h2>
                        <p>
                            The Rolls-Royce Ghost is a symbol of modern luxury, blending timeless design with state-of-the-art technology.
                            Introduced as a more dynamic and contemporary model within the Rolls-Royce lineup, the Ghost maintains the
                            brand's commitment to elegance and supreme comfort. With a 6.75-liter twin-turbo V12 engine under the hood, the
                            Ghost delivers a smooth and powerful driving experience, effortlessly combining performance with refinement.
                        </p>
                        <p>
                            The Ghost's exterior design is an epitome of understated luxury, featuring clean lines and a commanding
                            presence. Its iconic Pantheon grille and Spirit of Ecstasy ornament reflect Rolls-Royce's rich heritage, while
                            modern elements like laser headlights and bespoke paint options offer a contemporary touch.
                        </p>
                        <p>
                            Inside, the Ghost offers an oasis of tranquility and luxury. The cabin is meticulously handcrafted with the
                            finest materials, including leather, wood, and metal accents. Rolls-Royce's renowned attention to detail is
                            evident in every aspect, from the soft-closing doors to the starlight headliner that mimics a night sky. The
                            Ghost also features the latest in-car technology, with an intuitive infotainment system, advanced driver
                            assistance features, and an unparalleled sound system that ensures a first-class experience for all occupants.
                        </p>
                        <p>
                            The Rolls-Royce Ghost is more than just a luxury sedan; it is a statement of prestige and excellence. Designed
                            for those who demand the very best, the Ghost offers a driving experience that is both exhilarating and serene,
                            making it a benchmark in the world of luxury automobiles.
                        </p>
                        <h2>Price and Availability</h2>
                        <p>
                            The Rolls-Royce Ghost is available as a bespoke model, allowing buyers to customize nearly every aspect of the
                            car. The starting price is approximately $315,000, with bespoke options and customizations driving the price
                            significantly higher.
                        </p>
                        <h2>Conclusion</h2>
                        <p>
                            The Rolls-Royce Ghost stands as a testament to the brand's dedication to luxury, craftsmanship, and innovation.
                            It offers a unique blend of performance, comfort, and exclusivity, making it one of the most desirable luxury
                            cars in the world.
                        </p>
                    </div>
                </div>
            </section>
            {/*--------------------     Footer section    --------------------- */}
            <Footer />
        </>
    );
};

export default Ghost;
