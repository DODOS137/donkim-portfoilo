
import React from 'react';
import Navbar from '../components/Navbar';

const Work = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto mt-16">
          <h1 className="text-4xl font-bold text-white mb-8">Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project items would go here */}
            <div className="bg-[#333] aspect-video flex items-center justify-center">
              <p className="text-white">Project 1</p>
            </div>
            <div className="bg-[#333] aspect-video flex items-center justify-center">
              <p className="text-white">Project 2</p>
            </div>
            <div className="bg-[#333] aspect-video flex items-center justify-center">
              <p className="text-white">Project 3</p>
            </div>
            <div className="bg-[#333] aspect-video flex items-center justify-center">
              <p className="text-white">Project 4</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
