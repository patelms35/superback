import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">SellSmart</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/price-estimation" className="nav-link">Sell Device</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">How It Works</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">About Us</Link>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="#" className="btn btn-secondary">Login</Link>
          <Link to="#" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
