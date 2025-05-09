
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Invisible Space Museum",
    slug: "invisible-space-museum",
    description: "Virtual Reality Museum Contents"
  },
  {
    id: "2",
    title: "Learn",
    slug: "learn",
    description: "Immersive Virtual Reality Experience"
  },
  {
    id: "3",
    title: "Thermal Trace",
    slug: "Thermal Trace",
    description: "A Mixed Reality Fashion Show"
  },
  {
    id: "4",
    title: "Whispers from the Bottom",
    slug: "Whispers from the Bottom",
    description: "Exhibition Design"
  },
  {
    id: "5",
    title: "Seoul Nature history Museum",
    slug: "Seoul Nature history Museum",
    description: "Brand Renewal and Environmental Design"
  },
  {
    id: "6",
    title: "Island",
    slug: "Island",
    description: "Public Space Design"
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
                <div className="absolute inset-0 flex items-center justify-center flex-col space-y-2 p-4">
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
