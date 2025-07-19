import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

export default function Resume() {
  const experience = [
    {
      title: "Lead Actress",
      project: "Midnight Dreams",
      type: "Feature Film",
      year: "2023",
      location: "Mumbai",
      description: "Portrayed a complex character dealing with family trauma in this critically acclaimed drama."
    },
    {
      title: "Brand Ambassador",
      project: "Luxury Fashion Campaign",
      type: "Commercial",
      year: "2023",
      location: "Delhi",
      description: "Featured as the face of premium jewelry collection for leading luxury brand."
    },
    {
      title: "Supporting Role",
      project: "City Lights",
      type: "Web Series",
      year: "2022",
      location: "Mumbai",
      description: "Compelling performance as a determined journalist in this award-winning series."
    }
  ];

  const skills = [
    "Method Acting", "Classical Dance", "Yoga & Meditation", "Horse Riding",
    "Martial Arts", "Multiple Languages", "Voice Modulation", "Stage Combat"
  ];

  const training = [
    {
      institution: "National School of Drama",
      course: "Advanced Acting Workshop",
      year: "2022"
    },
    {
      institution: "Lee Strasberg Theatre Institute",
      course: "Method Acting Intensive",
      year: "2021"
    },
    {
      institution: "Mumbai Film Academy",
      course: "Screen Acting Masterclass",
      year: "2020"
    }
  ];

  return (
    <section id="resume" className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#e91e63]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-[#9c27b0]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 elegant-pattern"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience & Projects */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-[#e91e63] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Recent Projects
            </motion.h3>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-[#111111] to-[#0a0a0a] p-6 rounded-lg border border-gray-800 hover:border-[#e91e63]/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {exp.title}
                    </h4>
                    <p className="text-[#e91e63] font-medium">{exp.project}</p>
                    <span className="text-sm text-gray-400">{exp.type}</span>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={14} />
                      {exp.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{exp.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills & Training */}
          <div className="space-y-8">
            {/* Training */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#9c27b0] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Training & Education
              </h3>

              <div className="space-y-4">
                {training.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#111111] to-[#0a0a0a] p-4 rounded-lg border border-gray-800"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.course}</h4>
                        <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{item.institution}</p>
                      </div>
                      <span className="text-[#9c27b0] text-sm font-medium">{item.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#e91e63] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Skills & Specialties
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#e91e63]/10 to-[#9c27b0]/10 px-4 py-2 rounded-lg border border-[#e91e63]/20 text-center"
                  >
                    <span className="text-white text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}