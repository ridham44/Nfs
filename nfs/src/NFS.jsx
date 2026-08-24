import CompanyPage from './pages/CompanyPage';
import ModelPage from './pages/ModelPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { initCookieConsent } from './js/cookie-consent.js';
import AboutUs from './Ex/AboutUs.jsx';
import PrivatePolicy from './Ex/PrivatePolicy.jsx';
import Signup from './Ex/signup.jsx';
import Login from './Ex/login.jsx';
import Review from './Ex/review.jsx';
import F1 from './Ex/F1review.jsx';
import Subscribe from './Ex/subscribe.jsx';
import cr1 from './img/02 BUGATTI_Custmer-Car-Gathering.jpg';
import cr2 from './img/cor2.jpg';
import bugatti_latest from './img/27 BUGATTI Tourbillon_World Premiere.jpg';
import bugatti_centodice_img from './img/Bugatti-centodice.webp';
import ferrari_296gtb_img from './img/Ferrari 296-gtb.webp';
import lamborghini_revuelto_img from './img/Lamborghini revuelto.webp';
import rollroyce_spectre_img from './img/Rolls Royce spectre.webp';
import f1_car from './img/f1 car.webp';
import f1 from './img/f1.png';
import bugatti_chiron_img from './img/Bugatti Chiron.webp';
import lamborghini_centenario_img from './img/LAMBORBHINI-CENTENARIO.jpg';
import koenigsegg_jesko_img from './img/Konisegg jesko.jpg';
import ferrari_laferrari_img from './img/LaFerrari.jfif';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.jpg';
import logo3 from './img/logo3.png';
import logo4 from './img/logo4.png';
import logo5 from './img/logo6.jpg';
import offer_bg from './img/offer-bg.png';
import offer from './img/offer.png';


function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function usePrefersReducedMotion() {
    const [prefersReduced, setPrefersReduced] = useState(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
    useEffect(() => {
        const query = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handler = (e) => setPrefersReduced(e.matches);
        query.addEventListener('change', handler);
        return () => query.removeEventListener('change', handler);
    }, []);
    return prefersReduced;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <main>
                <Routes>
                    <Route path="/" element={<NFS />} exact />
                    {/* ── NEW: Reusable brand + model pages ── */}
                    <Route path="/brand/:companyId" element={<CompanyPage />} />
                    <Route path="/model/:companyId/:modelId" element={<ModelPage />} />
                    <Route path="/AboutUs" element={<AboutUs />} exact />
                    <Route path="/PrivatePolicy" element={<PrivatePolicy />} exact />
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
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        initCookieConsent();
    }, []);

    return (
        <>
            {/*--------------------    NavBar   --------------------- */}
            <Navbar />

            <main>
                {/*--------------------   Hero   --------------------- */}
                <section className="hero">
                    <div className="hero__carousel-wrap">
                        <div id="heroCarousel" className="carousel slide hero__carousel" data-bs-ride={prefersReducedMotion ? 'false' : 'carousel'}>
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#heroCarousel"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={cr1} className="hero__slide" alt="Bugatti customer car gathering" />
                                </div>
                                <div className="carousel-item">
                                    <img src={cr2} className="hero__slide" alt="Hypercar on track" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__overlay"></div>
                    <div className="hero__content container">
                        <span className="hero__eyebrow">The Home of Hypercars</span>
                        <h1 className="hero__title">
                            Engineered for the
                            <br />
                            Extraordinary
                        </h1>
                        <p className="hero__subtitle">
                            Curated specs, pricing and pedigree from the world's most exclusive marques — Bugatti,
                            Ferrari, Lamborghini, Koenigsegg and Rolls-Royce.
                        </p>
                        <div className="hero__actions">
                            <a href="#popular" className="button button--solid">
                                Explore Collection <span className="button__arrow">&rarr;</span>
                            </a>
                            <a href="#about" className="button">
                                Latest Review
                            </a>
                        </div>
                    </div>
                </section>

                {/*--------------------     Latest Review    --------------------- */}
                <section className="section about" id="about">
                    <div className="container">
                        <div className="section__header">
                            <span className="section__kicker">Editor's Pick</span>
                            <h2 className="section__title section__title--left">Latest Review</h2>
                        </div>
                        <div className="row align-items-center g-4">
                            <div className="col-lg-6">
                                <div className="about__image-container has-bg-image">
                                    <img src={bugatti_latest} alt="Bugatti Tourbillon watch world premiere" className="about__img" loading="lazy" />
                                    <div className="text-overlay">
                                        <h2>
                                            10<span className="text-overlay__den">/10</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about__data">
                                    <span className="about__brand">Bugatti</span>
                                    <h3 className="about__model">Tourbillon</h3>
                                    <p className="about__description">
                                        The Bugatti Tourbillon is a luxury timepiece that embodies the same precision and craftsmanship
                                        found in Bugatti's hypercars. Designed in collaboration with renowned watchmakers, this watch
                                        features an intricate tourbillon movement, echoing the engineering marvels of Bugatti's
                                        automotive creations. With its bold design and high-end materials, the Bugatti Tourbillon is a
                                        true statement piece for collectors and enthusiasts alike.
                                    </p>
                                    <Link to="/model/bugatti/bugatti_tourbillon" className="button">
                                        Know More <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*--------------------     Trending Cars    --------------------- */}
                <section className="section section--surface popular container" id="popular">
                    <div className="section__header">
                        <span className="section__kicker">Handpicked Selection</span>
                        <h2 className="section__title section__title--left">Trending Cars</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="popular__card">
                                <h1 className="popular__title">BUGATTI</h1>
                                <h3 className="popular__subtitle">Centodieci</h3>
                                <div className="popular__img-wrapper">
                                    <img src={bugatti_centodice_img} alt="Bugatti Centodieci" className="popular__img" loading="lazy" />
                                </div>
                                <div className="popular__data">
                                    <div className="popular__data-group">
                                        <span className="stat-value">2.4s</span>
                                        <span className="stat-label">0-100</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">380 km/h</span>
                                        <span className="stat-label">Top Speed</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">1,578 hp</span>
                                        <span className="stat-label">Power</span>
                                    </div>
                                </div>
                                <div className="popular__footer">
                                    <h3 className="popular__price">$8.6M</h3>
                                    <Link to="/model/bugatti/bugatti_centodieci" className="button btn-premium">
                                        Explore <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="popular__card">
                                <h1 className="popular__title">FERRARI</h1>
                                <h3 className="popular__subtitle">296 GTB</h3>
                                <div className="popular__img-wrapper">
                                    <img src={ferrari_296gtb_img} alt="Ferrari 296 GTB" className="popular__img" loading="lazy" />
                                </div>
                                <div className="popular__data">
                                    <div className="popular__data-group">
                                        <span className="stat-value">2.3s</span>
                                        <span className="stat-label">0-100</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">330 km/h</span>
                                        <span className="stat-label">Top Speed</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">830 hp</span>
                                        <span className="stat-label">Power</span>
                                    </div>
                                </div>
                                <div className="popular__footer">
                                    <h3 className="popular__price">$323K</h3>
                                    <Link to="/model/ferrari/ferrari_296gtb" className="button btn-premium">
                                        Explore <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="popular__card">
                                <h1 className="popular__title">LAMBORGHINI</h1>
                                <h3 className="popular__subtitle">Revuelto</h3>
                                <div className="popular__img-wrapper">
                                    <img src={lamborghini_revuelto_img} alt="Lamborghini Revuelto" className="popular__img" loading="lazy" />
                                </div>
                                <div className="popular__data">
                                    <div className="popular__data-group">
                                        <span className="stat-value">1.9s</span>
                                        <span className="stat-label">0-100</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">250 km/h</span>
                                        <span className="stat-label">Top Speed</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">1,000 hp</span>
                                        <span className="stat-label">Power</span>
                                    </div>
                                </div>
                                <div className="popular__footer">
                                    <h3 className="popular__price">$605K</h3>
                                    <Link to="/model/lamborghini/lamborghini_revuelto" className="button btn-premium">
                                        Explore <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="popular__card">
                                <h1 className="popular__title">ROLLS-ROYCE</h1>
                                <h3 className="popular__subtitle">Spectre</h3>
                                <div className="popular__img-wrapper">
                                    <img src={rollroyce_spectre_img} alt="Rolls-Royce Spectre" className="popular__img" loading="lazy" />
                                </div>
                                <div className="popular__data">
                                    <div className="popular__data-group">
                                        <span className="stat-value">2.4s</span>
                                        <span className="stat-label">0-100</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">480 km/h</span>
                                        <span className="stat-label">Top Speed</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">1,500 hp</span>
                                        <span className="stat-label">Power</span>
                                    </div>
                                </div>
                                <div className="popular__footer">
                                    <h3 className="popular__price">$423K</h3>
                                    <Link to="/model/rollsroyce/rollsroyce_spectre" className="button btn-premium">
                                        Explore <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*--------------------     F1 coming section    --------------------- */}
                <section className="section f1" id="f1">
                    <div className="f1__media">
                        <img src={f1} alt="" className="f1__bg" aria-hidden="true" loading="lazy" />
                        <div className="f1__scrim"></div>
                    </div>
                    <div className="container f1__container">
                        <div className="row align-items-center g-4">
                            <div className="col-lg-6">
                                <span className="section__kicker section__kicker--accent">Next Chapter</span>
                                <h2 className="f1__title">
                                    Motorsport Is
                                    <br />
                                    Coming to NFS
                                </h2>
                                <p className="f1__description">
                                    Rev up your excitement — our Formula 1 coverage is about to hit the track, delivering the
                                    ultimate rush of car intelligence like never before. Get ready to accelerate into the future
                                    of automotive knowledge.
                                </p>
                                <Link className="button button--solid" to="/login">
                                    Review F1 Team <span className="button__arrow">&rarr;</span>
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <div className="f1__car-frame">
                                    <img src={f1_car} alt="Formula 1 car" className="f1__car" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*--------------------     Most Viewed    --------------------- */}
                <section className="section section--surface popular container" id="most">
                    <div className="section__header">
                        <span className="section__kicker">Community Favorites</span>
                        <h2 className="section__title section__title--left">Most Viewed Cars</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="popular__card">
                                <h1 className="popular__title">BUGATTI</h1>
                                <h3 className="popular__subtitle">Chiron Sports</h3>
                                <div className="popular__img-wrapper">
                                    <img src={bugatti_chiron_img} alt="Bugatti Chiron Sports" className="popular__img" loading="lazy" />
                                </div>
                                <div className="popular__data">
                                    <div className="popular__data-group">
                                        <span className="stat-value">3.2s</span>
                                        <span className="stat-label">0-100</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">480 km/h</span>
                                        <span className="stat-label">Top Speed</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">1,500 hp</span>
                                        <span className="stat-label">Power</span>
                                    </div>
                                </div>
                                <div className="popular__footer">
                                    <h3 className="popular__price">$3.3M</h3>
                                    <Link to="/model/bugatti/bugatti_chiron" className="button btn-premium">
                                        Explore <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="popular__card">
                                <h1 className="popular__title">LAMBORGHINI</h1>
                                <h3 className="popular__subtitle">Centenario</h3>
                                <div className="popular__img-wrapper">
                                    <img src={lamborghini_centenario_img} alt="Lamborghini Centenario" className="popular__img" loading="lazy" />
                                </div>
                                <div className="popular__data">
                                    <div className="popular__data-group">
                                        <span className="stat-value">2.4s</span>
                                        <span className="stat-label">0-100</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">350 km/h</span>
                                        <span className="stat-label">Top Speed</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">770 hp</span>
                                        <span className="stat-label">Power</span>
                                    </div>
                                </div>
                                <div className="popular__footer">
                                    <h3 className="popular__price">$2.3M</h3>
                                    <Link to="/model/lamborghini/lamborghini_centenario" className="button btn-premium">
                                        Explore <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="popular__card">
                                <h1 className="popular__title">KOENIGSEGG</h1>
                                <h3 className="popular__subtitle">Jesko</h3>
                                <div className="popular__img-wrapper">
                                    <img src={koenigsegg_jesko_img} alt="Koenigsegg Jesko" className="popular__img" loading="lazy" />
                                </div>
                                <div className="popular__data">
                                    <div className="popular__data-group">
                                        <span className="stat-value">2.3s</span>
                                        <span className="stat-label">0-100</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">530 km/h</span>
                                        <span className="stat-label">Top Speed</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">1,600 hp</span>
                                        <span className="stat-label">Power</span>
                                    </div>
                                </div>
                                <div className="popular__footer">
                                    <h3 className="popular__price">$3.1M</h3>
                                    <Link to="/model/koenigsegg/koenigsegg_jesko" className="button btn-premium">
                                        Explore <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <div className="popular__card">
                                <h1 className="popular__title">FERRARI</h1>
                                <h3 className="popular__subtitle">LaFerrari</h3>
                                <div className="popular__img-wrapper">
                                    <img src={ferrari_laferrari_img} alt="Ferrari LaFerrari" className="popular__img" loading="lazy" />
                                </div>
                                <div className="popular__data">
                                    <div className="popular__data-group">
                                        <span className="stat-value">2.4s</span>
                                        <span className="stat-label">0-100</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">350 km/h</span>
                                        <span className="stat-label">Top Speed</span>
                                    </div>
                                    <div className="popular__data-group">
                                        <span className="stat-value">950 hp</span>
                                        <span className="stat-label">Power</span>
                                    </div>
                                </div>
                                <div className="popular__footer">
                                    <h3 className="popular__price">$1.4M</h3>
                                    <Link to="/model/ferrari/ferrari_laferrari" className="button btn-premium">
                                        Explore <span className="button__arrow">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*--------------------     Brand strip    --------------------- */}
                <section className="section brands" id="logos">
                    <div className="container">
                        <div className="section__header section__header--center">
                            <span className="section__kicker">Trusted Marques</span>
                        </div>
                        <div className="brands__grid">
                            <Link to="/brand/bugatti" className="brands__item">
                                <img src={logo1} alt="Bugatti" loading="lazy" />
                            </Link>
                            <Link to="/brand/ferrari" className="brands__item">
                                <img src={logo2} alt="Ferrari" loading="lazy" />
                            </Link>
                            <Link to="/brand/koenigsegg" className="brands__item">
                                <img src={logo3} alt="Koenigsegg" loading="lazy" />
                            </Link>
                            <Link to="/brand/lamborghini" className="brands__item">
                                <img src={logo4} alt="Lamborghini" loading="lazy" />
                            </Link>
                            <Link to="/brand/rollsroyce" className="brands__item">
                                <img src={logo5} alt="Rolls-Royce" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/*--------------------     Offer / Newsletter section   --------------------- */}
                <section className="section newsletter">
                    <div className="container">
                        <div className="newsletter__panel">
                            <img src={offer_bg} alt="" className="newsletter__bg" aria-hidden="true" loading="lazy" />
                            <div className="newsletter__scrim"></div>
                            <div className="newsletter__content">
                                <span className="section__kicker section__kicker--accent">Stay Ahead</span>
                                <h2 className="newsletter__title">
                                    Get Special Offers
                                    <br />
                                    Before Anyone Else
                                </h2>
                                <p className="newsletter__description">
                                    Be the first to receive exclusive drops, pricing updates and new arrivals from the
                                    world's most desirable car makers — straight to your inbox.
                                </p>
                                <Link to="/subscribe" className="button button--solid">
                                    Subscribe Now <span className="button__arrow">&rarr;</span>
                                </Link>
                            </div>
                            <img src={offer} alt="" className="newsletter__car" aria-hidden="true" loading="lazy" />
                        </div>
                    </div>
                </section>
            </main>
            {/*--------------------     Footer section    --------------------- */}
            <Footer />
        </>
    );
};

export default App;
