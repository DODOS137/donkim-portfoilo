
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SliderControlsProps {
  totalSlides: number;
  currentIndex: number;
  goToSlide: (index: number) => void;
  prevSlide: () => void;
  nextSlide: () => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  totalSlides,
  currentIndex,
  goToSlide,
  prevSlide,
  nextSlide
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Dots indicator - visible on mobile */}
      <div className="flex space-x-3 md:hidden">
        {Array.from({
          length: totalSlides
        }).map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToSlide(index)} 
            className={`indicator w-2 h-2 rounded-full border border-white ${currentIndex === index ? 'bg-white' : 'bg-transparent'}`} 
            aria-label={`Go to slide ${index + 1}`} 
          />
        ))}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex space-x-3">
        <button 
          onClick={prevSlide} 
          className="bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft size={16} className="text-white" />
        </button>
        <button 
          onClick={nextSlide} 
          className="bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SliderControls;
