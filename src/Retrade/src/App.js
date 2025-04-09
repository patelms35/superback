import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PriceEstimationPage from './pages/PriceEstimationPage';
import ProductPostingPage from './pages/ProductPostingPage';
import TechnicianBookingPage from './pages/TechnicianBookingPage';
import ProductPreviewPage from './pages/ProductPreviewPage';
import './styles/App.css';

function App() {
  const [productData, setProductData] = useState({});
  
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/price-estimation" element={<PriceEstimationPage setProductData={setProductData} productData={productData} />} />
            <Route path="/product-posting" element={<ProductPostingPage setProductData={setProductData} productData={productData} />} />
            <Route path="/technician-booking" element={<TechnicianBookingPage setProductData={setProductData} productData={productData} />} />
            <Route path="/product-preview" element={<ProductPreviewPage productData={productData} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
