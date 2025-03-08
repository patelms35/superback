import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">Superback</span>
                <span className="text-2xl font-bold text-secondary">Cashback</span>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="border-b-2 border-primary text-dark px-1 pt-1 font-medium">
                Home
              </Link>
              <Link to="/stores" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 pt-1 border-b-2 font-medium">
                Stores
              </Link>
              <Link to="/categories" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 pt-1 border-b-2 font-medium">
                Categories
              </Link>
              <Link to="/how-it-works" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 pt-1 border-b-2 font-medium">
                How It Works
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <div className="h-4 w-4 text-gray-400">
                  {FaSearch({})}
                </div>
              </div>
              <input
                type="text"
                placeholder="Search stores..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <Link to="/signin" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition-colors duration-200">
              Sign In
            </Link>
            <Link to="/signup" className="bg-secondary hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
              Sign Up
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <div className="block h-6 w-6">
                  {FaTimes({})}
                </div>
              ) : (
                <div className="block h-6 w-6">
                  {FaBars({})}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="bg-primary bg-opacity-10 border-l-4 border-primary text-primary block pl-3 pr-4 py-2 font-medium"
          >
            Home
          </Link>
          <Link
            to="/stores"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 font-medium"
          >
            Stores
          </Link>
          <Link
            to="/categories"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 font-medium"
          >
            Categories
          </Link>
          <Link
            to="/how-it-works"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 font-medium"
          >
            How It Works
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                <div className="h-5 w-5 text-gray-500">
                  {FaUser({})}
                </div>
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Guest User</div>
              <div className="text-sm font-medium text-gray-500">Not signed in</div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <Link
              to="/signin"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 