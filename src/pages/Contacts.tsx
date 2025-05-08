import React from 'react';
import Navbar from '../components/Navbar';
const Contacts = () => {
  return <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto mt-16">
          <h1 className="text-4xl font-bold text-white mb-8">Contacts</h1>
          <div className="text-white space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-medium">Email:</span>
              <a href="mailto:contact@example.com" className="text-white hover:underline">dohyon18@nave.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-medium">Phone:</span>
              <a href="tel:+1234567890" className="text-white hover:underline">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center space-x-3">
              
              
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Contacts;