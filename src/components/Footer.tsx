import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Submitted:', {
      email,
      message
    });
    setSubmitted(true);
    setEmail('');
    setMessage('');

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  return <footer className="bg-black text-white py-10 mt-8 md:mt-20 md:py-[5px] my-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Information */}
          
          
          {/* Contact Form */}
          
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm">© {new Date().getFullYear()} DK. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0 text-xs md:text-sm">
            <Link to="/home" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Contacts</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;