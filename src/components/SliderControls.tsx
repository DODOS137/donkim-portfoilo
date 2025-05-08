
import React from 'react';

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
    <div className="w-full flex justify-center mt-8">
      <div className="flex space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator h-3 w-3 rounded-full border border-white ${
              currentIndex === index ? 'bg-white' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderControls;
