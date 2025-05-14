
import React, { useState, useEffect } from 'react';

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
}) => {
  return (
    <div className="flex space-x-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`indicator h-2 w-2 rounded-full border border-white transition-all duration-500 ${
            currentIndex === index ? 'bg-white' : 'bg-transparent'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderControls;
