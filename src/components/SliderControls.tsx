
import React from 'react';
import { autoAdvanceInterval } from './Slider';

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
            className={`indicator w-2 h-2 rounded-full border border-white transition-all duration-${autoAdvanceInterval/1000 * 0.1}s ${currentIndex === index ? 'bg-white' : 'bg-transparent'}`} 
            aria-label={`Go to slide ${index + 1}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default SliderControls;
