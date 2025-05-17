
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider, { autoAdvanceInterval } from '../components/Slider';
import SearchBox from '../components/SearchBox';
import { Button } from '../components/ui/button';

// Create a separate component for the slider controls
const SliderIndicators = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6;

  // This effect syncs with the auto-advancing slider in the Slider component
  // using the exact same interval imported from the Slider component
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, autoAdvanceInterval);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="flex space-x-3">
      {Array.from({length: totalSlides}).map((_, index) => (
        <div 
          key={index} 
          className={`h-2 w-2 rounded-full border border-white transition-all duration-500 ${currentIndex === index ? 'bg-white' : 'bg-transparent'}`} 
        />
      ))}
    </div>
  );
};

const Home = () => {
  return <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="flex flex-col md:flex-row relative min-h-[calc(100vh-200px)] md:h-screen">
        <div className="w-full md:w-1/2 relative flex flex-col justify-between order-2 md:order-1 pt-16 md:pt-0 px-4 md:px-0">
          {/* Removing the vertical line that was here */}
          
          {/* Main heading */}
          <div className="md:absolute left-6 md:left-32 top-8 md:top-1/3 z-10 px-0 md:px-0 mt-4 md:mt-0">
            <h1 className="text-3xl md:text-7xl font-bold tracking-wide md:tracking-widest text-white">DOHYUN KIM</h1>
            <p className="text-white mt-2 md:mt-4 text-sm md:text-base">Hello :)</p>
            
            <div className="mt-4 md:mt-6">
              <Link to="/about">
                <Button variant="outline" className="border-white transition-colors text-black bg-white my-0">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-6 md:mt-auto mb-4 md:mb-32 flex flex-col space-y-4 md:space-y-6 px-0 md:pl-32 relative z-20">
            {/* Slider indicators */}
            <div className="hidden md:block">
              <SliderIndicators />
            </div>
            
            {/* Search box */}
            <div className="relative z-20">
              <SearchBox />
            </div>
          </div>
        </div>
        {/* Make the slider visible on mobile devices by removing 'hidden md:block' */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-full order-1 md:order-2">
          <Slider />
        </div>
      </main>
    </div>;
};

export default Home;
