// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can style this CSS later

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BBC Clone
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={isMobile ? 'nav-links mobile' : 'nav-links'}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/news" className="nav-link">News</Link></li>
          <li><Link to="/sports" className="nav-link">Sports</Link></li>
          <li><Link to="/weather" className="nav-link">Weather</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
