
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { slideTransitionDuration } from './Slider';

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
      {/* Dots indicator */}
      <div className="flex space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full border border-white cursor-pointer transition-all duration-${slideTransitionDuration} ${
              currentIndex === index ? 'bg-white' : 'bg-transparent'
            }`}
            onClick={() => goToSlide(index)}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex space-x-0 border border-white">
        <button 
          className="bg-black/50 hover:bg-black/70 text-white p-2 transition-colors"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          className="bg-black/50 hover:bg-black/70 text-white p-2 border-l border-white transition-colors"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SliderControls;
