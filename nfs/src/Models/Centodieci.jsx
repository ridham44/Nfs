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
import Centodieci1 from '../img/01 BUGATTI_Last-CENTODIECI.jpg';
import Centodieci2 from '../img/06 BUGATTI_Last-CENTODIECI.jpg';
import Centodieci3 from '../img/04 BUGATTI_Last-CENTODIECI.jpg';
import Centodieci4 from '../img/05 BUGATTI_Last-CENTODIECI.jpg';
import Bugatti_elephant from '../img/elephant logo.jpg';
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

const Centodieci = () => {
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
                                            src={Centodieci1}
                                            className="d-block w-100"
                                            alt="First slide"
                                            style={{ height: '450px', width: '200px' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Centodieci2}
                                            className="d-block w-100"
                                            alt="Second slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Centodieci3}
                                            className="d-block w-100"
                                            alt="Third slide"
                                            style={{ height: '450px', width: '100%' }}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Centodieci4}
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
                                <h1>Bugatti Centodieci:</h1>
                            </u>
                            <h2>Specifications</h2>
                            <ul>
                                <li>
                                    <strong>Engine:</strong> 8.0-liter quad-turbocharged W16{' '}
                                    <span role="img" aria-label="engine">
                                        🔧
                                    </span>
                                </li>
                                <li>
                                    <strong>Power Output:</strong> 1600 horsepower{' '}
                                    <span role="img" aria-label="power">
                                        ⚡
                                    </span>
                                </li>
                                <li>
                                    <strong>Top Speed:</strong> Limited to 236 mph (380 km/h){' '}
                                    <span role="img" aria-label="speed">
                                        🏁
                                    </span>
                                </li>
                                <li>
                                    <strong>Acceleration:</strong> 0-60 mph in under 2.4 seconds{' '}
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
                                <li>
                                    <strong>Weight:</strong> Approximately 1980 kg{' '}
                                    <span role="img" aria-label="weight">
                                        ⚖️
                                    </span>
                                </li>
                            </ul>

                            <br />

                            <div className="rlogo">
                                <img src={Bugatti_elephant} alt="Elephant Logo" height="200px" width="200px" />
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <h2>Features</h2>
                        <ul className="custom-list">
                            <li>Distinctive design paying homage to the Bugatti EB110</li>
                            <li>Carbon-fiber body for optimal weight distribution</li>
                            <li>State-of-the-art aerodynamics for enhanced performance</li>
                            <li>Luxurious interior with premium materials and advanced technology</li>
                            <li>Customizable driving modes for different road conditions</li>
                        </ul>

                        <h2>Overview</h2>
                        <p>
                            The Bugatti Centodieci is a limited-edition hypercar crafted by Bugatti Automobiles S.A.S. It pays tribute to
                            the iconic Bugatti EB110 and embodies the pinnacle of automotive engineering and design.
                        </p>
                        <p>
                            <strong>Design:</strong> The Bugatti Centodieci boasts a striking and aerodynamic design inspired by the
                            legendary Bugatti EB110. Its sleek lines, aggressive stance, and distinctive styling cues pay homage to
                            Bugatti's rich heritage while pushing the boundaries of modern hypercar design.
                        </p>
                        <p>
                            <strong>Interior:</strong> Inside the Bugatti Centodieci, drivers are enveloped in luxury and sophistication.
                            The cabin features premium materials, exquisite craftsmanship, and cutting-edge technology, creating an
                            unparalleled driving environment that seamlessly blends performance with comfort.
                        </p>
                        <p>
                            <strong>Powertrain:</strong> At the heart of the Bugatti Centodieci lies a potent 8.0-liter quad-turbocharged
                            W16 engine, delivering an astonishing 1600 horsepower. This powerhouse is paired with a lightning-fast 7-speed
                            dual-clutch automatic transmission, enabling blistering acceleration and exhilarating performance.
                        </p>
                        <p>
                            <strong>Aerodynamics:</strong> The Bugatti Centodieci utilizes advanced aerodynamics to optimize airflow and
                            enhance performance. From its sculpted bodywork to its adjustable rear wing, every aspect of the Centodieci's
                            design is engineered to maximize downforce and stability at high speeds.
                        </p>
                        <p>
                            <strong>Performance:</strong> With a top speed limited to 236 mph (380 km/h) and a 0-60 mph acceleration time of
                            under 2.4 seconds, the Bugatti Centodieci offers uncompromising performance and agility. Its lightweight
                            construction, advanced suspension system, and precision engineering ensure unparalleled handling and
                            responsiveness.
                        </p>
                        <p>
                            <strong>Limited Production:</strong> Production of the Bugatti Centodieci is strictly limited to just 10 units
                            worldwide, making it one of the most exclusive and sought-after hypercars ever created. Each Centodieci is
                            meticulously handcrafted and tailored to the exact specifications of its discerning owner.
                        </p>
                        <p>
                            <strong>Ownership Experience:</strong> Owners of the Bugatti Centodieci are granted access to a bespoke
                            ownership experience, including exclusive events, personalized concierge services, and unparalleled support from
                            Bugatti's dedicated team. The Centodieci represents the ultimate expression of luxury, performance, and
                            exclusivity in the automotive world.
                        </p>

                        <h2>Price and Availability</h2>
                        <p>
                            The Bugatti Centodieci is priced at approximately $9 million USD, with only 10 units slated for production.
                            Deliveries to customers are expected to commence in the near future.
                        </p>

                        <h2>Conclusion</h2>
                        <p>
                            The Bugatti Centodieci represents the pinnacle of automotive excellence, combining cutting-edge technology,
                            breathtaking design, and unparalleled performance. It stands as a testament to Bugatti's storied legacy and
                            reaffirms the brand's position as a leader in the world of hypercar innovation and craftsmanship.
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

export default Centodieci;
