
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioImage } from '@/entities/PortfolioImage';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const StructuredGrid = ({ children }) => (
  <div className="hidden md:grid md:grid-cols-6 md:grid-rows-2 gap-4 h-[60vh] md:h-[80vh]">
    {children}
  </div>
);

const GridItem = ({ className, children }) => (
    <div className={className}>
      {children}
    </div>
);

export default function Gallery({ category, title }) {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await PortfolioImage.filter({ category }, 'order');
      setImages(fetchedImages);
    };
    fetchImages();
  }, [category]);

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  }

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  if (images.length === 0) return null;

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#B8860B]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#DAA520]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 elegant-pattern"></div>

        {/* Dynamic floating elements */}
        <motion.div
          className="absolute top-1/5 right-1/5 w-12 h-12 md:w-16 md:h-16 border border-[#B8860B]/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 9, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/6 w-16 h-16 md:w-20 md:h-20 border-2 border-[#DAA520]/30"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror' }}
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
            {title}
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mx-auto"
          />
        </motion.div>

        {/* Desktop Grid */}
        <StructuredGrid>
            {images.slice(0, 5).map((img, index) => {
                const classNames = [
                    'col-span-2 row-span-2',
                    'col-span-2 row-span-1',
                    'col-span-2 row-span-1',
                    'col-span-1 row-span-1',
                    'col-span-1 row-span-1',
                ];
                return (
                    <GridItem key={img.id} className={classNames[index]}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="cursor-pointer overflow-hidden group relative w-full h-full rounded-lg transition-transform duration-500 ease-in-out hover:-translate-y-2"
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-[#DAA520]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <img src={img.imageUrl} alt={img.title || 'Portfolio Image'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center">
                                        <span className="text-white text-lg">✦</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </GridItem>
                );
            })}
        </StructuredGrid>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer overflow-hidden group relative rounded-lg aspect-square transition-transform duration-500 ease-in-out hover:-translate-y-2"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 to-[#DAA520]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="relative rounded-lg overflow-hidden h-full">
                <img src={img.imageUrl} alt={img.title || 'Portfolio Image'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✦</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImageIndex(null)}
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={images[selectedImageIndex].imageUrl}
                className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => {e.stopPropagation(); handlePrev()}}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={20}/>
              </button>

              <button
                onClick={(e) => {e.stopPropagation(); handleNext()}}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={20}/>
              </button>

              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <X size={18}/>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
