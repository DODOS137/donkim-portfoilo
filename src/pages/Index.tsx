
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SearchBox from '../components/SearchBox';

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="pt-16 relative">
        <Slider />
        <SearchBox />
      </main>
    </div>
  );
};

useEffect(() => {
  // Smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href')?.substring(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 헤더 높이만큼 보정
          behavior: 'smooth'
        });
      }
    });
  });

  return () => {
    // Cleanup
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click', function (e) {
        // Cleanup
      });
    });
  };
}, []);

export default Index;
