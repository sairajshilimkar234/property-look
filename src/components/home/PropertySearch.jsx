import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PropertySearch() {
  const [propertyType, setPropertyType] = useState("Residential");
  const [isLoading, setIsLoading] = useState(false); // State for fade animation
  const navigate = useNavigate();

  const areas = [
    "Kharadi / Mundhwa / Koregaon Park / Dhanori",
    "Baner / Wakad / Hinjewadi / Tathawade",
    "Bibwewadi / NIBM Road",
    "Kothrud / Bavdhan",
    "Salisbury Park / Sinhgad Road",
  ];
  const residentialInventory = ["2 BHK", "3 BHK", "4 BHK and above"];
  const commercialInventory = ["Office Space", "Shop"];
  const budgets = ["< ₹50L", "₹50L - ₹1.00 Cr", "> ₹1.00 Cr"];

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
    <div
      className="w-full bg-gradient-to-br from-sky-100 to-sky-70 py-7 px-5" // fixed color here
      id="property-form"
      ref={ref}
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold text-center text-sky-800 mb-6"
      >
        Find Your Perfect Property
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
                  ? "text-sky-800 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-sky-800"
                  : "text-gray-800 hover:text-sky-800"
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
            <button
              className="w-full bg-sky-800 hover:bg-sky-700 text-white py-2 rounded font-semibold transition"
              onClick={() => navigate("/maintainance")} // fixed onClick handler
            >
              Search
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PropertySearch;
