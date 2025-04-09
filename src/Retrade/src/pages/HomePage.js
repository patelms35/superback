import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Mark</h1>
      <div className="services">
        <div className="service-card">
          <h2>Price Estimation</h2>
          <p>Get an estimate for your product</p>
          <Link to="/price-estimation" className="btn">Get Started</Link>
        </div>
        <div className="service-card">
          <h2>Product Posting</h2>
          <p>Post your product for sale</p>
          <Link to="/product-posting" className="btn">Post Now</Link>
        </div>
        <div className="service-card">
          <h2>Technician Booking</h2>
          <p>Book a technician for services</p>
          <Link to="/technician-booking" className="btn">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
