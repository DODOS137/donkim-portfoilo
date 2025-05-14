
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SearchBox from '../components/SearchBox';

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="flex relative h-screen">
        <div className="w-1/2 relative border-r border-white/10 flex flex-col justify-between">
          {/* Vertical line on the left */}
          <div className="absolute left-20 top-0 bottom-0 w-px bg-white/10"></div>
          
          {/* Main heading */}
          <div className="absolute left-32 top-1/3 z-10">
            <h1 className="text-7xl font-bold tracking-widest text-white">DOHYUN KIM</h1>
          </div>
          
          <div className="mt-auto mb-32 flex flex-col space-y-6 pl-32">
            {/* Search box */}
            <div>
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <Slider />
        </div>
      </main>
    </div>
  );
};

export default Home;
