
import React, { useState } from 'react';
import { Menu, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-full mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <span className="text-white font-medium text-xl sm:text-2xl">
              DK
            </span>
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
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-gray-300 focus:outline-none bg-gray-900/50 p-2 rounded-md">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Redesigned */}
      {mobileMenuOpen && <div className="md:hidden bg-black/95 backdrop-blur-sm px-4 py-4 space-y-1 sm:px-3 absolute w-full border-t border-gray-800 animate-fade-in">
          <Link to="/home" className="flex items-center text-white text-lg hover:bg-gray-800/50 px-4 py-3 rounded-md transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-2">01</span>
            <span>Home</span>
          </Link>
          <Link to="/work" className="flex items-center text-white text-lg hover:bg-gray-800/50 px-4 py-3 rounded-md transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-2">02</span>
            <span>Work</span>
          </Link>
          <Link to="/about" className="flex items-center text-white text-lg hover:bg-gray-800/50 px-4 py-3 rounded-md transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-2">03</span>
            <span>About</span>
          </Link>
          <Link to="/contacts" className="flex items-center text-white text-lg hover:bg-gray-800/50 px-4 py-3 rounded-md transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
            <span className="mr-2">04</span>
            <span>Contacts</span>
          </Link>
        </div>}
    </nav>;
};

export default Navbar;
