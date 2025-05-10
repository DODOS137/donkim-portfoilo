import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowLeft } from 'lucide-react';
import YouTube from 'react-youtube';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import ModelViewer from '../components/ModelViewer';
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
  fullDescription: " This project features three robot characters as protagonists and tells a story set in a library after the fall of humanity. It is a comprehensive VR content development process that includes level design, character design, storytelling and spatial design.",
  imageUrl: "/lovable-uploads/6ff8ff68-cb39-448d-bab7-4fe73134f9d3.png"
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
  title: "Island",
  slug: "project-6",
  description: "Public Space Design",
  fullDescription: " This project reimagines a bridge as a public space that captures the unique characteristics of an island. By redesigning the bridge, the project aims to bring the diverse and natural beauty of the island into the urban landscape, allowing city dwellers to experience the island's essence within the city environment. The design blends functionality with the island's distinctive features, creating a space that not only connects locations but also serves as a reflection of the island's identity, fostering a deeper connection between nature, architecture, and the urban community.",
  imageUrl: "/lovable-uploads/e4ee8415-921a-44fe-bf59-82af2b5be394.png"
}];
const ProjectDetail = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
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
              
              <p className="leading-relaxed py-0 my-[50px] text-base">
                {project.fullDescription}
              </p>
            </div>}
            
          {project.slug !== "project-5" && project.fullDescription && <div className="prose prose-invert max-w-none mb-8 rounded-3xl px-[50px] py-[30px] my-0">
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
          
          {/* Learn Project Detail Sections - Images */}
          {project.slug === "learn" && <>
              {/* Image section 1 - Project Type & Info */}
              <div className="w-full my-10">
                <img alt="Project Type and Info" className="w-full h-auto object-contain" src="/lovable-uploads/ef24cead-42d8-43b8-b1f0-8aa6e0d5d06f.png" />
              </div>
              
              {/* Image section 2 - Process */}
              <div className="w-full my-10">
                <img alt="Project Process" className="w-full h-auto object-contain" src="/lovable-uploads/a48b1d3d-db37-47b3-965c-c773003ae280.png" />
              </div>
              
              {/* Image section 3 - Worldbuilding */}
              <div className="w-full my-10">
                <img alt="Worldbuilding - Environmental Setting" className="w-full h-auto object-contain" src="/lovable-uploads/db878cb6-21bb-45ed-bb18-f32fc6f63ec0.png" />
              </div>
              
              {/* Image section 4 - Story Concept */}
              <div className="w-full my-10">
                <img alt="Story Concept and Plot" className="w-full h-auto object-contain" src="/lovable-uploads/33404ace-d96d-4d85-ad0e-9528701598b0.png" />
              </div>
              
              {/* Image section 5 - Character Design */}
              <div className="w-full my-10">
                <img alt="Character Design Details" className="w-full h-auto object-contain" src="/lovable-uploads/1d6874b7-0d89-4c5a-9380-cb934ba6281d.png" />
              </div>
              
              {/* Image section 6 - Robot Models */}
              <div className="w-full my-10">
                <img alt="Robot Character Models" className="w-full h-auto object-contain" src="/lovable-uploads/c408582f-77b8-472b-a63a-0044aae0b097.png" />
              </div>
              
              {/* First 3D model viewer */}
              <ModelViewer modelPath="https://sketchfab.com/models/ad41a20fb4cb43b5afefa525ddc60ea3/embed" title="Interactive 3D Robot Model" isSketchfab={true} />
             
              {/* Image section 8 - Robot Specs Detail - THIS IS THE ONE WE'RE REPLACING */}
              <div className="w-full my-10">
                <img alt="Robot LS1-07 Specifications" className="w-full h-auto object-contain" src="/lovable-uploads/5b3058a3-7730-40e1-a279-239b5c762def.png" />
              </div>
              
              {/* Use the exact URL provided by the user for the second model */}
              <ModelViewer modelPath="https://sketchfab.com/models/65e7ff25d71f4512829dfc88c5537add/embed" title="Interactive LS1-07 Robot Model" isSketchfab={true} />
              
              {/* Image section 9 - 3D Storyboard Development */}
              <div className="w-full my-10">
                <img alt="3D Storyboard Development" className="w-full h-auto object-contain" src="/lovable-uploads/92cbf397-42cb-489d-8507-e50f9ab90a7d.png" />
              </div>

              {/* YouTube Video Section */}
              <div className="w-full my-10">
                <AspectRatio ratio={16 / 9} className="bg-gray-900 overflow-hidden rounded-lg">
                  <YouTube videoId="aCJblmM9yzs" opts={videoOptions} className="w-full h-full" />
                </AspectRatio>
              </div>
              
              {/* NEW: Image section 10 - Level Design */}
              <div className="w-full my-10">
                <img alt="Level Design Layout" className="w-full h-auto object-contain" src="/lovable-uploads/05b3cbcd-f9ff-4e49-a6c9-332c83271abc.png" />
              </div>
              
              {/* NEW: Image section 11 - Artifacts Detail */}
              <div className="w-full my-10">
                <img alt="Artifact Details and Interactive Elements" className="w-full h-auto object-contain" src="/lovable-uploads/e7e6311d-ad0e-492f-bc55-6f702900d494.png" />
              </div>
              
              {/* NEW: Image section 12 - Player Journey */}
              <div className="w-full my-10">
                <img alt="Player Journey and Narrative Flow" className="w-full h-auto object-contain" src="/lovable-uploads/139ca29f-9912-4258-8381-65443de63395.png" />
              </div>
              
              {/* NEW: Image section 13 - Final Concept */}
              <div className="w-full my-10">
                <img alt="Final Concept Images - Library Environment" className="w-full h-auto object-contain" src="/lovable-uploads/39979ae1-c0f1-41d9-8035-d47b33b6520e.png" />
              </div>
              
              {/* NEW: Image section 14 - Main Hall & Tree */}
              <div className="w-full my-10">
                <img alt="Main Hall & Tree - Library Environment" className="w-full h-auto object-contain" src="/lovable-uploads/993feb4e-7411-490f-8e5a-e51216d4f546.png" />
              </div>
              
              {/* NEW: Image section 15 - Library Main Hall */}
              <div className="w-full my-10">
                <img alt="Library Main Hall with Robot Character" className="w-full h-auto object-contain" src="/lovable-uploads/923720d8-1f64-4936-9a07-71bedb9d4a0e.png" />
              </div>
              
              {/* NEW: Image section 16 - Overhead View */}
              <div className="w-full my-10">
                <img alt="Overhead View of Library with Robot Character" className="w-full h-auto object-contain" src="/lovable-uploads/38be711f-81bc-4f86-8fd3-eea0c5226c1a.png" />
              </div>
              
              {/* NEW: Image section 17 - Post-Project Direction */}
              <div className="w-full my-10">
                <img alt="Post-Project Direction - Future Development Plans" className="w-full h-auto object-contain" src="/lovable-uploads/2cc04897-cb27-46d1-92b6-76c95a2afbcd.png" />
              </div>
            </>}
          
          {/* Project info images section for Island project */}
          {project.slug === "project-6" && <>
              {/* Image section 1 - Project Overview */}
              <div className="w-full my-10">
                <img alt="Project Overview" className="w-full h-auto object-contain" src="/lovable-uploads/1017e5f0-34d8-478a-862d-b9a6b1c9f695.png" />
              </div>
              
              {/* Image section 2 - Approach */}
              <div className="w-full my-10">
                <img alt="Project Approach" className="w-full h-auto object-contain" src="/lovable-uploads/5034f020-949b-423f-b463-61e726b443fa.png" />
              </div>
              
              {/* Image section 3 - Site Selection */}
              <div className="w-full my-10">
                <img alt="Site Selection" className="w-full h-auto object-contain" src="/lovable-uploads/a172e8d9-00d6-4b41-ac4e-a54dbfa9386f.png" />
              </div>
              
              {/* Image section 4 - Bridge Analysis */}
              <div className="w-full my-10">
                <img alt="Bridge Analysis" className="w-full h-auto object-contain" src="/lovable-uploads/79518ec9-03d9-43fd-91a2-f0093064f858.png" />
              </div>
              
              {/* Image section 5 - Environmental Context */}
              <div className="w-full my-10">
                <img alt="Environmental Context" className="w-full h-auto object-contain" src="/lovable-uploads/878c5f93-e2c2-484e-8701-9673796885d9.png" />
              </div>
              
              {/* Image section 6 - Concept Design */}
              <div className="w-full my-10">
                <img alt="Concept Design" className="w-full h-auto object-contain" src="/lovable-uploads/959cc7ed-1026-44d6-b91f-dc2af37e47bb.png" />
              </div>
              
              {/* Image section 7 - Spatial Design */}
              <div className="w-full my-10">
                <img alt="Spatial Design" className="w-full h-auto object-contain" src="/lovable-uploads/c032f8c1-ea99-4106-9f55-0359f923d3fe.png" />
              </div>
              
              {/* Image section 8 - Bridge Structure */}
              <div className="w-full my-10">
                <img alt="Bridge Structure" className="w-full h-auto object-contain" src="/lovable-uploads/9204c7d5-567a-49d6-bed7-2119949f553d.png" />
              </div>
              
              {/* Image section 9 - Surface Exposure */}
              <div className="w-full my-10">
                <img alt="Surface Exposure According to Rainfall" className="w-full h-auto object-contain" src="/lovable-uploads/aa565580-dbc1-4e11-a31f-e11f85c9a5c2.png" />
              </div>
              
              {/* Image section 10 - Final Concept Image 1 */}
              <div className="w-full my-10">
                <img alt="Final Concept View 1" className="w-full h-auto object-contain" src="/lovable-uploads/1368610e-96c5-47b6-a7e2-66e23ebf5c00.png" />
              </div>
              
              {/* Image section 11 - Final Concept Image 2 */}
              <div className="w-full my-10">
                <img alt="Final Concept Rainy Condition" className="w-full h-auto object-contain" src="/lovable-uploads/c965f215-8575-4d1f-b055-1f1fec8d9cd6.png" />
              </div>
              
              {/* Image section 12 - Final Concept Image 3 */}
              <div className="w-full my-10">
                <img alt="Final Concept View 2" className="w-full h-auto object-contain" src="/lovable-uploads/773d9087-a073-430f-8510-1fdc452c034d.png" />
              </div>
            </>}
          
          {/* Project info image section - Added below video */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Project Information" className="w-full h-auto object-contain" src="/lovable-uploads/156e341c-46d4-400d-916d-942aa675ab4e.png" />
            </div>}
          
          {/* Add third image section - Project 5 detailed mockup */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Project Details" className="w-full h-auto object-contain" src="/lovable-uploads/6db507e7-33b8-4ae2-8eff-915e9fb34663.png" />
            </div>}
          
          {/* Image section 4 - Site Selection */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Site Selection" className="w-full h-auto object-contain" src="/lovable-uploads/bcd77b77-5980-4b25-8c77-668dc97cf557.png" />
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
              <img alt="Floor Plan and Spatial Design" className="w-full h-auto object-contain" src="/lovable-uploads/543f4a31-e026-4287-93b1-9d97726ffd62.png" />
          </div>}
          
          {/* Image section 8 - Material Board */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Material Board" className="w-full h-auto object-contain" src="/lovable-uploads/ef80e3a5-8484-4a70-8096-237b2bd5f7be.png" />
          </div>}
          
          {/* Image section 9 - Exhibition Planning and Design */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Exhibition Planning and Design" className="w-full h-auto object-contain" src="/lovable-uploads/f5645ceb-bc9c-4f26-a391-bd5a5799b169.png" />
          </div>}
          
          {/* Image section 10 & 11 - Final Concept Images */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Final Concept Images - Reception Desk" className="w-full h-auto object-contain mb-10" src="/lovable-uploads/bd60915c-2633-49d1-aff4-fdf44bef9f66.png" />
          </div>}
          
          {/* Image section 11 - 1F Exhibition Hall - Marine Zone */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="1F Exhibition Hall - Marine Zone" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/c92c8656-cfbf-484d-a548-dcdc5975ff0d.png" />
              <div className="mt-4 text-white">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    
                    
                  </div>
                  <div>
                    
                    
                  </div>
                </div>
              </div>
          </div>}
          
          {/* Image section 12 - 2F-3F Exhibition Halls - Terrestrial Zone */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="2F-3F Exhibition Halls - Terrestrial Zone" className="w-full h-auto object-contain" src="/lovable-uploads/8ce3a4d6-f250-4f97-9fe8-86a67a09329c.png" />
          </div>}
          
          {/* Image section 13 - Specimens in Wall Cabinets */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Specimens in Wall Cabinets" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/da6dd76b-4ca9-48ee-99cc-a74ca3ef0efe.png" />
              <div className="mt-4 text-white">
                
                
              </div>
          </div>}
          
          {/* Image section 14 - 2F Rest Area */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="2F Rest Area" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/d054f8ad-225d-4b31-b3c9-29d1e14a99cc.png" />
              <div className="mt-4 text-white">
                
                
              </div>
          </div>}
          
          {/* Image section 15 - Gift Shop */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Gift Shop of the Seoul Natural History Museum" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/7952248b-ea8e-49b6-94c5-09efb48a1b30.png" />
              <div className="mt-4 text-white">
                
                
              </div>
          </div>}
          
          {/* Image section 16 - Product Design */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Product Design - Museum Souvenirs" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/32ccef84-5518-4014-913e-2e08022c55da.png" />
              <div className="mt-4 text-white">
                
                
                
              </div>
          </div>}
          
          {/* Image section 17 - Product Design Reflecting Brand Identity */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Product Design Reflecting Brand Identity" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/8047ad6f-738d-475e-8def-43aa9c1f9167.png" />
              <div className="mt-4 text-white">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    
                    
                  </div>
                  <div>
                    
                    
                  </div>
                </div>
              </div>
          </div>}
          
          {/* Image section 18 - Museum Merchandise Collection */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Museum Merchandise Collection" className="w-full h-auto object-contain" src="/lovable-uploads/a5587d2f-e333-4df0-9625-12976038e32c.png" />
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
            
          {/* Back to Work button at the bottom */}
          <div className="mt-16 mb-8 flex justify-center">
            <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <Link to="/work" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Work
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>;
};
export default ProjectDetail;