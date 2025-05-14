
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SliderControls from './SliderControls';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  videoId?: string;
}

// Use the same projects data as in the Work page
const projects: Project[] = [{
  id: "1",
  title: "Invisible",
  slug: "invisible-space-museum",
  description: "Virtual Reality Contents",
  imageUrl: "/lovable-uploads/eec176ba-ebab-43a9-bb78-e6f08c59771b.png"
}, {
  id: "2",
  title: "Learn",
  slug: "learn",
  description: "Immersive Virtual Reality Experience",
  imageUrl: "/lovable-uploads/6a322fa7-6135-493f-849b-ca1ad98c7b86.png"
}, {
  id: "3",
  title: "Thermal Trace",
  slug: "project-3",
  description: "XR & Exhibition Design",
  imageUrl: "/lovable-uploads/593420bb-8761-48fc-b4fc-4c74bd31769c.png"
}, {
  id: "4",
  title: "Whispers from the Bottom",
  slug: "project-4",
  description: "Exhibition Design",
  imageUrl: "/lovable-uploads/8f1ac9c4-a3f8-4eed-93d3-859b298cea4d.png"
}, {
  id: "5",
  title: "Seoul Nature history Museum",
  slug: "project-5",
  description: "Brand Renewal and Spatial Design",
  imageUrl: "/lovable-uploads/4c29e171-4bbf-4092-854c-13bf32686e5e.png"
}, {
  id: "6",
  title: "Island",
  slug: "project-6",
  description: "Public Space Design",
  imageUrl: "/lovable-uploads/e4ee8415-921a-44fe-bf59-82af2b5be394.png"
}];

// IMPORTANT: Defining these constants as exports so they can be imported by other components
export const slideTransitionDuration = 500; // Duration in ms
export const autoAdvanceInterval = 5000; // Time between auto-advances in ms

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Function to advance to the next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('right');
      setCurrentIndex(prevIndex => (prevIndex + 1) % projects.length);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, slideTransitionDuration);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('left');
      setCurrentIndex(prevIndex => (prevIndex - 1 + projects.length) % projects.length);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, slideTransitionDuration);
    }
  };

  // Function to go to a specific slide
  const goToSlide = (slideIndex: number) => {
    if (!isTransitioning && slideIndex !== currentIndex) {
      setIsTransitioning(true);
      setSlideDirection(slideIndex > currentIndex ? 'right' : 'left');
      setCurrentIndex(slideIndex);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, slideTransitionDuration);
    }
  };

  // Reset timer when component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Auto-advance slides with proper cleanup
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set up new timer for auto-advance
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, autoAdvanceInterval);

    // Cleanup on unmount or when currentIndex changes
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isTransitioning]); // Added isTransitioning as a dependency

  // Improved slide class calculation for proper looping
  const getSlideClass = (index: number) => {
    // Current slide is fully visible
    if (index === currentIndex) {
      return 'opacity-100 z-10 translate-x-0';
    }

    // Handle the circular relationship for previous slide
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    if (index === prevIndex) {
      return 'opacity-0 z-0 -translate-x-full';
    }

    // Handle the circular relationship for next slide
    const nextIndex = (currentIndex + 1) % projects.length;
    if (index === nextIndex) {
      return 'opacity-0 z-0 translate-x-full';
    }

    // All other slides (positioned based on their relation to current slide)
    return index < currentIndex ? 'opacity-0 z-0 -translate-x-full' : 'opacity-0 z-0 translate-x-full';
  };
  
  return <div className="relative w-full h-[calc(100vh-64px)]">
      {/* Main Slider */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full relative bg-gray-400">
          {projects.map((project, index) => <Link key={index} to={`/project/${project.slug}`} className={`absolute top-0 left-0 w-full h-full ${getSlideClass(index)} transition-all duration-${slideTransitionDuration} ease-in-out group`}>
              <div className="relative w-full h-full overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="slider-image w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.title}
                    </h2>
                    <p className="text-white text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>)}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 right-6 flex space-x-0 border border-white">
          <button onClick={prevSlide} className="nav-button bg-transparent text-white border-r border-white hover:bg-white hover:text-black transition-colors p-2 focus:outline-none" aria-label="Previous slide">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button onClick={nextSlide} className="nav-button bg-transparent text-white hover:bg-white hover:text-black transition-colors p-2 focus:outline-none" aria-label="Next slide">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Show Indicators */}
      <div className="absolute bottom-6 left-6">
        <SliderControls totalSlides={projects.length} currentIndex={currentIndex} goToSlide={goToSlide} prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    </div>;
};

export default Slider;
