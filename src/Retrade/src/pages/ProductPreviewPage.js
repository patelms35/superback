import React from 'react';

const ProductPreviewPage = ({ productData }) => {
  return (
    <div className="product-preview-page">
      <h1>Product Preview</h1>
      
      {Object.keys(productData).length > 0 ? (
        <div className="preview-container">
          {productData.name && (
            <div className="preview-item">
              <h2>Product Details</h2>
              <p><strong>Name:</strong> {productData.name}</p>
              <p><strong>Description:</strong> {productData.description}</p>
              <p><strong>Price:</strong> ${productData.price}</p>
              {productData.category && <p><strong>Category:</strong> {productData.category}</p>}
              {productData.condition && <p><strong>Condition:</strong> {productData.condition}</p>}
            </div>
          )}
          
          {productData.technicianBooking && (
            <div className="preview-item">
              <h2>Technician Booking Details</h2>
              <p><strong>Service Type:</strong> {productData.technicianBooking.serviceType}</p>
              <p><strong>Date:</strong> {productData.technicianBooking.date}</p>
              <p><strong>Time:</strong> {productData.technicianBooking.time}</p>
              <p><strong>Location:</strong> {productData.technicianBooking.location}</p>
              <p><strong>Description:</strong> {productData.technicianBooking.description}</p>
            </div>
          )}
        </div>
      ) : (
        <p>No product data available. Please complete previous steps first.</p>
      )}
      
      <div className="action-buttons">
        <button onClick={() => window.print()} className="btn-secondary">Print Details</button>
      </div>
    </div>
  );
};

export default ProductPreviewPage;
