
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SearchBox from '../components/SearchBox';

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="flex relative">
        <div className="w-1/2 h-screen relative border-r border-white/20">
          <div className="absolute left-20 top-1/3">
            <h1 className="text-6xl font-bold tracking-wide text-white">DOHYUN KIM</h1>
          </div>
          
          <div className="absolute bottom-32 left-8">
            <SearchBox />
          </div>
          
          <div className="absolute bottom-64 left-8">
            {/* Slider controls will be positioned here but are rendered inside Slider component */}
          </div>
        </div>
        <div className="w-1/2 h-screen">
          <Slider />
        </div>
      </main>
    </div>
  );
};

export default Home;
