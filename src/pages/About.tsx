import React from 'react';
import Navbar from '../components/Navbar';
const About = () => {
  return <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto mt-16">
          <h1 className="text-4xl font-bold text-white mb-8">About</h1>
          <div className="text-white space-y-6">
            <p className="text-xl">Do Hyun Kim


A passionate designer specializing in spatial design and VR/XR technologies. Continuously exploring how VR and XR can expand human experiences and create new forms of engagement within physical spaces. Committed to investigating the potential and effectiveness of immersive technologies across various environments, from gaming to exhibitions. Focused on pushing the boundaries of physical space to unlock new possibilities for interaction and presence.</p>
            
          </div>
        </div>
      </main>
    </div>;
};
export default About;