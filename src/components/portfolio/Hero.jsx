
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const name = "ANJANA VINOD";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="hero" className="min-h-screen w-full relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] flex items-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#B8860B]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#DAA520]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 elegant-pattern"></div>

        {/* Dynamic floating elements */}
        <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 md:w-24 md:h-24 border-2 border-[#B8860B]/20 rounded-full"
            animate={{
                y: [0, -20, 0],
                x: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
            className="absolute bottom-1/4 right-1/4 w-20 h-20 md:w-32 md:h-32 border border-[#DAA520]/20"
            animate={{
                y: [0, 20, 0],
                rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[#B8860B] text-sm md:text-lg font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                ACTOR • MODEL • PERFORMER
              </span>
            </motion.div>

            <motion.h1
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {name.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-base md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Crafting compelling narratives through authentic performance and captivating presence.
              Ready to bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white font-semibold tracking-wide rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#B8860B]/25 overflow-hidden text-sm md:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520] to-[#B8860B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-6 md:px-8 py-3 md:py-4 border border-gray-600 text-gray-300 font-semibold tracking-wide rounded-sm transition-all duration-300 hover:bg-white/5 hover:border-[#B8860B] overflow-hidden text-sm md:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="relative z-10">Get In Touch</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20}/></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20}/></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20}/></a>
            </motion.div>

          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative group order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[500px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-[#DAA520]/20 rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
                alt="Portrait"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
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
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-[#B8860B] transition-colors animate-bounce"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="md:w-6 md:h-6">
          <path d="M12 16l-6-6h12l-6 6z"/>
        </svg>
      </motion.button>
    </section>
  );
}
