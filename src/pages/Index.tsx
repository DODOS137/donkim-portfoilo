
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SearchBox from '../components/SearchBox';

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 relative">
        <Slider />
        <SearchBox />
      </main>
    </div>
  );
};

export default Index;
