
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SearchBox from '../components/SearchBox';

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 relative flex">
        <div className="w-1/2 relative flex flex-col justify-center">
          <div className="px-20 py-10 text-white">
            <h1 className="text-6xl font-bold tracking-wide">DOHYUN KIM</h1>
          </div>
          
          <div className="absolute bottom-32 left-8">
            <SearchBox />
          </div>
        </div>
        <div className="w-1/2">
          <Slider />
        </div>
      </main>
    </div>
  );
};

export default Home;
