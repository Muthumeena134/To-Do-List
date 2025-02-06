// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Pages/styles.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
