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
      {/* Dots indicator */}
      
      
      {/* Navigation buttons */}
      
    </div>;
};
export default SliderControls;