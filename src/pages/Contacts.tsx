
import React from 'react';
import Navbar from '../components/Navbar';
import { Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contacts = () => {
  return <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto mt-16">
          <h1 className="text-4xl font-bold text-white mb-8">Contacts</h1>
          
          <div className="bg-[#1A1F2C] rounded-xl p-6 md:p-8 shadow-lg">
            <div className="text-white space-y-6">
              {/* Email Contact */}
              <div className="flex items-center space-x-4 hover:bg-[#2A2F3C] p-3 rounded-lg transition-all">
                <div className="bg-[#8B5CF6] p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:dohyon18@nave.com" className="text-white hover:text-[#8B5CF6] transition-colors font-medium">
                    dohyon18@nave.com
                  </a>
                </div>
              </div>
              
              {/* Phone Contact */}
              <div className="flex items-center space-x-4 hover:bg-[#2A2F3C] p-3 rounded-lg transition-all">
                <div className="bg-[#D946EF] p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+12345678900" className="text-white hover:text-[#D946EF] transition-colors font-medium">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              {/* LinkedIn Contact */}
              <div className="flex items-center space-x-4 hover:bg-[#2A2F3C] p-3 rounded-lg transition-all">
                <div className="bg-[#0EA5E9] p-3 rounded-full">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://linkedin.com/in/dohyon" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-[#0EA5E9] transition-colors font-medium">
                    linkedin.com/in/dohyon
                  </a>
                </div>
              </div>
              
              {/* Instagram Contact */}
              <div className="flex items-center space-x-4 hover:bg-[#2A2F3C] p-3 rounded-lg transition-all">
                <div className="bg-[#F97316] p-3 rounded-full">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Instagram</p>
                  <a href="https://instagram.com/dohyon" target="_blank" rel="noopener noreferrer"
                     className="text-white hover:text-[#F97316] transition-colors font-medium">
                    @dohyon
                  </a>
                </div>
              </div>
              
              {/* YouTube Contact */}
              <div className="flex items-center space-x-4 hover:bg-[#2A2F3C] p-3 rounded-lg transition-all">
                <div className="bg-[#ea384c] p-3 rounded-full">
                  <Youtube className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">YouTube</p>
                  <a href="https://youtube.com/@dohyon" target="_blank" rel="noopener noreferrer"
                     className="text-white hover:text-[#ea384c] transition-colors font-medium">
                    youtube.com/@dohyon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};

export default Contacts;
