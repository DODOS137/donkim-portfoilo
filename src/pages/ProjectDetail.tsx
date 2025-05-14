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
  fullDescription: "This project is designed as an educational VR experience aimed at helping the general public better understand scientific exhibitions. By presenting complex scientific principles in an intuitive and immersive virtual environment, the content lowers the barrier of entry that many people feel toward science. Through interactive visuals and storytelling, the project seeks to spark curiosity, enhance engagement, and promote more accessible scientific thinking.",
  imageUrl: "/lovable-uploads/74e7f7a1-afe3-4fee-b39f-99d5957f0153.png",
  videoId: "cc7qApfpaRg" // Added videoId for the Invisible Space Museum project
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
  fullDescription: "This project focuses on the sounds of endangered marine species that dwell on the ocean floor or beneath rocks. It incorporates elements such as AR and immersive sound to enhance the exhibition experience and draw attention to these often-overlooked creatures.",
  imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1936&auto=format&fit=crop",
  videoId: "zqz3Owz0K3o" // Added videoId for the requested YouTube video
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
          
          {/* Replacing the image with the uploaded one */}
          <div className="w-full mb-8 relative">
            <img src="/lovable-uploads/3ed2d001-1a9e-431e-8cbf-06cc9465769f.png" alt={project.title} className="w-full h-auto object-contain" />
            <div className="absolute inset-0 flex items-center">
              <div className="bg-black bg-opacity-60 px-8 py-6 rounded-lg ml-10">
                <h1 className="text-4xl font-bold text-white">{project.title}</h1>
              </div>
            </div>
          </div>
          
          {/* Title and description moved between image and video */}
          {project.slug === "invisible-space-museum" && project.fullDescription && <>
              <div className="prose prose-invert max-w-none mb-8 rounded-3xl py-[30px] px-[75px] my-[100px]">
                <h1 className="text-4xl font-bold mb-4">Invisible</h1>
                {project.fullDescription}
              </div>
              
              {/* YouTube Video Section for Invisible Space Museum project */}
              <div className="w-full mb-10">
                <div className="w-full">
                  <AspectRatio ratio={16 / 9} className="bg-gray-900 overflow-hidden rounded-lg">
                    <YouTube videoId="cc7qApfpaRg" opts={videoOptions} className="w-full h-full" />
                  </AspectRatio>
                </div>
              </div>
              
              {/* Image section 1 - Project Type */}
              <div className="w-full my-10">
                <img alt="Project Type" className="w-full h-auto object-contain" src="/lovable-uploads/03d94172-4144-444f-afb8-3599a0851ce4.png" />
              </div>
              
              {/* Image section 2 - Approach */}
              <div className="w-full my-10">
                <img alt="Approach" className="w-full h-auto object-contain" src="/lovable-uploads/7e372c1b-9df6-4c47-8747-ea0728cc3480.png" />
              </div>
              
              {/* Image section 3 - Process */}
              <div className="w-full my-10">
                <img alt="Process" className="w-full h-auto object-contain" src="/lovable-uploads/16ab4037-015b-4574-9679-edfee2b2d386.png" />
              </div>
              
              {/* Image section 4 - Worldbuilding */}
              <div className="w-full my-10">
                <img alt="Worldbuilding - Environmental Setting" className="w-full h-auto object-contain" src="/lovable-uploads/387de526-8c89-4311-8b16-576ff3629389.png" />
              </div>
              
              {/* Image section 5 - Planet A233 */}
              <div className="w-full my-10">
                <img alt="Planet A233 Concept" className="w-full h-auto object-contain" src="/lovable-uploads/f329517d-c2eb-46f6-af30-bfcda37c460f.png" />
              </div>
              
              {/* Image section 6 - Story Concept */}
              <div className="w-full my-10">
                <img alt="Story Concept & Emotional Logic" className="w-full h-auto object-contain" src="/lovable-uploads/32f74435-8e0d-43c0-919e-40134ee4b745.png" />
              </div>
              
              {/* Image section 7 - Video Development */}
              <div className="w-full my-10">
                <img alt="Video Development Concepts" className="w-full h-auto object-contain" src="/lovable-uploads/910bd54b-f2a9-4c14-a7eb-1e2fa388c89b.png" />
              </div>
              
              {/* Image section 8 - Video Series Description */}
              <div className="w-full my-10">
                <img alt="Video Series Description" className="w-full h-auto object-contain" src="/lovable-uploads/1df2dafa-584c-4b6c-88c2-340c1e25ce3a.png" />
              </div>
              
              {/* Image section 9 - Level Design */}
              <div className="w-full my-10">
                <img alt="Level Design Layout" className="w-full h-auto object-contain" src="/lovable-uploads/2ced82fe-7596-46c4-971b-9754596a28d3.png" />
              </div>
              
              {/* Image section 10 - User Journey */}
              <div className="w-full my-10">
                <img alt="User Journey Flow" className="w-full h-auto object-contain" src="/lovable-uploads/005e67f1-2918-488a-bf73-884dcdbe32e7.png" />
              </div>
              
              {/* Image section 11 - Spatial Design */}
              <div className="w-full my-10">
                <img alt="Spatial Design Concepts" className="w-full h-auto object-contain" src="/lovable-uploads/fdbf9b1f-d044-4c35-b65e-e702cd3cb8d3.png" />
              </div>
              
              {/* NEW: Additional YouTube Video Section */}
              <div className="w-full my-10">
                <div className="w-full">
                  <AspectRatio ratio={16 / 9} className="bg-gray-900 overflow-hidden rounded-lg">
                    <YouTube videoId="KT0Cwy9s5n8" opts={videoOptions} className="w-full h-full" />
                  </AspectRatio>
                </div>
              </div>
              
              {/* NEW: Image section 13 - Post-Project Direction */}
              <div className="w-full my-10">
                <img alt="Post-Project Direction - Interactive Elements" className="w-full h-auto object-contain" src="/lovable-uploads/a96a1fbb-7e20-4e12-83dd-8b2908b357fe.png" />
              </div>
              
              {/* NEW: Image section 14 - Interactive Evolution Concept */}
              <div className="w-full my-10">
                <img alt="Interactive Evolution Concept Visualization" className="w-full h-auto object-contain" src="/lovable-uploads/f6086651-deb6-4878-bcb1-bfa446e03f6b.png" />
              </div>
            </>}
          
          {project.slug === "project-5" && project.fullDescription && <div className="mt-6 text-white p-6 rounded-xl bg-black bg-opacity-60 mb-8">
              <h1 className="font-bold mb-4 text-3xl my-0 py-[30px] px-[50px]">{project.title}</h1>
              
              <p className="leading-relaxed py-0 my-[50px] text-base px-[50px]">
                {project.fullDescription}
              </p>
            </div>}
            
          {project.slug !== "project-5" && project.slug !== "invisible-space-museum" && project.fullDescription && <div className="prose prose-invert max-w-none mb-8 rounded-3xl py-[30px] px-[75px] my-[100px]">
              <h1 className="text-4xl font-bold mb-4">Whispers From the Bottom</h1>
              {project.fullDescription}
            </div>}
          
          {/* YouTube Video Section - Show for project-4 right after the text description */}
          {project.slug === "project-4" && <div className="w-full mb-10">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-gray-900 overflow-hidden rounded-lg">
                  <YouTube videoId="zqz3Owz0K3o" opts={videoOptions} className="w-full h-full" />
                </AspectRatio>
              </div>
            </div>}
          
          {/* New Image sections for Project 4 - Added below YouTube video */}
          {project.slug === "project-4" && <>
              {/* Image section 2 - Project Type */}
              <div className="w-full my-10">
                <img alt="Project Type Information" className="w-full h-auto object-contain" src="/lovable-uploads/3a6ac627-06be-4949-af56-65bba334bf9c.png" />
              </div>
              
              {/* Image section 3 - Process */}
              <div className="w-full my-10">
                <img alt="Process" className="w-full h-auto object-contain" src="/lovable-uploads/5e22efb5-97e9-4fb2-92f0-24c80469f078.png" />
              </div>
              
              {/* Image section 4 - Idea Development */}
              <div className="w-full my-10">
                <img alt="Idea Development" className="w-full h-auto object-contain" src="/lovable-uploads/d6f8e4b6-369a-4c4d-b123-0af214e753bc.png" />
              </div>
              
              {/* Image section 5 - Core Concept */}
              <div className="w-full my-10">
                <img alt="Core Concept" className="w-full h-auto object-contain" src="/lovable-uploads/4e86c452-52e7-416b-87c9-f80781b563a2.png" />
              </div>
              
              {/* Image section 6 - Product Design */}
              <div className="w-full my-10">
                <img alt="Product Design" className="w-full h-auto object-contain" src="/lovable-uploads/f55a81c3-32db-403d-9187-aa33e67f00e5.png" />
              </div>
              
              {/* Image section 7 - Exhibition Elements */}
              <div className="w-full my-10">
                <img alt="Exhibition Elements" className="w-full h-auto object-contain" src="/lovable-uploads/b66fabbb-7f0f-489c-9125-b193f338d9a6.png" />
              </div>
              
              {/* Image section 8 - Exhibition Design */}
              <div className="w-full my-10">
                <img alt="Exhibition Design" className="w-full h-auto object-contain" src="/lovable-uploads/3af7f241-2740-4378-b6cd-dd07d9f895d2.png" />
              </div>
              
              {/* Image section 9 - Visitor Experience */}
              <div className="w-full my-10">
                <img alt="Visitor Experience" className="w-full h-auto object-contain" src="/lovable-uploads/fe512369-6aff-4535-87e2-d9b81dc08995.png" />
              </div>
              
              {/* Image section 10 - AR Application Development */}
              <div className="w-full my-10">
                <img alt="AR Application Development" className="w-full h-auto object-contain" src="/lovable-uploads/588ea4f9-132e-4501-a34a-0d7fdad203ac.png" />
              </div>
              
              {/* NEW: Second YouTube video player with the provided URL */}
              <div className="w-full my-10">
                <div className="w-full">
                  <AspectRatio ratio={16 / 9} className="bg-gray-900 overflow-hidden rounded-lg">
                    <YouTube videoId="M0v75vAVitA" opts={videoOptions} className="w-full h-full" />
                  </AspectRatio>
                </div>
              </div>
              
              {/* NEW: Image section 11 - Exhibition & Spatial Design */}
              <div className="w-full my-10">
                <img alt="Exhibition & Spatial Design" className="w-full h-auto object-contain" src="/lovable-uploads/681ca87f-74f0-4b9d-af44-6cbdce8a303a.png" />
              </div>
              
              {/* NEW: Image section 12 - Exhibition with Water Ceiling */}
              <div className="w-full my-10">
                <img alt="Exhibition with Water Ceiling" className="w-full h-auto object-contain" src="/lovable-uploads/55685a01-35c0-482d-8ee8-9306f497bf3a.png" />
              </div>
              
              {/* NEW: Image section 13 - Night Exhibition View */}
              <div className="w-full my-10">
                <img alt="Night Exhibition View" className="w-full h-auto object-contain" src="/lovable-uploads/1ae50321-4db0-40a9-b5f4-2d05876f82a9.png" />
              </div>
              
              {/* NEW: Image section 14 - Rock Character */}
              <div className="w-full my-10">
                <img alt="Rock Character Design" className="w-full h-auto object-contain" src="/lovable-uploads/b5a559ed-b9a5-45a4-8c87-16a5d3072ec7.png" />
              </div>
            </>}
          
          {/* YouTube Video Section - Moved after text content for other projects with videos */}
          {project.videoId && project.slug !== "invisible-space-museum" && project.slug !== "project-4" && <div className="w-full mb-10">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-gray-900 overflow-hidden rounded-lg">
                  <YouTube videoId={project.videoId} opts={videoOptions} className="w-full h-full" />
                </AspectRatio>
              </div>
            </div>}
          
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
          
          {project.slug === "project-5" && <>
              {/* Project info image section - Added below video */}
              <div className="w-full my-10">
                <img alt="Project Information" className="w-full h-auto object-contain" src="/lovable-uploads/156e341c-46d4-400d-916d-942aa675ab4e.png" />
              </div>
              
              {/* Add third image section - Project 5 detailed mockup */}
              <div className="w-full my-10">
                <img alt="Project Details" className="w-full h-auto object-contain" src="/lovable-uploads/6db507e7-33b8-4ae2-8eff-915e9fb34663.png" />
              </div>
              
              {/* Image section 4 - Site Selection */}
              <div className="w-full my-10">
                <img alt="Site Selection" className="w-full h-auto object-contain" src="/lovable-uploads/bcd77b77-5980-4b25-8c77-668dc97cf557.png" />
              </div>
              
              {/* Image section 5 - Context & Problem Analysis */}
              <div className="w-full my-10">
                <img alt="Context & Problem Analysis" className="w-full h-auto object-contain" src="/lovable-uploads/b4236ac5-2c03-4dfa-a337-b06457754639.png" />
              </div>
              
              {/* Image section 6 - New Museum Perspective */}
              <div className="w-full my-10">
                <img alt="New Museum Perspective" className="w-full h-auto object-contain" src="/lovable-uploads/10edf164-4c9f-4915-a779-5bb928aeed8b.png" />
              </div>
              
              {/* Image section 7 - Floor Plan / Spatial Design */}
              <div className="w-full my-10">
                <img alt="Floor Plan and Spatial Design" className="w-full h-auto object-contain" src="/lovable-uploads/543f4a31-e026-4287-93b1-9d97726ffd62.png" />
              </div>
              
              {/* Image section 8 - Material Board */}
              <div className="w-full my-10">
                <img alt="Material Board" className="w-full h-auto object-contain" src="/lovable-uploads/ef80e3a5-8484-4a70-8096-237b2bd5f7be.png" />
              </div>
              
              {/* Image section 9 - Exhibition Planning and Design */}
              <div className="w-full my-10">
                <img alt="Exhibition Planning and Design" className="w-full h-auto object-contain" src="/lovable-uploads/f5645ceb-bc9c-4f26-a391-bd5a5799b169.png" />
              </div>
              
              {/* Image section 10 & 11 - Final Concept Images */}
              <div className="w-full my-10">
                <img alt="Final Concept Images - Reception Desk" className="w-full h-auto object-contain mb-10" src="/lovable-uploads/bd60915c-2633-49d1-aff4-fdf44bef9f66.png" />
              </div>
              
              {/* Image section 11 - 1F Exhibition Hall - Marine Zone */}
              <div className="w-full my-10">
                <img alt="1F Exhibition Hall - Marine Zone" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/c92c8656-cfbf-484d-a548-dcdc5975ff0d.png" />
                <div className="mt-4 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              
              {/* Image section 12 - 2F-3F Exhibition Halls - Terrestrial Zone */}
              <div className="w-full my-10">
                <img alt="2F-3F Exhibition Halls - Terrestrial Zone" className="w-full h-auto object-contain" src="/lovable-uploads/8ce3a4d6-f250-4f97-9fe8-86a67a09329c.png" />
              </div>
              
              {/* Image section 13 - Specimens in Wall Cabinets */}
              <div className="w-full my-10">
                <img alt="Specimens in Wall Cabinets" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/da6dd76b-4ca9-48ee-99cc-a74ca3ef0efe.png" />
                <div className="mt-4 text-white"></div>
              </div>
              
              {/* Image section 14 - 2F Rest Area */}
              <div className="w-full my-10">
                <img alt="2F Rest Area" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/d054f8ad-225d-4b31-b3c9-29d1e14a99cc.png" />
                <div className="mt-4 text-white"></div>
              </div>
              
              {/* Image section 15 - Gift Shop */}
              <div className="w-full my-10">
                <img alt="Gift Shop of the Seoul Natural History Museum" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/7952248b-ea8e-49b6-94c5-09efb48a1b30.png" />
                <div className="mt-4 text-white"></div>
              </div>
              
              {/* Image section 16 - Product Design */}
              <div className="w-full my-10">
                <img alt="Product Design - Museum Souvenirs" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/32ccef84-5518-4014-913e-2e08022c55da.png" />
                <div className="mt-4 text-white"></div>
              </div>
              
              {/* Image section 17 - Product Design Reflecting Brand Identity */}
              <div className="w-full my-10">
                <img alt="Product Design Reflecting Brand Identity" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/8047ad6f-738d-475e-8def-43aa9c1f9167.png" />
                <div className="mt-4 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </>}
          
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
