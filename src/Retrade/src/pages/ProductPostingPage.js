import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/ProductPostingPage.css';

const ProductPostingPage = ({ productData, setProductData }) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState({
    photos: [],
    video: null,
    bill: null
  });
  
  // Using existing product data from price estimation
  const [formData, setFormData] = useState({
    title: `${productData.brand || ''} ${productData.model || ''}`.trim() || '',
    description: '',
    additionalDetails: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    
    if (name === 'photos') {
      // Allow multiple photos
      setFiles({
        ...files,
        photos: [...files.photos, ...Array.from(selectedFiles)]
      });
    } else {
      // Single file for video and bill
      setFiles({
        ...files,
        [name]: selectedFiles[0]
      });
    }
  };
  
  const removePhoto = (index) => {
    const updatedPhotos = [...files.photos];
    updatedPhotos.splice(index, 1);
    setFiles({
      ...files,
      photos: updatedPhotos
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine all product data
    setProductData({
      ...productData,
      ...formData,
      files: {
        photosCount: files.photos.length,
        hasVideo: !!files.video,
        hasBill: !!files.bill
      }
    });
    
    navigate('/technician-booking');
  };
  
  return (
    <div className="product-posting-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Post Your Product</h1>
          <p className="page-description">
            Complete the details below to list your device for sale.
            Add high-quality photos and videos to increase your chances of a quick sale.
          </p>
        </div>
        
        <div className="steps-indicator">
          <div className="step completed">
            <div className="step-number">1</div>
            <div className="step-label">Price Estimation</div>
          </div>
          <div className="step active">
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
        
        <div className="product-posting-form-container">
          <div className="estimated-price-summary">
            <h3>Estimated Price: ${productData.estimatedPrice || '0'}</h3>
            <p>Based on your {productData.brand} {productData.model} in {productData.condition} condition</p>
          </div>
          
          <form onSubmit={handleSubmit} className="product-posting-form">
            <div className="form-section">
              <h3 className="section-heading">Product Details</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange}
                    placeholder="Product Title"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea 
                  className="form-input form-textarea" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange}
                  placeholder="Describe your product in detail..."
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label className="form-label">Additional Details (optional)</label>
                <textarea 
                  className="form-input form-textarea" 
                  name="additionalDetails" 
                  value={formData.additionalDetails} 
                  onChange={handleChange}
                  placeholder="Any additional information about your device..."
                  rows="3"
                ></textarea>
              </div>
            </div>
            
            <div className="form-section">
              <h3 className="section-heading">Media Upload</h3>
              
              <div className="form-group">
                <label className="form-label">Product Photos (Up to 5)</label>
                <div className="upload-container">
                  <input 
                    type="file" 
                    name="photos" 
                    id="photos" 
                    onChange={handleFileChange}
                    accept="image/*" 
                    multiple 
                    className="file-input"
                    disabled={files.photos.length >= 5}
                  />
                  <label htmlFor="photos" className={`upload-button ${files.photos.length >= 5 ? 'disabled' : ''}`}>
                    <i className="upload-icon">+</i>
                    <span>Upload Photos</span>
                  </label>
                  
                  <div className="upload-preview">
                    {files.photos.map((photo, index) => (
                      <div key={index} className="preview-item">
                        <img src={URL.createObjectURL(photo)} alt={`Preview ${index}`} />
                        <button type="button" className="remove-button" onClick={() => removePhoto(index)}>×</button>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="upload-hint">Upload clear images of your device from different angles</p>
              </div>
              
              <div className="form-group">
                <label className="form-label">Product Video (Optional)</label>
                <div className="upload-container">
                  <input 
                    type="file" 
                    name="video" 
                    id="video" 
                    onChange={handleFileChange}
                    accept="video/*" 
                    className="file-input"
                  />
                  <label htmlFor="video" className="upload-button">
                    <i className="upload-icon">+</i>
                    <span>Upload Video</span>
                  </label>
                  
                  {files.video && (
                    <div className="video-preview">
                      <video controls>
                        <source src={URL.createObjectURL(files.video)} type={files.video.type} />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
                <p className="upload-hint">A short video showing your device in working condition</p>
              </div>
              
              <div className="form-group">
                <label className="form-label">Purchase Bill (Optional)</label>
                <div className="upload-container">
                  <input 
                    type="file" 
                    name="bill" 
                    id="bill" 
                    onChange={handleFileChange}
                    accept="image/*,application/pdf" 
                    className="file-input"
                  />
                  <label htmlFor="bill" className="upload-button">
                    <i className="upload-icon">+</i>
                    <span>Upload Bill</span>
                  </label>
                  
                  {files.bill && (
                    <div className="bill-preview">
                      {files.bill.type.includes('image') ? (
                        <img src={URL.createObjectURL(files.bill)} alt="Bill preview" />
                      ) : (
                        <div className="pdf-preview">PDF Document</div>
                      )}
                    </div>
                  )}
                </div>
                <p className="upload-hint">Uploading the purchase bill can increase your selling price</p>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/price-estimation')}>Back</button>
              <button type="submit" className="btn btn-primary">Continue to Technician Booking</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPostingPage;
