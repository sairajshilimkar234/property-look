import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function PropertySearch() {
  const [propertyType, setPropertyType] = useState("Residential");
  const [isLoading, setIsLoading] = useState(false); // State for fade animation

  const areas = ["Kharadi", "Viman Nagar", "Baner", "Wakad", "Hinjewadi"];
  const residentialInventory = ["1 BHK", "2 BHK", "3 BHK"];
  const commercialInventory = ["Office Space", "Shop"];
  const budgets = ["< ₹30L", "₹30L - ₹50L", "₹50L - ₹75L", "> ₹75L"];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePropertyTypeChange = (type) => {
    setIsLoading(true); // Trigger fade-out animation
    setTimeout(() => {
      setPropertyType(type); // Change property type after the fade-out duration
      setIsLoading(false); // Trigger fade-in animation
    }, 300); // 300ms delay before switching to the new property type
  };

  return (
    <div className="w-full bg-gradient-to-br from-sky-100 to-sky-70 py-7 px-5" id="property-form" ref={ref}>
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold text-center text-sky-700 mb-6"
      >
        Find your perfect property
      </motion.h2>

      {/* Animated Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl"
      >
        {/* Property Type Toggle */}
        <div className="flex justify-center mb-6 space-x-8 text-lg font-medium">
          {["Residential", "Commercial"].map((type) => (
            <button
              key={type}
              onClick={() => handlePropertyTypeChange(type)}
              className={`relative pb-1 transition ${
                propertyType === type
                  ? "text-sky-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-sky-600"
                  : "text-gray-500 hover:text-sky-600"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Form with fade animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 0 : 1 }} // Fade out when loading
          transition={{ duration: 0.3 }} // 0.3s for fade-out effect
          className="space-y-4"
        >
          {/* Inventory Type */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Inventory Type
            </label>
            <select className="w-full border p-2 rounded text-gray-500">
              <option value="">Please select your choice</option>
              {(propertyType === "Residential"
                ? residentialInventory
                : commercialInventory
              ).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Area */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Pune City Area
            </label>
            <select className="w-full border p-2 rounded text-gray-500">
              <option value="">Please select your choice</option>
              {areas.map((area) => (
                <option key={area}>{area}</option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Budget
            </label>
            <select className="w-full border p-2 rounded text-gray-500">
              <option value="">Please select your choice</option>
              {budgets.map((range) => (
                <option key={range}>{range}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="pt-2">
            <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded font-semibold transition">
              Search
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PropertySearch;
