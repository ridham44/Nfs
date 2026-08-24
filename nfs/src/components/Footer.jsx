import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import getCurrentDate from '../js/Date';

const Footer = () => {
    const date = getCurrentDate();
    return (
        <>
            <footer className="footer glass-footer">
                <div className="footer__container container">
                    {/* First Column */}
                    <div className="footer__content">
                        <Link to="/" className="footer__logo">NFS Platform</Link>
                        <p className="footer__description">
                            Dive into a premium hub of automotive excellence. 
                            From hypercar specifications to legacy brand profiles, 
                            experience the pinnacle of automotive engineering.
                        </p>
                    </div>

                    {/* Second Column */}
                    <div className="footer__content">
                        <h3 className="footer__title">Company</h3>
                        <div className="footer__links">
                            <ul className="footer__links__list">
                                <li>
                                    <Link to="/PrivatePolicy" className="footer__link">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/AboutUs" className="footer__link">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="footer__content">
                        <h3 className="footer__title">Contact</h3>
                        <p className="footer__description">
                            Concierge: +1 (630) 521-6930<br />
                            Email: nfs.car@gmail.com<br />
                            F5JH+3H5 Raritan Township, New Jersey, USA
                        </p>
                    </div>

                    {/* Third Column */}
                    <div className="footer__content">
                        <h3 className="footer__title">Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/nfs.44_/?img_index=1" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://www.youtube.com/channel/UCtbN_9YUU1gckJH8Z3bvOxw" target="_blank" rel="noreferrer" className="social-link" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-bottom">
                <span className="footer__copy">
                    &copy; {date} NFS Automotive Platform. All rights reserved. Designed by Ridham Patel.
                </span>
            </footer>
        </>
    );
};

export default Footer;
