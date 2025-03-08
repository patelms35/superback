import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Payment methods image URL
const paymentMethodsImageUrl = 'https://www.pngitem.com/pimgs/m/4-46283_payment-methods-icons-png-transparent-png.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">Superback</span>
              <span className="text-2xl font-bold text-secondary">Cashback</span>
            </div>
            <p className="text-gray-400 mb-4">
              The smart way to earn cashback on all your online purchases. Shop at your favorite stores and save money.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary transition duration-300">
                {FaFacebook({ size: 20 })}
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary transition duration-300">
                {FaTwitter({ size: 20 })}
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary transition duration-300">
                {FaInstagram({ size: 20 })}
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary transition duration-300">
                {FaLinkedin({ size: 20 })}
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a>
              </li>
              <li>
                <a href="/stores" className="text-gray-400 hover:text-white transition duration-300">All Stores</a>
              </li>
              <li>
                <a href="/categories" className="text-gray-400 hover:text-white transition duration-300">Categories</a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-400 hover:text-white transition duration-300">How It Works</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-400 hover:text-white transition duration-300">Help Center</a>
              </li>
              <li>
                <a href="/faqs" className="text-gray-400 hover:text-white transition duration-300">FAQs</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-primary mt-1 mr-3">
                  {FaMapMarkerAlt({})}
                </div>
                <span className="text-gray-400">123 Cashback Street, Money City, CA 90210</span>
              </li>
              <li className="flex items-center">
                <div className="text-primary mr-3">
                  {FaPhone({})}
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <div className="text-primary mr-3">
                  {FaEnvelope({})}
                </div>
                <span className="text-gray-400">support@superback.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary w-full"
                />
                <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Superback Cashback. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer; 