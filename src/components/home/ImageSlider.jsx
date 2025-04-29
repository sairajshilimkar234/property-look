import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const images = [
  'https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg',
  'https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg',
  'https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg',
  'https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg',
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
      <div className="relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[250px] md:h-[500px] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                current === idx ? 'bg-sky-600' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animated Heading & Tagline */}
      <div className="text-center mt-6" ref={textRef}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-3xl font-bold text-sky-600"
        >
          Property Look
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="text-gray-600 text-sm md:text-base mt-1"
        >
          Discover your dream property with trusted guidance and expert service.
        </motion.p>
      </div>
    </div>
  );
}

export default ImageSlider;
