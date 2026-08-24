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
import Koenigsegg from './Koenigsegg.jsx';
import Ferrari from './Ferrari.jsx';
import RollsRoyce from './RollsRoyce.jsx';
import AboutUs from '../Ex/AboutUs.jsx';
import PrivatePolicy from '../Ex/PrivatePolicy.jsx';
import Centenario from '../Models/Centenario.jsx';
import Revluto from '../Models/Revluto.jsx';
import Veneno from '../Models/Veneno.jsx';
import Lamborghini_banner from '../img/Lamborghini banner.jpg';
import Lamborghini_logo from '../img/Lamborghini Logo.png';
import Lamborghini_revuelto_img from '../img/Lamborghini revuelto m.webp';
import Lamborghini_centenario_img from '../img/LAMBORBHINI-CENTENARIO m.jpg';
import Lamborghini_veneno_img from '../img/Lamborghini-Veneno-Roadster-1.jpg';
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
                    <Route path="/Centenario" element={<Centenario />} exact />
                    <Route path="/Revluto" element={<Revluto />} exact />
                    <Route path="/Veneno" element={<Veneno />} exact />
                </Routes>
            </main>
        </Router>
    );
}
const Lamborghini = () => {
    
    return (
        <>
            {/*--------------------    NavBar   --------------------- */}
            <Navbar />
            {/*--------------------     Banner section    --------------------- */}
            <section class="banner">
                <div class="container-fluid">
                    <img src={Lamborghini_banner} alt="Lamborghini Banner" />
                </div>
            </section>
            <br></br>
            {/*--------------------     Header section    --------------------- */}
            <section class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <h2 class="section__title header__title">Lamborghini</h2>
                            <p class="header__description">
                                The most supercar-ish of supercar makers. Born in the Sixties out of a spat between business magnate
                                Ferruccio Lamborghini and Enzo Ferrari, Lamborghini has long specialised in noisy, showy, exotica with
                                unapologetic performance to match the unapologetic visuals. Though VW ownership since 1998 has arguably
                                tempered its weirdest forays – there’s even a Lambo SUV nowadays, for heaven’s sake –Sant’Agata’s finest
                                remains a brand best avoided by shrinking violets.
                            </p>
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-16">
                            <img src={Lamborghini_logo} alt="Lamborghini Logo" class="header__logo" width="150px" />
                        </div>
                        <div class="col-xl-3 col-md-3 col-sm-16">
                            <div class="Company__description">
                                <ul class="bugatti-list">
                                    <li>Founded 1963; 61 years ago</li>
                                    <li>Founder:Ferruccio Lamborghini</li>
                                    <li>Headquarters: Sant'Agata Bolognese, Emilia-Romagna, Italy</li>
                                    <li>Owner Volkswagen Group</li>
                                    <li>
                                        Parent Audi AG <br />
                                        Subsidiaries Ducati Motor Holding S.p.A. Italdesign Giugiaro
                                    </li>
                                    <li>
                                        Key people:
                                        <ul>
                                            <li>Stephan Winkelmann (CEO)[1]</li>
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
                                    <h2 className="lr">Lamborghini Revuelto</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Lamborghini_revuelto_img} alt="Lamborghini Revuelto" className="model__img" />
                                        <div className="text-overlay-sub">
                                            <h2>9/10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="about__data">
                                        <p className="about__description">
                                            Lamborghini is known for producing a range of high-performance and luxury sports cars, including
                                            models like the Aventador, Huracán, Urus, and limited-edition vehicles like the Centenario and
                                            Sian. It is a predecessor of Lamborghini Aventador with hybrid Na V12 engine and an electric
                                            motor that provides The Lamborghini ReVolt is a supercar produced by Italian automaker
                                            Automobili Lamborghini SpA
                                        </p>
                                        <Link to="/Revuelto" className="button">
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
                                    <h2 className="lr">Lamborghini Centenario</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img src={Lamborghini_centenario_img} alt="Lamborghini Centenario" className="model__img" />
                                        <div className="text-overlay-sub">
                                            <h2>9/10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="about__data">
                                        <p className="about__description">
                                            The Lamborghini Centenario is a limited-edition hypercar commemorating the 100th anniversary of
                                            the company's founder, Ferruccio Lamborghini. Unveiled in 2016, it features a powerful naturally
                                            aspirated V12 engine producing 770 horsepower. With only 20 coupé and 20 roadster versions
                                            produced, the Centenario is exceptionally rare and exclusive, showcasing Lamborghini's
                                            commitment to innovation and performance.
                                        </p>
                                        <Link to="/Centenario" className="button">
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
                                    <h2 className="lr">Lamborghini Veneno</h2>
                                    <br />
                                    <div className="about__img-container">
                                        <img
                                            src={Lamborghini_veneno_img}
                                            alt="Lamborghini Veneno"
                                            className="model__img"
                                            height="100px"
                                            width="700px"
                                        />
                                        <div className="text-overlay-sub">
                                            <h2>9/10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="about__data">
                                        <p className="about__description">
                                            The Lamborghini Veneno is a hypercar that epitomizes extreme performance and cutting-edge
                                            design. Built to celebrate Lamborghini's 50th anniversary, this ultra-rare vehicle features a
                                            6.5-liter V12 engine producing 740 horsepower, enabling a top speed of 221 mph. With only 13
                                            units ever produced, the Veneno is one of the rarest Lamborghinis in existence, known for its
                                            aggressive aerodynamics, lightweight carbon fiber construction, and futuristic interior. Priced
                                            at around $4 million, the Veneno is not just a car, but a symbol of Lamborghini's relentless
                                            pursuit of automotive excellence.
                                        </p>
                                        <Link to="/Veneno" className="button">
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

export default Lamborghini;
