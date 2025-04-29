import { useEffect, useState } from 'react';

const images = [
  'https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg',
  'https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg',
  'https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg',
  'https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg',
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden pt-15">
      {/* Make this div relative so dots stay inside the image area */}
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

        {/* Dots should be inside the relative container */}
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

      {/* Tagline remains as is */}
      <div className="text-center mt-4">
        <h2 className="text-2xl md:text-3xl font-bold text-sky-600">Property Look</h2>
        <p className="text-gray-600 text-sm md:text-base mt-1">
          Discover your dream property with trusted guidance and expert service.
        </p>
      </div>
    </div>
  );
}

export default ImageSlider;
