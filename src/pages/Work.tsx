
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
    imageUrl: "/lovable-uploads/web1920-S.N.M_대지 1.png"
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
                  <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity">
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
