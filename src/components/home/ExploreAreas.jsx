import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const areaData = [
  {
    name: "Pune East",
    image:
      "../../majestic.jpeg",
  },
  {
    name: "Pune West",
    image:
      "../../mayuk.jpeg",
  },
  {
    name: "Pune South",
    image:
      "../../sterling.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.9,
    },
  }),
};

function ExploreAreas() {
  const navigate = useNavigate();

  const handleViewDetails = (areaName) => {
    // Navigate to properties/areaname URL (encode areaName for safety)
    navigate(`/properties/${encodeURIComponent(areaName)}`);
  };

  return (
    <div className="bg-white py-5 px-5 md:px-10">
      <h2 className="text-3xl font-bold text-sky-700 text-center mb-8">
        Explore Areas
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaData.map((area, i) => (
            <motion.div
              key={area.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${area.image})` }}
              ></div>

              {/* Overlay Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4 text-white bg-black/40">
                <div>
                  <h3 className="text-xl font-bold">{area.name}</h3>
                </div>

                <button
                  onClick={() => handleViewDetails(area.name)}
                  className="bg-white text-sky-600 font-medium py-2 px-4 rounded hover:bg-sky-100 transition self-start"
                >
                  View Properties
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreAreas;
