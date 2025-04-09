import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TechnicianBookingPage = ({ setProductData, productData }) => {
  const [bookingDetails, setBookingDetails] = useState({
    serviceType: '',
    date: '',
    time: '',
    location: '',
    description: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductData({
      ...productData,
      technicianBooking: bookingDetails
    });
    navigate('/product-preview');
  };

  return (
    <div className="technician-booking-page">
      <h1>Book a Technician</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <select 
            id="serviceType" 
            name="serviceType" 
            value={bookingDetails.serviceType} 
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="repair">Repair</option>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={bookingDetails.date} 
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input 
            type="time" 
            id="time" 
            name="time" 
            value={bookingDetails.time} 
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={bookingDetails.location} 
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Problem Description</label>
          <textarea 
            id="description" 
            name="description" 
            value={bookingDetails.description} 
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn-primary">Book Technician</button>
      </form>
    </div>
  );
};

export default TechnicianBookingPage;
