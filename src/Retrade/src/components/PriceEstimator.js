import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/PriceEstimator.css';

const PriceEstimator = ({ setProductData, productData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    brand: '',
    model: '',
    condition: '',
    age: '',
    accessories: []
  });
  
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  
  const categories = ['Smartphone', 'Laptop', 'Tablet', 'Camera', 'Gaming Console'];
  const brands = {
    Smartphone: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
    Laptop: ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus'],
    Tablet: ['Apple', 'Samsung', 'Microsoft', 'Lenovo'],
    Camera: ['Canon', 'Nikon', 'Sony', 'Fujifilm'],
    'Gaming Console': ['Sony', 'Microsoft', 'Nintendo']
  };
  const conditions = ['Like New', 'Excellent', 'Good', 'Fair', 'Poor'];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        accessories: [...formData.accessories, value]
      });
    } else {
      setFormData({
        ...formData,
        accessories: formData.accessories.filter(item => item !== value)
      });
    }
  };
  
  const calculateEstimatedPrice = () => {
    // This would typically involve a complex algorithm or API call
    // For demo purposes, we'll use a simple calculation
    let basePrice = 0;
    
    switch (formData.category) {
      case 'Smartphone':
        basePrice = 500;
        break;
      case 'Laptop':
        basePrice = 800;
        break;
      case 'Tablet':
        basePrice = 400;
        break;
      case 'Camera':
        basePrice = 600;
        break;
      case 'Gaming Console':
        basePrice = 350;
        break;
      default:
        basePrice = 300;
    }
    
    // Apply brand factor
    if (formData.brand === 'Apple') basePrice *= 1.5;
    
    // Apply condition factor
    switch (formData.condition) {
      case 'Like New':
        basePrice *= 1;
        break;
      case 'Excellent':
        basePrice *= 0.85;
        break;
      case 'Good':
        basePrice *= 0.7;
        break;
      case 'Fair':
        basePrice *= 0.5;
        break;
      case 'Poor':
        basePrice *= 0.3;
        break;
      default:
        basePrice *= 0.5;
    }
    
    // Apply age depreciation
    const ageInYears = parseInt(formData.age) || 0;
    basePrice *= Math.max(0.4, 1 - (ageInYears * 0.15));
    
    // Add value for accessories
    const accessoryValue = formData.accessories.length * 20;
    
    return Math.round(basePrice + accessoryValue);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const price = calculateEstimatedPrice();
    setEstimatedPrice(price);
    setProductData({
      ...productData,
      ...formData,
      estimatedPrice: price
    });
  };
  
  const handleContinue = () => {
    navigate('/product-posting');
  };
  
  return (
    <div className="price-estimator">
      <h2 className="estimator-title">Get an Estimated Price for Your Device</h2>
      
      <form onSubmit={handleSubmit} className="estimator-form">
        <div className="form-group">
          <label className="form-label">Category</label>
          <select 
            className="form-select" 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {formData.category && (
          <div className="form-group">
            <label className="form-label">Brand</label>
            <select 
              className="form-select" 
              name="brand" 
              value={formData.brand} 
              onChange={handleChange}
              required
            >
              <option value="">Select Brand</option>
              {brands[formData.category].map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        )}
        
        <div className="form-group">
          <label className="form-label">Model</label>
          <input 
            type="text" 
            className="form-input" 
            name="model" 
            value={formData.model} 
            onChange={handleChange}
            placeholder="e.g. iPhone 13 Pro, Galaxy S21"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Condition</label>
          <select 
            className="form-select" 
            name="condition" 
            value={formData.condition} 
            onChange={handleChange}
            required
          >
            <option value="">Select Condition</option>
            {conditions.map(condition => (
              <option key={condition} value={condition}>{condition}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label">Age (in years)</label>
          <input 
            type="number" 
            className="form-input" 
            name="age" 
            value={formData.age} 
            onChange={handleChange}
            min="0"
            max="10"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Accessories</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                value="Original Charger" 
                checked={formData.accessories.includes('Original Charger')}
                onChange={handleCheckboxChange}
              />
              Original Charger
            </label>
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                value="Original Box" 
                checked={formData.accessories.includes('Original Box')}
                onChange={handleCheckboxChange}
              />
              Original Box
            </label>
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                value="Headphones" 
                checked={formData.accessories.includes('Headphones')}
                onChange={handleCheckboxChange}
              />
              Headphones
            </label>
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                value="Case/Cover" 
                checked={formData.accessories.includes('Case/Cover')}
                onChange={handleCheckboxChange}
              />
              Case/Cover
            </label>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary">Calculate Estimate</button>
      </form>
      
      {estimatedPrice && (
        <div className="estimate-result">
          <h3>Estimated Price</h3>
          <div className="price-value">${estimatedPrice}</div>
          <p className="price-note">This is an estimated value based on your device details</p>
          <button onClick={handleContinue} className="btn btn-primary">Continue to Product Posting</button>
        </div>
      )}
    </div>
  );
};

export default PriceEstimator;
