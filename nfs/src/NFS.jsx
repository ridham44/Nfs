import React from "react";
import axios from "axios";
import NFSlogo from "./img/NfsLogo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { initCookieConsent } from "./js/cookie-consent.js";
import getCurrentDate from "./js/Date";
import Bugatti from "./company/Bugatti.jsx";
import Ferrari from "./company/Ferrari.jsx";
import Koenigsegg from "./company/Koenigsegg.jsx";
import Lamborghini from "./company/Lamborghini.jsx";
import RollsRoyce from "./company/RollsRoyce.jsx";
import AboutUs from "./Ex/AboutUs.jsx";
import PrivatePolicy from "./Ex/PrivatePolicy.jsx";
import Signup from "./Ex/signup.jsx";
import Login from "./Ex/login.jsx";
import Review from "./Ex/review.jsx";
import F1 from "./Ex/F1review.jsx";
import Subscribe from "./Ex/subscribe.jsx";
import Bugatti_Tourbillon from "./Models/Tourbillon.jsx";
import Bugatti_Chiron from "./Models/Chiron.jsx";
import Bugatti_Centodice from "./Models/Centodieci.jsx";
import Ferrari_Daytona from "./Models/Daytona.jsx";
import Ferrari_296Gtb from "./Models/Gtb.jsx";
import Ferrari_Laferrari from "./Models/Laferrari.jsx";
import Koenigsegg_Agera from "./Models/Agera.jsx";
import Koenigsegg_Regera from "./Models/Regera.jsx";
import Koenigsegg_Jesko from "./Models/Jesko.jsx";
import Lamborghini_Centenario from "./Models/Centenario.jsx";
import Lamborghini_Veneno from "./Models/Veneno.jsx";
import Lamborghini_Revuelto from "./Models/Revluto.jsx";
import RollsRoyce_Ghost from "./Models/Ghost.jsx";
import RollsRoyce_Cullinan from "./Models/Cullinan.jsx";
import RollsRoyce_Spectre from "./Models/Spectre.jsx";
import cr1 from "./img/02 BUGATTI_Custmer-Car-Gathering.jpg";
import cr2 from "./img/cor2.jpg";
import cr3 from "./img/cor3.jpg";
import cr4 from "./img/cor4.jpg";
import cr5 from "./img/cor5.jpg";
import bugatti_latest from "./img/27 BUGATTI Tourbillon_World Premiere.jpg";
import bugatti_centodice_img from "./img/Bugatti-centodice.webp";
import ferrari_296gtb_img from "./img/Ferrari 296-gtb.webp";
import lamborghini_revuelto_img from "./img/Lamborghini revuelto.webp";
import rollroyce_spectre_img from "./img/Rolls Royce spectre.webp";
import f1_car from "./img/f1 car.webp";
import f1 from "./img/f1.png";
import bugatti_chiron_img from "./img/Bugatti Chiron.webp";
import lamborghini_centenario_img from "./img/LAMBORBHINI-CENTENARIO.jpg";
import koenigsegg_jesko_img from "./img/Konisegg jesko.jpg";
import ferrari_laferrari_img from "./img/LaFerrari.jfif";
import bg1 from "./img/bg-1.png";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.jpg";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import logo5 from "./img/logo6.jpg";
import offer_bg from "./img/offer-bg.png";
import offer from "./img/offer.png";
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<NFS />} exact />
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
          <Route path="/Daytona" element={<Ferrari_Daytona />} exact />
          <Route path="/Gtb" element={<Ferrari_296Gtb />} exact />
          <Route path="/Laferrari" element={<Ferrari_Laferrari />} exact />
          <Route path="/Agera" element={<Koenigsegg_Agera />} exact />
          <Route path="/Regera" element={<Koenigsegg_Regera />} exact />
          <Route path="/Jesko" element={<Koenigsegg_Jesko />} exact />
          <Route path="/Revuelto" element={<Lamborghini_Revuelto />} exact />
          <Route path="/Veneno" element={<Lamborghini_Veneno />} exact />
          <Route
            path="/Centenario"
            element={<Lamborghini_Centenario />}
            exact
          />
          <Route path="/Spectre" element={<RollsRoyce_Spectre />} exact />
          <Route path="/Cullinan" element={<RollsRoyce_Cullinan />} exact />
          <Route path="/Ghost" element={<RollsRoyce_Ghost />} exact />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<Review />} />
          <Route path="/F1" element={<F1 />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </main>
    </Router>
  );
}
const NFS = () => {
  const date = getCurrentDate();

  useEffect(() => {
    console.log("Checking for cookie consent...");
    initCookieConsent();
  }, []);

  return (
    <>
      {/*--------------------    NavBar   --------------------- */}
      <header id="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Logo */}
            <div className="navbar-brand">
              <Link to="/">
                <img
                  src={NFSlogo}
                  alt="NFS Logo"
                  style={{ width: "75px" }}
                  className="rounded-pill"
                />
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
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
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
                <li className="nav-item">
                  <Link to="/subscribe" className="nav-link">
                    Subscribe Nfs News
                  </Link>
                </li>
                <div className="nav-item">
                  <a
                    href="https://www.instagram.com/nfs.44_/?img_index=1"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram style={{ fontWeight: "bold", width:"30px",height:"30px" }} />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/*--------------------   Carousel   --------------------- */}
      <main>
        <div className="container-fluid">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={cr1}
                  className="d-block w-100"
                  alt="First slide"
                  style={{ height: "550px", width: "200px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cr2}
                  className="d-block w-100"
                  alt="Second slide"
                  style={{ height: "550px", width: "100%" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cr3}
                  className="d-block w-100"
                  alt="Third slide"
                  style={{ height: "550px", width: "100%" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cr4}
                  className="d-block w-100"
                  alt="Fourth slide"
                  style={{ height: "550px", width: "100%" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cr5}
                  className="d-block w-100"
                  alt="Fifth slide"
                  style={{ height: "550px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*--------------------     Latest Review    --------------------- */}
      <br />
      <br />
      <hr />
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__group">
            <form>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <h2 className="lr">Latest Review</h2>
                  <br />
                  <div className="about__image-container has-bg-image">
                    <img src={bugatti_latest} alt="" className="about__img" />
                    <div className="text-overlay">
                      <h2>10/10</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="about__data">
                    <h2 className="section__title about__title">
                      Bugatti <br />
                      Tourbillon
                    </h2>
                    <p className="about__description">
                      The Bugatti Tourbillon is a luxury timepiece that embodies
                      the same precision and craftsmanship found in Bugatti's
                      hypercars. Designed in collaboration with renowned
                      watchmakers, this watch features an intricate tourbillon
                      movement, echoing the engineering marvels of Bugatti's
                      automotive creations. With its bold design and high-end
                      materials, the Bugatti Tourbillon is a true statement
                      piece for collectors and enthusiasts alike.
                    </p>
                    <Link to="/Tourbillon" className="button">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*--------------------     Trending Cars    --------------------- */}
      <br />
      <br />
      <hr />
      <section className="popular section container" id="popular">
        <h2 className="section__title lr">
          Trending Cars &#xf201;
          <br />
        </h2>
        <form>
          <div className="row">
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="popular__container swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="popular__card">
                      <h1 className="popular__title">Bugatti</h1>
                      <h3 className="popular__subtitle">Centodice</h3>
                      <img
                        src={bugatti_centodice_img}
                        alt=""
                        className="popular__img"
                      />
                      <div className="popular__data">
                        <div className="popular__data-group">2.4 sec</div>
                        <div className="popular__data-group">380 Km/h</div>
                        <div className="popular__data-group">1578hp</div>
                      </div>
                      <h3 className="popular__price">$8.6M</h3>
                      <Link to="/Centodieci" className="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="popular__container swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="popular__card">
                      <h1 className="popular__title">Ferrari</h1>
                      <h3 className="popular__subtitle">296-gtb</h3>
                      <img
                        src={ferrari_296gtb_img}
                        alt=""
                        className="popular__img"
                      />
                      <div className="popular__data">
                        <div className="popular__data-group">2.3 sec</div>
                        <div className="popular__data-group">330 Km/h</div>
                        <div className="popular__data-group">830hp</div>
                      </div>
                      <h3 className="popular__price">$322,986</h3>
                      <Link to="/Gtb" className="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="popular__container swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="popular__card">
                      <h1 className="popular__title">Lamborghini</h1>
                      <h3 className="popular__subtitle">Revuelto</h3>
                      <img
                        src={lamborghini_revuelto_img}
                        alt=""
                        className="popular__img"
                      />
                      <div className="popular__data">
                        <div className="popular__data-group">1.9 sec</div>
                        <div className="popular__data-group">250 Km/h</div>
                        <div className="popular__data-group">1000hp</div>
                      </div>
                      <h3 className="popular__price">$604643</h3>
                      <Link to="/Revuelto" className="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="popular__container swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="popular__card">
                      <h1 className="popular__title">RollsRoyce</h1>
                      <h3 className="popular__subtitle">Spectre</h3>
                      <img
                        src={rollroyce_spectre_img}
                        alt=""
                        className="popular__img"
                      />
                      <div className="popular__data">
                        <div className="popular__data-group">2.4 sec</div>
                        <div className="popular__data-group">480 Km/h</div>
                        <div className="popular__data-group">1500hp</div>
                      </div>
                      <h3 className="popular__price">$422750</h3>
                      <Link to="/Spectre" className="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </form>
      </section>
      {/*--------------------     F1 coming section    --------------------- */}
      <br />
      <br />
      <hr />
      <div
        style={{
          backgroundImage: `url(${f1})`,
          backgroundRepeat: "no-repeat",
        }}
        className="section cta has-bg-image"
      >
        <section className="coming section">
          <div className="coming__container container-fluid">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="coming__data">
                      <h2 className="section__title offer__title">
                        Coming Soon!
                      </h2>
                      <p className="coming__description">
                        <b>
                          "Rev up your excitement! Our F1 addition is about to
                          hit the track, delivering the ultimate rush of car
                          information like never before. Get ready to accelerate
                          into the future of automotive knowledge."
                        </b>
                      </p>
                      <Link className="button" to="/login">
                        Review F1 team
                      </Link>
                      
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <img src={f1_car} alt="" className="coming__img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <hr />
      </div>
      {/*--------------------     Most Viewed    --------------------- */}
      <section class="popular section container" id="most">
        <h2 class="section__title lr">
          Most viewed cars
          <br />
        </h2>
        <form>
          <div class="row">
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="popular__container swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="popular__card">
                      <h1 class="popular__title">Bugatti</h1>
                      <h3 class="popular__subtitle">Chiron Sports</h3>
                      <img
                        src={bugatti_chiron_img}
                        alt=""
                        class="popular__img"
                      />
                      <div class="popular__data">
                        <div class="popular__data-group">3.2 sec</div>
                        <div class="popular__data-group">480 Km/h</div>
                        <div class="popular__data-group">1500hp</div>
                      </div>
                      <h3 class="popular__price">$3.3M</h3>
                      <Link to="/Chiron" class="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="popular__container swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="popular__card">
                      <h1 class="popular__title">Lamborghini</h1>
                      <h3 class="popular__subtitle">Centenario</h3>
                      <img
                        src={lamborghini_centenario_img}
                        alt=""
                        class="popular__img"
                      />
                      <div class="popular__data">
                        <div class="popular__data-group">2.4 sec</div>
                        <div class="popular__data-group">350 Km/h</div>
                        <div class="popular__data-group">770hp</div>
                      </div>
                      <h3 class="popular__price">$2.3M</h3>
                      <Link to="/Centenario" class="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="popular__container swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="popular__card">
                      <h1 class="popular__title">Koenigsegg</h1>
                      <h3 class="popular__subtitle">Jesko</h3>
                      <img
                        src={koenigsegg_jesko_img}
                        alt=""
                        class="popular__img"
                      />
                      <div class="popular__data">
                        <div class="popular__data-group">2.3 sec</div>
                        <div class="popular__data-group">530 Km/h</div>
                        <div class="popular__data-group">1600hp</div>
                      </div>
                      <h3 class="popular__price">$3.1M</h3>
                      <Link to="/Jesko" class="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="popular__container swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="popular__card">
                      <h1 class="popular__title">Ferrari</h1>
                      <h3 class="popular__subtitle">LaFerrari</h3>
                      <img
                        src={ferrari_laferrari_img}
                        alt=""
                        class="popular__img"
                      />
                      <div class="popular__data">
                        <div class="popular__data-group">2.4 sec</div>
                        <div class="popular__data-group">350 Km/h</div>
                        <div class="popular__data-group">950hp</div>
                      </div>
                      <h3 class="popular__price">$1.4M</h3>
                      <Link to="/Laferrari" class="button">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <hr></hr>
      {/*--------------------     Logo    --------------------- */}
      <div style={{ backgroundImage: `url(${bg1})` }}>
        <section className="logos section" id="logos">
          <div className="logos__container container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-2 col-md-4 col-sm-6">
                <div className="logos__content">
                  <Link to="/Bugatti">
                    <img src={logo1} alt="Bugatti" className="logos__img" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-6">
                <div className="logos__content">
                  <Link to="/Ferrari">
                    <img src={logo2} alt="Ferrari" className="logos__img" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-6">
                <div className="logos__content">
                  <Link to="/Koenigsegg">
                    <img src={logo3} alt="koenisegg" className="logos__img" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-6">
                <div className="logos__content">
                  <Link to="/Lamborghini">
                    <img src={logo4} alt="lamborghini" className="logos__img" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-6">
                <div className="logos__content">
                  <Link to="/RollsRoyce">
                    <img src={logo5} alt="rollsroyce" className="logos__img" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*--------------------     Offer section   --------------------- */}
      <section class="offer section">
        <div class="offer__container container-fluid">
          <img src={offer_bg} alt="" class="offer__bg" />
          <div class="row">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <img src={offer} alt="" class="offer__img" />
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="offer__data">
                    <h2 class="section__title offer__title">
                      Do You Want To Receive <br />
                      Special Offers?
                    </h2>
                    <p class="offer__description">
                      Be the first to receive all the information about our
                      products and new cars by email by subscribing to our
                      mailing list.
                    </p>
                    <Link to="/subscribe" class="button">
                      Subscribe Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
              Dive into a compact hub of automotive wisdom with our website.
              From engine intricacies to model comparisons, we're your passport
              to informed car choices, packed into every byte.
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
                <li>
                  <Link to="/review" className="footer__link">
                    Review our team
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
              <a
                href="https://www.instagram.com/nfs.44_/?img_index=1"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCtbN_9YUU1gckJH8Z3bvOxw"
                target="_blank"
                rel="noreferrer"
              >
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

export default App;
