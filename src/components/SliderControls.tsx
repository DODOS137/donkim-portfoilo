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
  return <div className="flex flex-col gap-4">
      {/* Dots indicator - visible on mobile */}
      <div className="flex space-x-3 md:hidden">
        {Array.from({
        length: totalSlides
      }).map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`indicator w-2 h-2 rounded-full border border-white ${currentIndex === index ? 'bg-white' : 'bg-transparent'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
      
      {/* Navigation buttons - improved for mobile */}
      <div className="flex space-x-0 border border-white backdrop-blur-sm bg-transparent">
        <button onClick={prevSlide} className="nav-button p-2 sm:p-3 hover:bg-white hover:text-black active:bg-white/90 active:text-black transition-colors text-white" aria-label="Previous slide">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="border-r border-white h-full"></div>
        <button onClick={nextSlide} className="nav-button p-2 sm:p-3 hover:bg-white hover:text-black active:bg-white/90 active:text-black transition-colors text-white" aria-label="Next slide">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>;
};
export default SliderControls;