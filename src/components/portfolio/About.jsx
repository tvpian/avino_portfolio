
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Height', value: "5' 4\"" },
    { label: 'Hair', value: 'Black' },
    { label: 'Eyes', value: 'Light Brown' },
    { label: 'Location', value: 'Kerala, India' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#B8860B]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#DAA520]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 elegant-pattern"></div>

        {/* Dynamic floating elements */}
        <motion.div
          className="absolute top-1/6 left-1/6 w-16 h-16 md:w-20 md:h-20 border border-[#B8860B]/20 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute bottom-1/5 right-1/5 w-20 h-20 md:w-24 md:h-24 border-2 border-[#DAA520]/20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none lg:w-80 h-80 lg:w-96 lg:h-[500px]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-[#DAA520]/20 rounded-lg group-hover:scale-105 transition-transform duration-500"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                alt="About"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                About Me
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] origin-left mb-6 md:mb-8 mx-auto lg:mx-0"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              With a passion for storytelling that transcends boundaries, I bring depth and authenticity to every role.
              My journey in the entertainment industry has been driven by an unwavering commitment to craft and an
              insatiable curiosity about the human experience.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Whether it's embodying complex characters on screen or bringing elegance to fashion campaigns,
              I approach each project with dedication, professionalism, and creative vision.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-700"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-xs md:text-sm font-medium text-[#B8860B] uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
