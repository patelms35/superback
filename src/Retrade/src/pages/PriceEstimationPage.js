import React from 'react';
import PriceEstimator from '../components/PriceEstimator';
import '../styles/pages/PriceEstimationPage.css';

const PriceEstimationPage = ({ setProductData, productData }) => {
  return (
    <div className="price-estimation-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Estimate Your Device Value</h1>
          <p className="page-description">
            Find out how much your device is worth in just a few steps. 
            Our pricing algorithm gives you the best market value based on your device's details.
          </p>
        </div>
        
        <div className="steps-indicator">
          <div className="step active">
            <div className="step-number">1</div>
            <div className="step-label">Price Estimation</div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-label">Product Posting</div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-label">Technician Booking</div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-label">Product Preview</div>
          </div>
        </div>
        
        <PriceEstimator setProductData={setProductData} productData={productData} />
      </div>
    </div>
  );
};

export default PriceEstimationPage;
