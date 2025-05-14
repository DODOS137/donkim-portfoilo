
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slider, { slideTransitionDuration, autoAdvanceInterval } from '../components/Slider';
import SearchBox from '../components/SearchBox';

// Create a separate component for the slider controls
const SliderIndicators = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6;

  // This effect syncs with the auto-advancing slider in the Slider component
  // Reset the counter every time to maintain perfect sync with the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, autoAdvanceInterval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full border border-white transition-all duration-${slideTransitionDuration} ${
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
      <main className="flex relative h-screen">
        <div className="w-1/2 relative border-r border-white/10 flex flex-col justify-between">
          {/* Vertical line on the left */}
          <div className="absolute left-20 top-0 bottom-0 w-px bg-white/10"></div>
          
          {/* Main heading */}
          <div className="absolute left-32 top-1/3 z-10">
            <h1 className="text-7xl font-bold tracking-widest text-white">DOHYUN KIM</h1>
          </div>
          
          <div className="mt-auto mb-32 flex flex-col space-y-6 pl-32">
            {/* Slider indicators */}
            <div>
              <SliderIndicators />
            </div>
            
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
