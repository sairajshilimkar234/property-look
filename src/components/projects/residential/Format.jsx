import React, { useRef } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import properties from "../../../data/PropertiesForPL";
import { FaFilePdf, FaDraftingCompass, FaFileInvoiceDollar } from "react-icons/fa";

// Individual Property Card component with scroll animation
const PropertyCard = ({ property }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const message = `Hi, I’m interested in ${property.name}. Please share the brochure, floor plan, and cost sheet details.`;
  const whatsappLink = `https://wa.me/919657308229?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group flex flex-col lg:flex-row bg-white border border-sky-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      {property.image && (
        <div className="w-full  lg:h-auto overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transform transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="w-full lg:w-2/3 p-8 flex flex-col justify-between bg-gray-50">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-sky-800 font-serif">{property.name}</h2>

          <div className="text-gray-900 divide-y divide-gray-400 border rounded-md bg-white p-4 mx-0 mb-4 shadow-sm">
            <div className="flex items-center gap-3 pb-2">
              <FaMapMarkerAlt className="text-sky-600 text-base" />
              <span><strong>Location:</strong> {property.location}</span>
            </div>
            <div className="flex items-center gap-3 py-2">
              <FaHome className="text-sky-600 text-base" />
              <span><strong>Inventory:</strong> {property.inventory}</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <FaRupeeSign className="text-sky-600 text-base" />
              <span><strong>Starting from:</strong> {property.budget}</span>
            </div>
          </div>

          <p className="text-lg font-serif text-black">Get More Details :</p>

          {/* Icons */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
            {[
              { label: "Brochure", icon: <FaFilePdf className="text-sky-700 text-lg" /> },
              { label: "Floor Plan", icon: <FaDraftingCompass className="text-sky-700 text-lg" /> },
              { label: "Cost Sheet", icon: <FaFileInvoiceDollar className="text-sky-700 text-lg" /> },
            ].map(({ label, icon }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-white hover:bg-sky-50 text-sky-800 border border-sky-700 text-sm font-medium p-5 rounded-xl shadow transition h-28 w-full text-center"
              >
                {icon}
                <span className="mt-2">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <p className="text-sm text-gray-700 mb-5">
            Let us help you explore your ideal home with full transparency and support.
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-3 py-2.5 px-5 rounded-lg text-sm font-semibold shadow-md transition duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const ResidentialProperties = () => {
  const residentialProperties = properties.filter((property) =>
    property.type.toLowerCase().includes("residential")
  );

  return (
    <div className="p-6 max-w-screen-xl mx-auto font-sans">
      {residentialProperties.length > 0 ? (
        <div className="space-y-10">
          {residentialProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <motion.p
          className="text-center text-gray-500 text-lg mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No residential properties found.
        </motion.p>
      )}
    </div>
  );
};

export default ResidentialProperties;
