import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowLeft } from 'lucide-react';
import YouTube from 'react-youtube';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  imageUrl?: string;
  secondaryImageUrl?: string;
  videoId?: string; // Added videoId field for YouTube videos
  koreanDescription?: string; // Added field for Korean description
}

const projects: Project[] = [
  {
    id: "1",
    title: "Invisible Space Museum",
    slug: "invisible-space-museum",
    description: "An interactive digital museum experience",
    fullDescription: "The Invisible Space Museum is a revolutionary digital experience that combines art, technology, and interactivity in ways never seen before. Visitors can explore virtual galleries featuring works from renowned artists across the globe.",
    imageUrl: "/lovable-uploads/977b5bab-4767-4ae1-affb-77a7381670df.png",
    videoId: "dQw4w9WgXcQ" // Sample video ID
  }, {
    id: "2",
    title: "Learn",
    slug: "learn",
    description: "Educational platform for creative professionals",
    fullDescription: "Learn is a comprehensive educational platform designed specifically for creative professionals looking to expand their skills and knowledge in various artistic domains. The platform offers courses, workshops, and resources.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1964&auto=format&fit=crop",
    videoId: "jNQXAC9IVRw" // Sample video ID
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
    title: "Seoul Natural History Museum",
    slug: "project-5",
    description: "Brand Renewal and Environmental Design",
    fullDescription: "The Seodaemun Natural History Museum is dedicated to preserving, researching, and exhibiting geological and biological evidence and records related to Korea's regional environment. Notably, it is recognized as the first natural history museum in South Korea established by a public institution.",
    imageUrl: "/lovable-uploads/4c29e171-4bbf-4092-854c-13bf32686e5e.png",
    videoId: "8GEK3igRom0",
    // Updated video ID for Seoul Natural History Museum
    secondaryImageUrl: "/lovable-uploads/64773a01-61f1-46bc-8953-87f1a74a756a.png" // Added project info image
  }, {
    id: "6",
    title: "Project 6",
    slug: "project-6",
    description: "Next-generation application framework",
    fullDescription: "Project 6 is our next-generation application framework that enables rapid development of robust, scalable, and maintainable web applications. It incorporates the latest best practices in software engineering.",
    imageUrl: "/lovable-uploads/web1920-S.N.M_대지 1.png"
  }
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string; }>();
  const project = projects.find(p => p.slug === slug);

  // YouTube video options
  const videoOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

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
        <div className="max-w-full mx-auto mt-16">
          <Link to="/work" className="inline-flex items-center text-white mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Work
          </Link>
          
          {project.imageUrl && <div className="w-full mb-8">
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-contain" />
            </div>}
          
          {/* Title and description moved between image and video */}
          {project.slug === "project-5" && project.fullDescription && <div className="mt-6 text-white p-6 rounded-xl bg-black bg-opacity-60 mb-8">
              <h1 className="font-bold mb-4 text-3xl my-0 py-[30px]">{project.title}</h1>
              
              <p className="leading-relaxed text-xl py-0 my-[50px]">
                {project.fullDescription}
              </p>
            </div>}
            
          {project.slug !== "project-5" && project.fullDescription && <div className="prose prose-invert max-w-none mb-8 rounded-3xl">
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              {project.fullDescription}
            </div>}
          
          {/* YouTube Video Section - Moved after text content */}
          {project.videoId && <div className="w-full mb-10">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-gray-900 overflow-hidden rounded-lg">
                  <YouTube videoId={project.videoId} opts={videoOptions} className="w-full h-full" />
                </AspectRatio>
              </div>
            </div>}
          
          {/* Project info image section - Added below video */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Project Information" className="w-full h-auto object-contain" src="/lovable-uploads/156e341c-46d4-400d-916d-942aa675ab4e.png" />
            </div>}
          
          {/* Add third image section - Project 5 detailed mockup */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Project Details" className="w-full h-auto object-contain" src="/lovable-uploads/0234df00-39cf-4afe-bd8a-cb7b2a5bdbc8.png" />
            </div>}
          
          {/* Image section 4 - Site Selection */}
          {project.slug === "project-5" && <div className="w-full my-10">
              
              <img alt="Site Selection" className="w-full h-auto object-contain" src="/lovable-uploads/bcd77b77-5980-4b25-8c77-668dc97cf557.png" />
              <div className="mt-4 text-gray-300">
                
                
              </div>
            </div>}
          
          {/* Image section 5 - Context & Problem Analysis */}
          {project.slug === "project-5" && <div className="w-full my-10">
              
              <img alt="Context & Problem Analysis" className="w-full h-auto object-contain" src="/lovable-uploads/b4236ac5-2c03-4dfa-a337-b06457754639.png" />
            </div>}
          
          {/* Image section 6 - New Museum Perspective */}
          {project.slug === "project-5" && <div className="w-full my-10">
              
              <img alt="New Museum Perspective" className="w-full h-auto object-contain" src="/lovable-uploads/10edf164-4c9f-4915-a779-5bb928aeed8b.png" />
            </div>}
          
          {/* Image section 7 - Floor Plan / Spatial Design */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <h2 className="text-white text-2xl font-medium mb-6">Floor Plan / Spatial Design</h2>
              <img alt="Floor Plan and Spatial Design" className="w-full h-auto object-contain" src="/lovable-uploads/543f4a31-e026-4287-93b1-9d97726ffd62.png" />
          </div>}
          
          {/* Image section 8 - Material Board */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <h2 className="text-white text-2xl font-medium mb-6">Material Board</h2>
              <img alt="Material Board" className="w-full h-auto object-contain" src="/lovable-uploads/f78916e1-3e8d-4406-a661-7d7cba705ddc.png" />
          </div>}
          
          {/* Image section 9 - Exhibition Planning and Design */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <h2 className="text-white text-2xl font-medium mb-6">Exhibition Planning and Design</h2>
              <img alt="Exhibition Planning and Design" className="w-full h-auto object-contain" src="/lovable-uploads/97ef87b6-e735-4ec8-8a3e-8d0b2c47b6d0.png" />
          </div>}
          
          {/* Image section 10 & 11 - Final Concept Images */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <h2 className="text-white text-2xl font-medium mb-6">Final Concept Images</h2>
              <img alt="Final Concept Images - Reception Desk" className="w-full h-auto object-contain mb-10" src="/lovable-uploads/839373a9-1ab5-4d36-b558-6757058f4cec.png" />
              <img alt="Final Concept Images - Interior View" className="w-full h-auto object-contain" src="/lovable-uploads/f7628bae-fd34-4940-9ced-e423e8d47a3f.png" />
          </div>}
          
          {/* Korean description section for Seoul project */}
          {project.koreanDescription && <div className="mt-6 bg-white/10 text-white p-6 rounded-xl backdrop-blur-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-2">서울자연사박물관 프로젝트 소개</h2>
              <p className="text-base leading-relaxed">
                {project.koreanDescription}
              </p>
            </div>}
          
          {/* Added second image section */}
          {project.secondaryImageUrl && project.slug !== "project-5" && <div className="w-full mt-10 mb-8">
              <img src={project.secondaryImageUrl} alt={`${project.title} - additional image`} className="w-full h-auto object-contain" />
            </div>}
        </div>
      </main>
    </div>;
};

export default ProjectDetail;
