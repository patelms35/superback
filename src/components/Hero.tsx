import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Store logo URLs
const storeLogos = {
  amazon: './amazon.png',
  nike: './nike.png'
};

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Earn Cashback on Every Purchase
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Shop at your favorite stores and earn up to 30% cashback. 
              Join thousands of smart shoppers saving money every day.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary hover:bg-blue-50 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center">
                Start Earning Now
                <div className="ml-2">
                  {FaArrowRight({})}
                </div>
              </button>
              <button className="bg-transparent hover:bg-blue-700 text-white border-2 border-white font-bold py-3 px-6 rounded-lg transition duration-300">
                How It Works
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-accent rounded-full opacity-20"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h3 className="text-primary font-bold text-lg mb-2">Featured Offer</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700 font-medium">Amazon</p>
                      <p className="text-secondary font-bold text-xl">10% Cashback</p>
                    </div>
                    <div className="bg-white p-2 rounded-full h-16 w-16 flex items-center justify-center shadow">
                      <img src={storeLogos.amazon} alt="Amazon" className="h-12 w-auto" />
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-primary font-bold text-lg mb-2">Popular Deal</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700 font-medium">Nike</p>
                      <p className="text-secondary font-bold text-xl">15% Cashback</p>
                    </div>
                    <div className="bg-white p-2 rounded-full h-16 w-16 flex items-center justify-center shadow">
                      <img src={storeLogos.nike} alt="Nike" className="h-12 w-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold">1M+</p>
              <p className="text-blue-200">Happy Users</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">$10M+</p>
              <p className="text-blue-200">Cashback Paid</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">5,000+</p>
              <p className="text-blue-200">Partner Stores</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">4.9/5</p>
              <p className="text-blue-200">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 