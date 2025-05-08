
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SearchBox from '../components/SearchBox';

// Create a separate component for the slider controls
const SliderIndicators = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6;

  // This effect syncs with the auto-advancing slider in the Slider component
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full border border-white ${
            currentIndex === index ? 'bg-white' : 'bg-transparent'
          }`}
        />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="flex relative">
        <div className="w-1/2 h-screen relative border-r border-white/10">
          {/* Vertical line on the left */}
          <div className="absolute left-20 top-0 bottom-0 w-px bg-white/10"></div>
          
          {/* Main heading */}
          <div className="absolute left-32 top-1/3 z-10">
            <h1 className="text-7xl font-bold tracking-widest text-white">DOHYUN KIM</h1>
          </div>
          
          {/* Slider indicators */}
          <div className="absolute bottom-52 left-32">
            <SliderIndicators />
          </div>
          
          {/* Search box */}
          <div className="absolute bottom-32 left-32">
            <SearchBox />
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
