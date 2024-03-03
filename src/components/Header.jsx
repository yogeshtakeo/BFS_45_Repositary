import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <h1>Welcome to My React App</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

