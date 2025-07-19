import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#0a0a0a] to-[#111111] text-white py-12 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#e91e63]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-[#9c27b0]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 elegant-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>ANJANA VINOD</h3>
            <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              Crafting compelling narratives through authentic performance and captivating presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#111111] border border-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#e91e63] hover:to-[#9c27b0] hover:border-transparent transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#111111] border border-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#e91e63] hover:to-[#9c27b0] hover:border-transparent transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@ariachen.com"
                className="w-10 h-10 bg-[#111111] border border-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#e91e63] hover:to-[#9c27b0] hover:border-transparent transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2024 ANJANA VINOD. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span style={{ fontFamily: "'Inter', sans-serif" }}>Made with</span>
            <Heart className="w-4 h-4 text-[#e91e63]" />
            <span style={{ fontFamily: "'Inter', sans-serif" }}>and passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}