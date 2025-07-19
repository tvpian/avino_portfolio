
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MediaItem } from '@/entities/MediaItem';
import { Play, X, Calendar, User, Film } from 'lucide-react';

export default function MediaShowcase() {
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchMedia = async () => {
      const items = await MediaItem.list('order');
      setMediaItems(items);
    };
    fetchMedia();
  }, []);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'acting_reel', label: 'Acting Reel' },
    { id: 'short_film', label: 'Short Films' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'commercial', label: 'Commercials' },
    { id: 'behind_scenes', label: 'Behind Scenes' }
  ];

  const filteredItems = activeCategory === 'all'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeCategory);

  const openModal = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="media" className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#e91e63]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#9c27b0]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 elegant-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Media Showcase
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] mx-auto mb-8"
          />

          <p className="text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Explore my diverse portfolio of performances across different mediums and genres
          </p>
        </motion.div>

        {/* Refined Category Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-6 md:gap-10 mb-16"
        >
          <AnimatePresence> {/* AnimatePresence needed for layoutId to work when element is conditionally rendered */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="relative text-lg font-medium transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className={activeCategory === category.id ? 'text-white' : 'text-gray-500 hover:text-white'}>
                  {category.label}
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e91e63] to-[#9c27b0]"
                    layoutId="underline"
                    initial={{ opacity: 0 }} // Optional: initial animation for the underline
                    animate={{ opacity: 1 }} // Optional: animation for the underline
                    exit={{ opacity: 0 }} // Optional: exit animation for the underline
                    transition={{ duration: 0.3 }} // Optional: transition for the underline
                  />
                )}
              </button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Content based on whether there are items */}
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full flex items-center justify-center">
              <Film className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {activeCategory === 'all' ? 'Content Coming Soon' : `No ${categories.find(c => c.id === activeCategory)?.label} Yet`}
            </h3>
            <p className="text-gray-300 text-lg max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              {activeCategory === 'all'
                ? 'Exciting media content will be showcased here. Stay tuned for amazing performances.'
                : `${categories.find(c => c.id === activeCategory)?.label} content will be added soon. Check back later!`
              }
            </p>
          </motion.div>
        ) : (
          <>
            {/* Results Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.label}`}
              </p>
            </motion.div>

            {/* Media Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((media, index) => (
                <motion.div
                  key={media.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer relative overflow-hidden rounded-lg"
                  onClick={() => openModal(media)}
                >
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                        <img
                        src={media.thumbnailUrl}
                        alt={media.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>

                      {/* Gradient overlay matching other sections */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/20 to-[#9c27b0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {media.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {media.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full"></div>
                        <span className="text-xs font-medium text-[#e91e63] uppercase tracking-widest">
                          {media.category.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Modal with consistent styling */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-[#111111] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg border border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
                  {/* <iframe
                    src={`${selectedMedia.mediaUrl}?autoplay=1`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  /> */}
                  <iframe
                    src={`${selectedMedia.embedUrl}?autoplay=1`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    />

                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {selectedMedia.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] mb-6"></div>
                  <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {selectedMedia.description}
                  </p>

                  <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
                     {selectedMedia.year && (
                       <div className="flex items-center gap-2">
                         <Calendar size={14} className="text-[#e91e63]"/>
                         <span>{selectedMedia.year}</span>
                       </div>
                     )}
                     {selectedMedia.role && (
                       <div className="flex items-center gap-2">
                         <User size={14} className="text-[#e91e63]"/>
                         <span>Role: {selectedMedia.role}</span>
                       </div>
                     )}
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <X size={18}/>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
