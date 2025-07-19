import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen w-full relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] flex items-center overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#e91e63]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-[#9c27b0]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 elegant-pattern"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[#e91e63] text-lg font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                ACTOR • MODEL • PERFORMER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ANJANA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e91e63] to-[#9c27b0]">
                VINOD
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-400 leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Crafting compelling narratives through authentic performance and captivating presence.
              Ready to bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] text-white font-semibold tracking-wide rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#e91e63]/25 overflow-hidden"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#9c27b0] to-[#e91e63] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 border border-gray-600 text-gray-300 font-semibold tracking-wide rounded-sm transition-all duration-300 hover:bg-white/5 hover:border-gray-400 overflow-hidden"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="relative z-10">Get In Touch</span>
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative lg:justify-self-end"
          >
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/20 to-[#9c27b0]/20 rounded-lg"></div>
              <img
                src="https://drive.google.com/thumbnail?id=1O6xYg1XX8drbheMLd_BHpmQb_TG-X6UF&sz=s4000"
                alt="Portrait"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16l-6-6h12l-6 6z"/>
        </svg>
      </motion.button>
    </section>
  );
}