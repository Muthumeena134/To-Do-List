import React from 'react';
import { Link } from 'react-router-dom';

const ToggleBar = ({ toggle }) => {
  return (
    toggle && (
      <nav className="togglebar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
    )
  );
};

export default ToggleBar;
