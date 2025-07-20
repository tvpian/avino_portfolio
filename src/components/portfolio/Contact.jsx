
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@ariachen.com',
      href: 'mailto:hello@ariachen.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#B8860B]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#DAA520]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 elegant-pattern"></div>

        {/* Dynamic floating elements */}
        <motion.div
          className="absolute top-1/5 right-1/4 w-14 h-14 md:w-18 md:h-18 border border-[#B8860B]/30 rounded-full"
          animate={{
            y: [0, -22, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/4 w-18 h-18 md:w-22 md:h-22 border-2 border-[#DAA520]/30"
          animate={{
            rotate: [0, 315, 630],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 17, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Get In Touch
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mx-auto mb-6"
          />
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ready to collaborate? Let's discuss your next project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#111111] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/30 transition-all duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#111111] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/30 transition-all duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#111111] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/30 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#111111] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/30 transition-all duration-300 resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#B8860B]/25 flex items-center justify-center gap-3 text-sm md:text-base"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-lg flex items-center justify-center">
                    <info.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-medium hover:text-[#B8860B] transition-colors text-sm md:text-base"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm md:text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6 md:pt-8 border-t border-gray-700"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 md:w-12 md:h-12 bg-[#111111] border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#B8860B] hover:to-[#DAA520] transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
