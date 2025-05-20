import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const images = [
  "../slider1.jpeg",
  "../slider2.jpg",
  "../slider3.jpeg",
  "../slider4.jpeg",
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: '-100px' }); // triggers only once when 100px into view

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden pt-15 mb-5">
      {/* Slider */}
      <div className="relative overflow-hidden">
        <div className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="w-full h-[250px] md:h-[500px] flex-shrink-0"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <motion.div
              key={idx}
              className={`w-2 h-2 rounded-full ${current === idx ? 'bg-sky-800 scale-125' : 'bg-gray-400'
                }`}
              animate={{
                scale: current === idx ? 1.25 : 1,
                opacity: current === idx ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>


      {/* Animated Heading & Tagline */}
      <div className="text-center mt-6" ref={textRef}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-3xl md:text-3xl font-bold text-sky-800 font-serif"
        >
          PROPERTY LOOK
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
          className="text-black text-m md:text-m mt-1 font-sans-serif"
        >
          Discover your dream property with trusted guidance and expert service.
        </motion.p>
      </div>
    </div>
  );
}

export default ImageSlider;