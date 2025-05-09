
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowLeft } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  imageUrl?: string;
}

const projects: Project[] = [{
  id: "1",
  title: "Invisible Space Museum",
  slug: "invisible-space-museum",
  description: "An interactive digital museum experience",
  fullDescription: "The Invisible Space Museum is a revolutionary digital experience that combines art, technology, and interactivity in ways never seen before. Visitors can explore virtual galleries featuring works from renowned artists across the globe.",
  imageUrl: "/lovable-uploads/977b5bab-4767-4ae1-affb-77a7381670df.png"
}, {
  id: "2",
  title: "Learn",
  slug: "learn",
  description: "Educational platform for creative professionals",
  fullDescription: "Learn is a comprehensive educational platform designed specifically for creative professionals looking to expand their skills and knowledge in various artistic domains. The platform offers courses, workshops, and resources.",
  imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1964&auto=format&fit=crop"
}, {
  id: "3",
  title: "Project 3",
  slug: "project-3",
  description: "Innovative digital solution for modern problems",
  fullDescription: "Project 3 addresses key challenges in the digital landscape with innovative approaches and cutting-edge technology. This solution streamlines workflows and enhances user experiences.",
  imageUrl: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop"
}, {
  id: "4",
  title: "Project 4",
  slug: "project-4",
  description: "Cutting-edge technology implementation",
  fullDescription: "Project 4 showcases our expertise in implementing the latest technologies to solve complex business problems. This case study demonstrates how we approach technical challenges.",
  imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1936&auto=format&fit=crop"
}, {
  id: "5",
  title: "Project 5",
  slug: "project-5",
  description: "Revolutionary user experience design",
  fullDescription: "Project 5 represents a breakthrough in user experience design, setting new standards for intuitive interfaces and engaging digital interactions. Our approach focuses on user-centered design principles.",
  imageUrl: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=2080&auto=format&fit=crop"
}, {
  id: "6",
  title: "Project 6",
  slug: "project-6",
  description: "Next-generation application framework",
  fullDescription: "Project 6 is our next-generation application framework that enables rapid development of robust, scalable, and maintainable web applications. It incorporates the latest best practices in software engineering.",
  imageUrl: "/lovable-uploads/web1920-S.N.M_대지 1.png"
}];

const ProjectDetail = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-16 px-4 md:px-8 max-w-5xl mx-auto mt-16">
        <Link to="/work" className="inline-flex items-center text-white mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Work
        </Link>
        <h1 className="text-4xl font-bold text-white">Project not found</h1>
      </div>
    </div>;
  }
  
  return <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16 px-4 md:px-8 pb-16">
        <div className="max-w-5xl mx-auto mt-16">
          <Link to="/work" className="inline-flex items-center text-white mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Work
          </Link>
          
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-gray-400 mb-8">{project.description}</p>
          
          {project.imageUrl && (
            <div className="w-full mb-8 relative" style={{ height: "70vh" }}>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full" 
                style={{ objectFit: "contain" }} 
              />
            </div>
          )}
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white text-lg">{project.fullDescription}</p>
          </div>
        </div>
      </main>
    </div>;
};

export default ProjectDetail;
