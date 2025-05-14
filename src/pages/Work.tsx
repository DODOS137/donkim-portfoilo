
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  videoId?: string;
  koreanDescription?: string; // Added for consistency
}

const projects: Project[] = [
  {
    id: "1",
    title: "Invisible Space Museum",
    slug: "invisible-space-museum",
    description: "XR & Exhibition Design",
    imageUrl: "/lovable-uploads/74e7f7a1-afe3-4fee-b39f-99d5957f0153.png"
  },
  {
    id: "2",
    title: "Learn",
    slug: "learn",
    description: "XR & Exhibition Design",
    imageUrl: "/lovable-uploads/6ff8ff68-cb39-448d-bab7-4fe73134f9d3.png"
  },
  {
    id: "3",
    title: "Thermal Trace",
    slug: "project-3",
    description: "XR & Exhibition Design",
    imageUrl: "/lovable-uploads/593420bb-8761-48fc-b4fc-4c74bd31769c.png"
  },
  {
    id: "4",
    title: "Whispers from the Bottom",
    slug: "project-4",
    description: "XR & Exhibition Design",
    imageUrl: "/lovable-uploads/8f1ac9c4-a3f8-4eed-93d3-859b298cea4d.png"
  },
  {
    id: "5",
    title: "Seoul Nature history Museum",
    slug: "project-5",
    description: "XR & Exhibition Design",
    imageUrl: "/lovable-uploads/4c29e171-4bbf-4092-854c-13bf32686e5e.png"
  },
  {
    id: "6",
    title: "Island",
    slug: "project-6",
    description: "XR & Exhibition Design",
    imageUrl: "/lovable-uploads/e4ee8415-921a-44fe-bf59-82af2b5be394.png"
  }
];

const Work = () => {
  return <div className="min-h-screen bg-black overflow-y-auto">
      <Navbar />
      <main className="pt-16 px-4 md:px-8 pb-16">
        <div className="max-w-5xl mx-auto mt-16">
          <h1 className="text-4xl font-bold text-white mb-8">Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={`/project/${project.slug}`}
                className="bg-[#333] aspect-video flex items-center justify-center group relative overflow-hidden hover:bg-[#444] transition-colors duration-300"
              >
                {project.imageUrl && (
                  <div className="absolute inset-0 opacity-80 group-hover:opacity-50 transition-opacity">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center flex-col space-y-2 p-4 z-10">
                  <p className="text-white text-center text-xl font-medium">{project.title}</p>
                  <p className="text-gray-300 text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>;
};

export default Work;
