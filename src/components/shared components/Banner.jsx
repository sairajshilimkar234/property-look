import React from 'react';
import { motion } from 'framer-motion';

function Banner({ heading, bgImage="../bg_blur.png" }) {
  return (
    <div className="relative w-full h-[250px] md:h-[500px] overflow-hidden">
      {/* Background Image with Blur and animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src={bgImage}
          alt={heading}
          className="w-full h-full object-cover filter blur scale-105"
        />
      </motion.div>

      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Centered Text with animation */}
      <motion.div
        className="relative z-20 flex items-center justify-center h-full px-4 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md font-serif">
          {heading}
        </h1>
      </motion.div>
    </div>
  );
}

export default Banner;
