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
const projects: Project[] = [{
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
              
              <img alt="Final Concept Images - Reception Desk" className="w-full h-auto object-contain mb-10" src="/lovable-uploads/839373a9-1ab5-4d36-b558-6757058f4cec.png" />
              <img alt="Final Concept Images - Interior View" className="w-full h-auto object-contain" src="/lovable-uploads/f7628bae-fd34-4940-9ced-e423e8d47a3f.png" />
          </div>}
          
          {/* Image section 11 - 1F Exhibition Hall - Marine Zone */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="1F Exhibition Hall - Marine Zone" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/c92c8656-cfbf-484d-a548-dcdc5975ff0d.png" />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-4">1F Exhibition Hall – Marine Zone</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-base leading-relaxed">
                      The first-floor exhibition hall showcases a wide range of marine specimens, from ancient fossils to contemporary marine life found around the Korean Peninsula. The spatial design of the individual displays is inspired by the flow of ocean currents and tides.
                    </p>
                    <p className="text-base leading-relaxed mt-4">
                      A curved glass gallery, which divides the hall into two main zones, acts as both a visual anchor and an immersive experience. Inside, large-scale screens project dynamic visuals of marine creatures swimming through the sea, offering visitors a vivid and immersive sense of life beneath the ocean surface.
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed">
                      The exhibitions extending from the second to the third floor explore the life forms found in Korea's mountains, fields, and other terrestrial environments. In addition to natural specimens, visitors can also observe historical artifacts such as maps and rifles used by traditional hunters—providing cultural and ecological context.
                    </p>
                    <p className="text-base leading-relaxed mt-4">
                      Display cases are integrated into built-in wall niches, offering a layered and textural exhibition experience. The vertical void that connects the second and third floors is inspired by the form of a cascading waterfall, symbolizing the flow of nature. At its base, visitors can discover amphibians and other species that typically inhabit areas near waterfalls.
                    </p>
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
                <h3 className="text-2xl font-semibold mb-4">Specimens in Wall Cabinets</h3>
                <p className="text-base leading-relaxed">
                  Visitors are invited to explore a series of built-in wall cabinets, each housing a unique theme—ranging from preserved life forms to rare books and historical artifacts—offering moments of discovery throughout the exhibition.
                </p>
              </div>
          </div>}
          
          {/* Image section 14 - 2F Rest Area */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="2F Rest Area" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/d054f8ad-225d-4b31-b3c9-29d1e14a99cc.png" />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-4">2F Rest Area</h3>
                <p className="text-base leading-relaxed">
                  The second-floor rest area is designed with the motif of a hunter's study. Visitors can take a break while casually observing traces of animals once pursued, along with small insects and curated objects gathered throughout his journeys. The space is filled with the hunter's personal collections and supplies, evoking a sense of quiet reflection. From this vantage point, visitors can also experience a different perspective of the glass sculpture that vertically connects the museum from the first to the third floor.
                </p>
              </div>
          </div>}
          
          {/* Image section 15 - Gift Shop */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Gift Shop of the Seoul Natural History Museum" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/7952248b-ea8e-49b6-94c5-09efb48a1b30.png" />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-4">Gift Shop of the Seoul Natural History Museum</h3>
                <p className="text-base leading-relaxed">
                  Museum souvenirs can serve as one of the most memorable and meaningful aspects of a visitor's experience. The former Seodaemun Museum of Natural History lacked a dedicated gift shop that reflected the museum's unique identity. In response, redesigned museum includes a thoughtfully curated gift shop that captures the distinctive character of the Seoul Museum of Natural History. The items are developed with consideration for a wide range of age groups, aiming to extend the museum experience beyond the exhibition halls.
                </p>
              </div>
          </div>}
          
          {/* Image section 16 - Product Design */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Product Design - Museum Souvenirs" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/32ccef84-5518-4014-913e-2e08022c55da.png" />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-4">Product Design</h3>
                <h4 className="text-xl font-medium mb-3">Museum Souvenirs</h4>
                <p className="text-base leading-relaxed mb-2">Souvenir Design Prototype</p>
              </div>
          </div>}
          
          {/* Image section 17 - Product Design Reflecting Brand Identity */}
          {project.slug === "project-5" && <div className="w-full my-10">
              <img alt="Product Design Reflecting Brand Identity" className="w-full h-auto object-contain mb-6" src="/lovable-uploads/8047ad6f-738d-475e-8def-43aa9c1f9167.png" />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-4">Product Design Reflecting Brand Identity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-base leading-relaxed">
                      In an effort to align with the renewed brand identity of the Seoul Natural History Museum, this project was developed a series of product designs that go beyond conventional souvenirs. These items were conceived not only as mementos, but also as meaningful extensions of the museum experience—designed to convey its unique narrative, values, and educational mission.
                    </p>
                    <p className="text-base leading-relaxed mt-4">
                      Each product was created with the intention of reflecting the distinctive themes and perspectives introduced in the redesigned museum, including its emphasis on local ecology, cultural storytelling, and interactive engagement. From concept development to final form, every detail was carefully considered to ensure that these items could exist only within the context of the Seoul Natural History Museum, offering visitors a deeper and more personal connection to what they encountered during their visit.
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed font-medium mb-2">Korean Endangered Species – Educational Photo Card Series</p>
                    <p className="text-base leading-relaxed mt-4 font-medium mb-2">Seoul Natural History Museum – Identity & Print Material</p>
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
        </div>
      </main>
    </div>;
};
export default ProjectDetail;
