import React from 'react';
import Navbar from '../components/Navbar';
const About = () => {
  return <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl font-bold text-white mb-8">About</h1>
          <div className="text-white space-y-8">
            <div className="backdrop-blur-sm p-6 rounded-lg border border-black/10 bg-transparent">
              <h2 className="text-2xl font-semibold mb-4">Do Hyun Kim</h2>
              <p className="text-xl leading-relaxed">
                A passionate designer specializing in spatial design and VR/XR technologies. Continuously exploring how VR and XR can expand human experiences and create new forms of engagement within physical spaces. Committed to investigating the potential and effectiveness of immersive technologies across various environments, from gaming to exhibitions. Focused on pushing the boundaries of physical space to unlock new possibilities for interaction and presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <ul className="space-y-2">
                  <li>Master's in Design - VR/XR Focus</li>
                  <li>Bachelor's in Spatial Design</li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <ul className="space-y-2">
                  <li>Spatial Design</li>
                  <li>Virtual Reality</li>
                  <li>Extended Reality</li>
                  <li>Exhibition Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default About;