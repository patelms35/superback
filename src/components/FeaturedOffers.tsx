import React from 'react';
import { FaTag, FaArrowRight } from 'react-icons/fa';

// Store logo URLs
const storeLogos = {
  amazon: './amazon.png',
  nike: './nike.png',
  apple: './apple.png',
  starbucks: './starbugs.png',
  bestbuy: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/320px-Best_Buy_Logo.svg.png',
  adidas: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/320px-Adidas_Logo.svg.png',
  walmart: './walmart.png',
  target: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/320px-Target_Corporation_logo_%28vector%29.svg.png'
};

interface OfferCardProps {
  storeName: string;
  logoUrl: string;
  cashbackRate: string;
  description: string;
  bgColor: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ 
  storeName, 
  logoUrl, 
  cashbackRate, 
  description, 
  bgColor 
}) => {
  return (
    <div className={`${bgColor} rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{storeName}</h3>
            <div className="flex items-center mt-1">
              <div className="text-secondary mr-1">
                {FaTag({})}
              </div>
              <span className="font-bold text-secondary">{cashbackRate} Cashback</span>
            </div>
          </div>
          <div className="bg-white h-14 w-14 rounded-full flex items-center justify-center shadow-md">
            <img src={logoUrl} alt={storeName} className="h-auto w-10 " />
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-white text-primary border border-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center">
          Get Cashback
          <div className="ml-2">
            {FaArrowRight({})}
          </div>
        </button>
      </div>
    </div>
  );
};

const FeaturedOffers: React.FC = () => {
  const offers = [
    {
      storeName: 'Amazon',
      logoUrl: storeLogos.amazon,
      cashbackRate: '10%',
      description: 'Shop for electronics, clothing, and more with exclusive cashback.',
      bgColor: 'bg-blue-50'
    },
    {
      storeName: 'Nike',
      logoUrl: storeLogos.nike,
      cashbackRate: '15%',
      description: 'Get the latest sportswear and athletic gear with bonus cashback.',
      bgColor: 'bg-green-50'
    },
    {
      storeName: 'Apple',
      logoUrl: storeLogos.apple,
      cashbackRate: '5%',
      description: 'Save on iPhones, MacBooks, and accessories with special rates.',
      bgColor: 'bg-gray-50'
    },
    {
      storeName: 'Starbucks',
      logoUrl: storeLogos.starbucks,
      cashbackRate: '12%',
      description: 'Beauty products and cosmetics with enhanced cashback offers.',
      bgColor: 'bg-pink-50'
    },
    {
      storeName: 'Best Buy',
      logoUrl: storeLogos.bestbuy,
      cashbackRate: '8%',
      description: 'Electronics, appliances, and tech gadgets with cashback rewards.',
      bgColor: 'bg-yellow-50'
    },
    {
      storeName: 'Adidas',
      logoUrl: storeLogos.adidas,
      cashbackRate: '14%',
      description: 'Athletic wear, shoes, and accessories with premium cashback.',
      bgColor: 'bg-indigo-50'
    },
    {
      storeName: 'Walmart',
      logoUrl: storeLogos.walmart,
      cashbackRate: '7%',
      description: 'Everyday essentials and household items with reliable cashback.',
      bgColor: 'bg-blue-50'
    },
    {
      storeName: 'Target',
      logoUrl: storeLogos.target,
      cashbackRate: '9%',
      description: 'Home goods, clothing, and groceries with competitive cashback.',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Featured Cashback Offers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Shop at your favorite stores and earn cashback on every purchase. 
            New offers are added regularly!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              storeName={offer.storeName}
              logoUrl={offer.logoUrl}
              cashbackRate={offer.cashbackRate}
              description={offer.description}
              bgColor={offer.bgColor}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            View All Offers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffers; 