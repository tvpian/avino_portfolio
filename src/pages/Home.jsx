
import React, { useState, useEffect } from 'react';
import Header from '../components/portfolio/Header';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Gallery from '../components/portfolio/Gallery';
import MediaShowcase from '../components/portfolio/MediaShowcase';
import Resume from '../components/portfolio/Resume';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';
import { motion } from 'framer-motion';

// Custom hook to get mouse position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};


export default function Home() {
  const { x, y } = useMousePosition();

  return (
    <div className="bg-[#0a0a0a] text-gray-300 font-sans overflow-x-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${x}px ${y}px, rgba(184, 134, 11, 0.15), transparent 80%)`,
        }}
      />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&display=swap');

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .elegant-pattern {
            background-image:
              linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.02) 45.5%, rgba(255, 255, 255, 0.02) 46%, transparent 46%),
              linear-gradient(-45deg, transparent 45%, rgba(255, 255, 255, 0.02) 45.5%, rgba(255, 255, 255, 0.02) 46%, transparent 46%);
            background-size: 40px 40px;
          }

          * {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery category="headshot" title="Modeling Portfolio" />
        <Gallery category="fashion" title="Headshots" />
        <MediaShowcase />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
