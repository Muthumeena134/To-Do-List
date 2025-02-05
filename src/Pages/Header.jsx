// src/components/Header.js
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/sport">Sport</Link></li>
          <li><Link to="/weather">Weather</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
