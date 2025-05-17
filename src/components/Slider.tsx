
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import SliderControls from './SliderControls';

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
  }
];

// IMPORTANT: Defining these constants as exports so they can be imported by other components
export const slideTransitionDuration = 500; // Duration in ms
export const autoAdvanceInterval = 5000; // Time between auto-advances in ms

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Function to go to a specific slide
  const goToSlide = (slideIndex: number) => {
    api?.scrollTo(slideIndex);
    setCurrentIndex(slideIndex);
  };

  // Function to advance to the next slide
  const nextSlide = () => {
    api?.scrollNext();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    api?.scrollPrev();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
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
  }, [currentIndex]);

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap() || 0);
      
      // Reset the auto-advance timer when manually changing slides
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, autoAdvanceInterval);
    };

    api.on("select", onSelect);
    
    // Initial setup
    setCurrentIndex(api.selectedScrollSnap() || 0);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      <Carousel 
        setApi={setApi}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {projects.map((project, index) => (
            <CarouselItem key={project.id} className="h-full">
              <Link to={`/project/${project.slug}`} className="relative w-full h-full overflow-hidden flex justify-center items-center group">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="slider-image w-1/2 h-1/2 md:w-full md:h-full object-contain md:object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center px-4 md:px-0">
                    <h2 className="text-white text-xl md:text-3xl font-bold md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {project.title}
                    </h2>
                    <p className="text-white text-sm md:text-lg mt-1 md:mt-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Show Indicators */}
      <div className="absolute bottom-4 left-4 z-10">
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
