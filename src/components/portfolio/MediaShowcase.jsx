
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
    <section id="media" className="py-16 md:py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#B8860B]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#DAA520]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 elegant-pattern"></div>

        {/* Dynamic floating elements */}
        <motion.div
          className="absolute top-1/3 right-1/6 w-14 h-14 md:w-18 md:h-18 border border-[#B8860B]/25 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 11, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/5 w-18 h-18 md:w-22 md:h-22 border-2 border-[#DAA520]/25"
          animate={{
            rotate: [0, 270, 540],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Media Showcase
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mx-auto mb-6 md:mb-8"
          />

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Explore my diverse portfolio of performances across different mediums and genres
          </p>
        </motion.div>

        {/* Refined Category Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4 md:gap-6 lg:gap-10 mb-12 md:mb-16"
        >
          <AnimatePresence>
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
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B8860B] to-[#DAA520]"
                    layoutId="underline"
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
            className="text-center py-12 md:py-16"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center">
              <Film className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {activeCategory === 'all' ? 'Content Coming Soon' : `No ${categories.find(c => c.id === activeCategory)?.label} Yet`}
            </h3>
            <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
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
              className="text-center mb-6 md:mb-8"
            >
              <p className="text-xs md:text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.label}`}
              </p>
            </motion.div>

            {/* Media Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((media, index) => (
                <motion.div
                  key={media.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer relative overflow-hidden rounded-lg transition-transform duration-500 ease-in-out hover:-translate-y-2"
                  onClick={() => openModal(media)}
                >
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={media.thumbnailUrl || "https://images.unsplash.com/photo-1489278353717-f64c6ee8a40c?w=400&h=250&fit=crop"}
                        alt={media.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>

                      <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-[#DAA520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {media.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {media.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full"></div>
                        <span className="text-xs font-medium text-[#B8860B] uppercase tracking-widest">
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

        {/* Enhanced Modal */}
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
                  <iframe
                    src={`${selectedMedia.mediaUrl}?autoplay=1`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {selectedMedia.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mb-6"></div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {selectedMedia.description}
                  </p>

                  <div className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-4 text-sm text-gray-400">
                     {selectedMedia.year && (
                       <div className="flex items-center gap-2">
                         <Calendar size={14} className="text-[#B8860B]"/>
                         <span>{selectedMedia.year}</span>
                       </div>
                     )}
                     {selectedMedia.role && (
                       <div className="flex items-center gap-2">
                         <User size={14} className="text-[#B8860B]"/>
                         <span>Role: {selectedMedia.role}</span>
                       </div>
                     )}
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
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
