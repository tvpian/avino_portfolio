import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioImage } from '@/entities/PortfolioImage';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const StructuredGrid = ({ children }) => (
  <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[80vh]">
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

//   useEffect(() => {
//     const fetchImages = async () => {
//       const fetchedImages = await PortfolioImage.filter({ category }, 'order');
//       setImages(fetchedImages);
//     };
//     fetchImages();
//   }, [category]);

useEffect(() => {
  const fetchImages = async () => {
    const fetched = await PortfolioImage.filter({ category });
    setImages(fetched);
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
    <section id="portfolio" className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] relative overflow-hidden">
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
            {title}
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] mx-auto"
          />
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
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
                                className="cursor-pointer overflow-hidden group relative w-full h-full rounded-lg"
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                {/* Gradient overlay matching hero style */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/20 to-[#9c27b0]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                                <div className="relative w-full h-full rounded-lg overflow-hidden">
                                    <img src={img.imageUrl} alt={img.title || 'Portfolio Image'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Overlay content */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full flex items-center justify-center">
                                            <span className="text-white text-lg">✦</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </GridItem>
                    );
                })}
            </StructuredGrid>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer overflow-hidden group relative rounded-lg"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/20 to-[#9c27b0]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img src={img.imageUrl} alt={img.title || 'Portfolio Image'} className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal with consistent styling */}
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

              {/* Navigation buttons with gradient styling */}
              <button
                onClick={(e) => {e.stopPropagation(); handlePrev()}}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={24}/>
              </button>

              <button
                onClick={(e) => {e.stopPropagation(); handleNext()}}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={24}/>
              </button>

              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <X size={20}/>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}