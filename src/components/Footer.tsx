
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
  
  return <footer className="bg-black text-white py-10 md:py-16 mt-8 md:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-2xl font-bold mb-4">Contact Me</h3>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <a href="mailto:dohyon18@nave.com" className="text-white text-sm md:text-base hover:underline">dohyon18@naver.com</a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-lg md:text-2xl font-bold mb-4">Send a Message</h3>
            {submitted ? <div className="bg-green-900/50 border border-green-500 p-4 rounded">
                <p className="text-white text-sm md:text-base">Your message has been sent. I'll get back to you soon!</p>
              </div> : <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <Label htmlFor="email" className="text-white text-sm md:text-base">Email</Label>
                  <Input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className="bg-gray-900 border-gray-700 text-white text-sm md:text-base h-9 md:h-10" required />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white text-sm md:text-base">Message</Label>
                  <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message" className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white text-sm md:text-base min-h-[80px] md:min-h-[100px]" required />
                </div>
                <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 transition-colors h-9 md:h-10 text-sm md:text-base">
                  Send Message
                </Button>
              </form>}
          </div>
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
