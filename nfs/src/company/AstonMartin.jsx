import React from 'react';
import NFSlogo from '../img/NfsLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import Home from '../NFS.jsx';
//import { useState, useEffect } from "react";
import getCurrentDate from '../js/Date.js';
import Bugatti from './Bugatti.jsx';
import Ferrari from './Ferrari.jsx';
import Koenigsegg from './Koenigsegg.jsx';
import Lamborghini from './Lamborghini.jsx';
import RollsRoyce from './RollsRoyce.jsx';
import AboutUs from '../Ex/AboutUs.jsx';
import PrivatePolicy from '../Ex/PrivatePolicy.jsx';
import Bugatti_Tourbillon from '../Models/Tourbillon.jsx';
import Bugatti_Chiron from '../Models/Chiron.jsx';
import Bugatti_Centodice from '../Models/Centodieci.jsx';
import Aston_Banner from '../img/Bugatti banner.png';
import Aston_Logo from '../img/aston logo.jpg';
import Bugatti_Turbillon_img from '../img/Bugatti Tourbillon.jpg';
import Bugatti_Centodieci_img from '../img/Bugatti-Centodieci-Prototype-02.webp';
import Bugatti_Chiron_img from '../img/bugatti.jpg';
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
                    <Route path="/Tourbillon" element={<Bugatti_Tourbillon />} exact />
                    <Route path="/Chiron" element={<Bugatti_Chiron />} exact />
                    <Route path="/Centodieci" element={<Bugatti_Centodice />} exact />
                </Routes>
            </main>
        </Router>
    );
}
export const AstonMartin = () => {
    const date = getCurrentDate();
    return (
        <>
            {/* NavBar and header */}
            <header id="header">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="navbar-brand">
                            <Link to="/">
                                <img src={NFSlogo} alt="NFS Logo" style={{ width: '75px' }} className="rounded-pill" />
                            </Link>
                        </div>
                        <div id="header_heading" className="text-white">
                            <h3>NFS: Car Review and Information - Website</h3>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        Car Brands
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/Bugatti" className="dropdown-item">Bugatti</Link></li>
                                        <li><Link to="/Ferrari" className="dropdown-item">Ferrari</Link></li>
                                        <li><Link to="/Koenigsegg" className="dropdown-item">Koenigsegg</Link></li>
                                        <li><Link to="/Lamborghini" className="dropdown-item">Lamborghini</Link></li>
                                        <li><Link to="/RollsRoyce" className="dropdown-item">Rolls Royce</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Banner */}
            <section className="banner">
                <div className="container-fluid">
                    <img src={Aston_Banner} alt="Aston Martin Banner" />
                </div>
            </section>

            {/* Aston Martin Info */}
            <section className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <h2 className="section__title header__title">Aston Martin</h2>
                            <p className="header__description">
                                Aston Martin is a British luxury sports car manufacturer known for blending performance with timeless elegance.
                                Renowned for its association with James Bond and racing heritage, Aston Martin creates vehicles that deliver both speed
                                and sophistication. From the DB11 to the Valkyrie hypercar, each model is crafted with British artistry and engineering precision.
                            </p>
                        </div>
                        <div className="col-xl-3 col-md-3 col-sm-12">
                            <img src={Aston_Logo} alt="Aston Martin Logo" className="header__logo" />
                        </div>
                        <div className="col-xl-3 col-md-3 col-sm-12">
                            <div className="Company__description">
                                <ul className="bugatti-list">
                                    <li>Founded: 1913; 111 years ago</li>
                                    <li>Founders: Lionel Martin, Robert Bamford</li>
                                    <li>Headquarters: Gaydon, Warwickshire, England</li>
                                    <li>Owner: Aston Martin Lagonda Global Holdings plc</li>
                                    <li>
                                        Key models:
                                        <ul>
                                            <li>DB11</li>
                                            <li>Vantage</li>
                                            <li>DBS Superleggera</li>
                                            <li>Valkyrie</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            {/* Placeholder for Aston Martin models */}
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__group">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <h2 className="lr">Aston Martin Valkyrie</h2>
                                <br />
                                <div className="about__img-container">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Aston_Martin_Valkyrie_Geneva_2019.jpg/640px-Aston_Martin_Valkyrie_Geneva_2019.jpg" alt="Aston Martin Valkyrie" className="about__img" />
                                    <div className="text-overlay-sub">
                                        <h2>10/10</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <br /><br /><br /><br /><br />
                                <div className="about__data">
                                    <p className="about__description">
                                        The Aston Martin Valkyrie is a hypercar developed in collaboration with Red Bull Racing, offering a Formula One–inspired
                                        driving experience. Powered by a naturally aspirated 6.5L V12 hybrid engine, it delivers over 1,100 horsepower.
                                        The Valkyrie redefines road car performance with extreme aerodynamics and lightweight construction.
                                    </p>
                                    <a href="https://www.astonmartin.com/en-us/models/valkyrie" target="_blank" rel="noreferrer" className="button">Know More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__content">
                        <a href="#" className="footer__logo">NFS</a>
                        <p className="footer__description">Explore car reviews, specs, and history from the best brands in the world.</p>
                    </div>
                    <div className="footer__content">
                        <p className="footer__logo">Contact us:</p>
                        <p className="footer__description">
                            Mobile No : +91 9123456789<br />
                            Email : nfs@gmail.com
                        </p>
                    </div>
                    <div className="footer__content">
                        <h3 className="footer__title">Company</h3>
                        <ul className="footer__links__list">
                            <li><Link to="/PrivatePolicy" className="footer__link">Privacy & Policy</Link></li>
                            <li><Link to="/AboutUs" className="footer__link">About us</Link></li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <p className="footer__logo">Follow us:</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/nfs.44_/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                            <a href="https://www.youtube.com/channel/UCtbN_9YUU1gckJH8Z3bvOxw" target="_blank" rel="noreferrer"><FaYoutube /></a>
                            <a href="#" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                            <a href="#" target="_blank" rel="noreferrer"><FaTwitter /></a>
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

export default AstonMartin;
