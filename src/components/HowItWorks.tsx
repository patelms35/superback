import React from 'react';
import { FaUserPlus, FaStore, FaShoppingCart, FaMoneyBillWave } from 'react-icons/fa';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
        <div className="absolute -top-4 -left-4 bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
          {stepNumber}
        </div>
        <div className="flex flex-col items-center text-center pt-4">
          <div className="text-primary text-4xl mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      {stepNumber < 4 && (
        <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-0">
          <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12H52M52 12L40 1M52 12L40 23" stroke="#3B82F6" strokeWidth="2" />
          </svg>
        </div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FaUserPlus({}),
      title: 'Sign Up for Free',
      description: 'Create your account in seconds. No credit card required.',
      stepNumber: 1
    },
    {
      icon: FaStore({}),
      title: 'Browse Stores',
      description: 'Find your favorite retailers with exclusive cashback rates.',
      stepNumber: 2
    },
    {
      icon: FaShoppingCart({}),
      title: 'Shop Normally',
      description: 'Click through to the store and shop as you normally would.',
      stepNumber: 3
    },
    {
      icon: FaMoneyBillWave({}),
      title: 'Earn Cashback',
      description: 'Cashback is automatically added to your account balance.',
      stepNumber: 4
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How Superback Cashback Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Earning cashback is simple and straightforward. Follow these easy steps to start saving money on your purchases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mt-12">
          {steps.map((step) => (
            <StepCard
              key={step.stepNumber}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={step.stepNumber}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-4">Ready to Start Earning?</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of smart shoppers who are already saving money with Superback Cashback. 
                Sign up today and get a $10 welcome bonus!
              </p>
              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                Create Free Account
              </button>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💰</div>
                <div>
                  <h4 className="text-xl font-bold text-dark mb-2">$10 Welcome Bonus</h4>
                  <p className="text-gray-600">
                    Sign up today and receive a $10 bonus added to your account. 
                    Withdraw once you reach the $25 minimum payout threshold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 