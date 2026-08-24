import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import NFSlogo from '../img/NfsLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import Home from '../NFS.jsx';
import { useState, useEffect } from 'react';
import AstonMartin from './AstonMartin.jsx';

import Bugatti from './Bugatti.jsx';
import Ferrari from './Ferrari.jsx';
import Lamborghini from './Lamborghini.jsx';
import RollsRoyce from './RollsRoyce.jsx';
import AboutUs from '../Ex/AboutUs.jsx';
import PrivatePolicy from '../Ex/PrivatePolicy.jsx';
import Agera from '../Models/Agera.jsx';
import Regera from '../Models/Regera.jsx';
import Jesko from '../Models/Jesko.jsx';
import Koenigsegg_Banner from '../img/Konisegg banner.jpg';
import Koenigsegg_logo from '../img/Konisegg logo.jpg';
import Koenigsegg_jesko_img from '../img/Konisegg jesko m.jpg';
import Koenigsegg_regra_img from '../img/Koenigsegg-regra1.jpg';
import Koenigsegg_agera_img from '../img/Agera.avif';
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
                    <Route path="/Agera" element={<Agera />} exact />
                    <Route path="/Regera" element={<Regera />} exact />
                    <Route path="/Jesko" element={<Jesko />} exact />
                </Routes>
            </main>
        </Router>
    );
}
const Koenigsegg = () => {
    
    return (
        <>
            {/*--------------------    NavBar   --------------------- */}
            <Navbar />
            {/*--------------------     Banner section    --------------------- */}
            <section class="banner">
                <div class="container-fluid">
                    <img src={Koenigsegg_Banner} alt="Bugatti Banner" width="1500px" />
                </div>
            </section>
            <br></br>
            {/*--------------------     Header section    --------------------- */}
            <section class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <h2 class="section__title header__title">Koenigsegg</h2>
                            <p class="header__description">
                                In essence, Koenigsegg is a Swedish manufacturer of high-performance sports cars known for their speed,
                                innovation, and exclusivity. Founded in 1994 by Christian von Koenigsegg, the company produces limited
                                numbers of extremely fast and technologically advanced vehicles, making them highly coveted among automotive
                                enthusiasts worldwide.
                            </p>
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-16">
                            <img src={Koenigsegg_logo} alt="Konisegg Logo" class="header__logo" width="150px" />
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-16">
                            <div class="Company__description">
                                <ul class="bugatti-list">
                                    <li>Founded 1994; 30 years ago</li>
                                    <li>Founder: Christian von Koenigsegg</li>
                                    <li>Headquarters Ängelholm, Scania, Sweden</li>
                                    <li>
                                        Key people:
                                        <ul>
                                            <li>Christian von Koenigsegg (CEO)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr></hr>
            {/*--------------------     Model section    --------------------- */}
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">Koenigsegg Jesko</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Koenigsegg_jesko_img} alt="Koenigsegg Jesko" className="model__img" />
                                        <div className="text-overlay-sub">
                                            <h2>10/10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="about__data">
                                        <p className="about__description">
                                            The Koenigsegg Jesko is a high-performance hypercar produced by Koenigsegg, named after Jesko
                                            von Koenigsegg, the father of the company's founder. It features a powerful twin-turbocharged V8
                                            engine producing over 1,600 horsepower, along with advanced aerodynamics and a new 9-speed
                                            transmission for lightning-fast gear changes. The Jesko represents the pinnacle of automotive
                                            engineering and performance from Koenigsegg, with a focus on track performance and road
                                            usability.
                                        </p>
                                        <Link to="/Jesko" className="button">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <hr />
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">Koenigsegg Regera</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Koenigsegg_regra_img} alt="Koenigsegg Regera" className="model__img" />
                                        <div className="text-overlay-sub">
                                            <h2>10/10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="about__data">
                                        <p className="about__description">
                                            The Koenigsegg Regera is a revolutionary hypercar featuring a hybrid powertrain that combines a
                                            5.0-liter twin-turbo V8 with three electric motors, delivering 1,500 horsepower. Introduced in
                                            2015, it boasts a top speed over 250 mph and accelerates from 0 to 60 mph in just 2.8 seconds.
                                            The Regera's innovative Direct Drive transmission replaces the traditional gearbox, enhancing
                                            performance. With a carbon-fiber chassis and active aerodynamics, it’s a rare and luxurious
                                            model, limited to 80 units and priced around $2 million.
                                        </p>
                                        <Link to="/Regera" className="button">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <hr />
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__group">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="lr">Koenigsegg Agera</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Koenigsegg_agera_img} alt="Koenigsegg Agera" className="model__img" />
                                        <div className="text-overlay-sub">
                                            <h2>10/10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="about__data">
                                        <p className="about__description">
                                            The Koenigsegg Agera is a hypercar that epitomizes speed and innovation. With a 5.0-liter
                                            twin-turbo V8 engine producing 1,160 horsepower, the Agera is capable of reaching an astonishing
                                            top speed of 273 mph. Its design blends cutting-edge aerodynamics with lightweight carbon fiber
                                            construction, ensuring both exceptional performance and agility. Known for its record-breaking
                                            capabilities, the Agera is a masterpiece of engineering that continues to be revered in the
                                            world of high-performance vehicles, combining unparalleled power with luxurious craftsmanship.
                                        </p>
                                        <Link to="/Agera" className="button">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <hr />
            {/*--------------------     Footer section    --------------------- */}
            <Footer />
        </>
    );
};

export default Koenigsegg;
