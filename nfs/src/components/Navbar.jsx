import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import NFSlogo from '../img/NfsLogo.jpg';

const brands = [
  { id: 'bugatti',     name: 'Bugatti',      country: 'France' },
  { id: 'lamborghini', name: 'Lamborghini',  country: 'Italy' },
  { id: 'ferrari',     name: 'Ferrari',      country: 'Italy' },
  { id: 'rollsroyce',  name: 'Rolls-Royce',  country: 'UK' },
  { id: 'astonmartin', name: 'Aston Martin', country: 'UK' },
  { id: 'koenigsegg',  name: 'Koenigsegg',   country: 'Sweden' },
  { id: 'porsche',     name: 'Porsche',      country: 'Germany' },
  { id: 'mclaren',     name: 'McLaren',      country: 'UK' },
  { id: 'pagani',      name: 'Pagani',       country: 'Italy' },
  { id: 'pininfarina', name: 'Pininfarina',  country: 'Italy' },
  { id: 'maserati',    name: 'Maserati',     country: 'Italy' },
  { id: 'rimac',       name: 'Rimac',        country: 'Croatia' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isBrandRoute = location.pathname.startsWith('/brand') || location.pathname.startsWith('/model');

  return (
    <header id="header" className={`glass-header ${scrolled ? 'glass-header--scrolled' : ''}`}>
      <nav className="navbar navbar-expand-md navbar-dark nfs-navbar">
        <div className="container-fluid nfs-navbar__inner">

          {/* Logo */}
          <Link to="/" className="navbar-brand nfs-navbar__brand">
            <img src={NFSlogo} alt="NFS Logo" className="nav-logo" />
            <span className="premium-title">NFS</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler nfs-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nfsNav"
            aria-controls="nfsNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="nfs-toggler__bar" />
            <span className="nfs-toggler__bar" />
            <span className="nfs-toggler__bar" />
          </button>

          {/* Nav links */}
          <div className="collapse navbar-collapse" id="nfsNav">
            <ul className="navbar-nav ms-auto align-items-center gap-1">

              <li className="nav-item">
                <Link className={`nav-link nfs-link ${isActive('/') ? 'nfs-link--active' : ''}`} to="/">
                  Home
                </Link>
              </li>

              {/* Brands mega-dropdown */}
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className={`nav-link nfs-link dropdown-toggle ${isBrandRoute ? 'nfs-link--active' : ''}`}
                  id="brandsDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brands
                </button>
                <div className="dropdown-menu nfs-mega-dropdown" aria-labelledby="brandsDropdown">
                  <div className="nfs-mega-inner">
                    {brands.map((b) => (
                      <Link
                        key={b.id}
                        to={`/brand/${b.id}`}
                        className="nfs-mega-item"
                      >
                        <span className="nfs-mega-name">{b.name}</span>
                        <span className="nfs-mega-country">{b.country}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className={`nav-link nfs-link ${isActive('/subscribe') ? 'nfs-link--active' : ''}`} to="/subscribe">
                  Subscribe
                </Link>
              </li>

              <li className="nav-item ms-2">
                <a
                  href="https://www.instagram.com/nfs.44_/?img_index=1"
                  className="nfs-social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
