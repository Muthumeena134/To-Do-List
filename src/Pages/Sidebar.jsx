// src/components/Sidebar.js
import React from 'react';
import './Pages/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        <li>World</li>
        <li>Business</li>
        <li>Technology</li>
        <li>Science</li>
        <li>Health</li>
        <li>Culture</li>
      </ul>
    </div>
  );
};

export default Sidebar;
