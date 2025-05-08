
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SliderControls from './SliderControls';

interface SlideProps {
  image: string;
  projectName: string;
  link: string;
}

const slides: SlideProps[] = [
  {
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    projectName: "Forest Lights",
    link: "#project1"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    projectName: "Landscape View",
    link: "#project2"
  },
  {
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    projectName: "Nature Walk",
    link: "#project3"
  },
  {
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
    projectName: "Ocean Waves",
    link: "#project4"
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    projectName: "Creative Workspace",
    link: "#project5"
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    projectName: "Code Studio",
    link: "#project6"
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (slideIndex: number) => {
    if (!isTransitioning && slideIndex !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(slideIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    // Optional: Auto-advance slides
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen">
      {/* Main Slider */}
      <div className="w-full h-full flex justify-center items-center overflow-hidden">
        <div className="w-[80%] h-[70%] relative">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`absolute top-0 left-0 w-full h-full ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              } transition-opacity duration-500 ease-in-out group`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.projectName}
                  className="slider-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {slide.projectName}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex space-x-2">
          <button
            onClick={prevSlide}
            className="nav-button bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors p-2 focus:outline-none"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="nav-button bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors p-2 focus:outline-none"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Indicators */}
      <SliderControls
        totalSlides={slides.length}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </div>
  );
};

export default Slider;
