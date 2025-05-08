
import React, { useState } from 'react';
import { Menu, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-full mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/home" className="text-white font-medium text-2xl hover:text-gray-300 transition-colors">
              DK
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Instagram size={20} className="text-white hover:text-black transition-colors" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="border-t border-gray-600 mr-10 w-52 h-0"></div>
            <Link to="/home" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/work" className="text-white hover:text-gray-300 transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link to="/contacts" className="text-white hover:text-gray-300 transition-colors">
              Contacts
            </Link>
            <button className="text-white hover:text-gray-300 transition-colors ml-6">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm0 6h4v4h-4v-4zm-6 0h4v4H4v-4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/home" 
            className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/work" 
            className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contacts" 
            className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
