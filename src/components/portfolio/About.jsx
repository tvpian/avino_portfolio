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
    <section id="about" className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#e91e63]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-[#9c27b0]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 elegant-pattern"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/20 to-[#9c27b0]/20 rounded-lg"></div>
              <img
                src="https://drive.google.com/thumbnail?id=15BWIBwhVSG5NeSSumqkTX0G2xEUj_ZLp&sz=s4000"
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
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                About Me
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] origin-left mb-8"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
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
              className="text-lg text-gray-300 leading-relaxed"
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
              className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-700"
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
                  <div className="text-sm font-medium text-[#e91e63] uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </div>
                  <div className="text-xl font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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