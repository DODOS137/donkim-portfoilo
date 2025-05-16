
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider, { slideTransitionDuration, autoAdvanceInterval } from '../components/Slider';
import SearchBox from '../components/SearchBox';
import { Button } from '../components/ui/button';

// Create a separate component for the slider controls
const SliderIndicators = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 6;

  // This effect syncs with the auto-advancing slider in the Slider component
  // Reset the counter every time to maintain perfect sync with the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, autoAdvanceInterval);
    return () => clearInterval(timer);
  }, []);
  return <div className="flex space-x-3">
      {Array.from({
      length: totalSlides
    }).map((_, index) => <div key={index} className={`h-2 w-2 rounded-full border border-white transition-all duration-${slideTransitionDuration} ${currentIndex === index ? 'bg-white' : 'bg-transparent'}`} />)}
    </div>;
};

const Home = () => {
  return <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="flex flex-col md:flex-row relative h-screen">
        <div className="w-full md:w-1/2 relative md:border-r border-white/10 flex flex-col justify-between order-2 md:order-1">
          {/* Vertical line on the left - visible only on desktop */}
          <div className="absolute left-20 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
          
          {/* Main heading */}
          <div className="absolute left-6 md:left-32 top-1/3 z-10 px-4 md:px-0">
            <h1 className="text-4xl md:text-7xl font-bold tracking-widest text-white">DOHYUN KIM</h1>
            <p className="text-white mt-4">Hello :)</p>
            
            <div className="mt-6">
              <Link to="/about">
                <Button variant="outline" className="border-white transition-colors text-black bg-white my-0">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-auto mb-8 md:mb-32 flex flex-col space-y-6 px-6 md:pl-32 relative z-20">
            {/* Slider indicators */}
            <div>
              <SliderIndicators />
            </div>
            
            {/* Search box */}
            <div className="relative z-20">
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[40vh] md:h-full order-1 md:order-2">
          <Slider />
        </div>
      </main>
    </div>;
};

export default Home;
