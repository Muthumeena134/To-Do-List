import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ToggleBar from './ToggleBar';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className="navbar">
        <button onClick={() => setToggle(!toggle)}>☰</button>
        <h1>BBC Clone</h1>
        <SearchBar />
      </div>
      <ToggleBar toggle={toggle} />
    </header>
  );
};

export default Header;
