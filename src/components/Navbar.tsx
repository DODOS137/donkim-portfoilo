
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/#home" className="text-white font-medium text-xl hover:text-gray-300 transition-colors">
              DK
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="/#home" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="/#work" className="text-white hover:text-gray-300 transition-colors">
              Work
            </a>
            <a href="/#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="/#contact" className="text-white hover:text-gray-300 transition-colors">
              Contacts
            </a>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Menu className="w-6 h-6" />
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
          <a 
            href="/#home" 
            className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="/#work" 
            className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </a>
          <a 
            href="/#about" 
            className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="/#contact" 
            className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
