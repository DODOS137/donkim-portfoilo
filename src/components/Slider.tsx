
import React, { useState, useEffect } from 'react';
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
const projects: Project[] = [
  {
    id: "1",
    title: "Invisible Space Museum",
    slug: "invisible-space-museum",
    description: "Virtual Reality Museum Contents",
    imageUrl: "/lovable-uploads/977b5bab-4767-4ae1-affb-77a7381670df.png"
  },
  {
    id: "2",
    title: "Learn",
    slug: "learn",
    description: "Immersive Virtual Reality Experience",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Thermal Trace",
    slug: "project-3",
    description: "A Mixed Reality Fashion Show",
    imageUrl: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Whispers from the Bottom",
    slug: "project-4",
    description: "Exhibition Design",
    imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1936&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Seoul Nature history Museum",
    slug: "project-5",
    description: "Brand Renewal and Environmental Design",
    imageUrl: "/lovable-uploads/4c29e171-4bbf-4092-854c-13bf32686e5e.png"
  },
  {
    id: "6",
    title: "Island",
    slug: "project-6",
    description: "Public Space Design",
    imageUrl: "/lovable-uploads/e4ee8415-921a-44fe-bf59-82af2b5be394.png"
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('right');
      setCurrentIndex(prevIndex => prevIndex === projects.length - 1 ? 0 : prevIndex + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, 500);
    }
  };
  
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('left');
      setCurrentIndex(prevIndex => prevIndex === 0 ? projects.length - 1 : prevIndex - 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, 500);
    }
  };
  
  const goToSlide = (slideIndex: number) => {
    if (!isTransitioning && slideIndex !== currentIndex) {
      setIsTransitioning(true);
      setSlideDirection(slideIndex > currentIndex ? 'right' : 'left');
      setCurrentIndex(slideIndex);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, 500);
    }
  };
  
  useEffect(() => {
    // Auto-advance slides
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  const getSlideClass = (index: number) => {
    if (index === currentIndex) {
      return 'opacity-100 z-10 translate-x-0';
    } else if (slideDirection === 'right' && (currentIndex === 0 && index === projects.length - 1 || index === currentIndex - 1)) {
      return 'opacity-0 z-0 -translate-x-full';
    } else if (slideDirection === 'left' && (currentIndex === projects.length - 1 && index === 0 || index === currentIndex + 1)) {
      return 'opacity-0 z-0 translate-x-full';
    } else if (index < currentIndex) {
      return 'opacity-0 z-0 -translate-x-full';
    } else {
      return 'opacity-0 z-0 translate-x-full';
    }
  };
  
  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      {/* Main Slider */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full relative bg-gray-400">
          {projects.map((project, index) => (
            <Link 
              key={index} 
              to={`/project/${project.slug}`} 
              className={`absolute top-0 left-0 w-full h-full ${getSlideClass(index)} transition-all duration-500 ease-in-out group`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="slider-image w-full h-full object-cover" 
                />
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
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 right-6 flex space-x-0 border border-white">
          <button 
            onClick={prevSlide} 
            className="nav-button bg-transparent text-white border-r border-white hover:bg-white hover:text-black transition-colors p-2 focus:outline-none" 
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextSlide} 
            className="nav-button bg-transparent text-white hover:bg-white hover:text-black transition-colors p-2 focus:outline-none" 
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Indicators - They're now shown inside the Home component */}
      <div className="hidden">
        <SliderControls 
          totalSlides={projects.length} 
          currentIndex={currentIndex} 
          goToSlide={goToSlide} 
          prevSlide={prevSlide} 
          nextSlide={nextSlide} 
        />
      </div>
    </div>
  );
};

export default Slider;
