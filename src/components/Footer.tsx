
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
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
    console.log('Submitted:', { email, message });
    setSubmitted(true);
    setEmail('');
    setMessage('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="bg-black text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@example.com" className="hover:text-gray-300 transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5" />
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5" />
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            {submitted ? (
              <div className="bg-green-800 bg-opacity-20 border border-green-500 p-4 rounded-md">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email address"
                    className="bg-gray-900 border-gray-700 focus:border-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Your message"
                    rows={4}
                    className="w-full bg-gray-900 border border-gray-700 focus:border-white rounded-md px-3 py-2 text-sm"
                  />
                </div>
                <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} DK. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/home" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Contacts</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
