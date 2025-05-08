
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto mt-16">
          <h1 className="text-4xl font-bold text-white mb-8">About</h1>
          <div className="text-white space-y-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
              nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl 
              nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt.
            </p>
            <p>
              Praesent efficitur, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, 
              eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
              nisl nisl aliquam nisl, eget aliquam.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
