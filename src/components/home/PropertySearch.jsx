import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

function PropertySearch() {
  const [name, setName] = useState("");
  const [propertyType, setPropertyType] = useState("Residential");
  const [inventory, setInventory] = useState("");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const handleSearch = () => {
    if (!name || !inventory || !area || !budget) {
      alert("Please fill in all the details.");
      return;
    }

    const message = `Hello, my name is ${name}%0aI'm looking for a property from your website propertylook.in.%0aMy requirements are:%0a• Property Type: ${propertyType}%0a• Inventory Type: ${inventory}%0a• Pune City Area: ${area}%0a• Budget: ${budget}`;
    const whatsappURL = `https://wa.me/919657308229?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className="w-full bg-gradient-to-br from-sky-100 to-sky-50 py-7 px-5"
      id="property-form"
      ref={ref}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold text-center text-sky-800 mb-6"
      >
        Find Your Perfect Property
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl"
      >
        <div className="flex justify-center mb-6 space-x-8 text-lg font-medium">
          {["Residential", "Commercial"].map((type) => (
            <button
              key={type}
              onClick={() => setPropertyType(type)}
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

        <AnimatePresence mode="wait">
          <motion.div
            key={propertyType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {/* Name Field */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* Inventory Type */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Inventory Type
              </label>
              <select
                className="w-full border p-2 rounded text-gray-700"
                value={inventory}
                onChange={(e) => setInventory(e.target.value)}
              >
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
              <select
                className="w-full border p-2 rounded text-gray-700"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
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
              <select
                className="w-full border p-2 rounded text-gray-700"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
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
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default PropertySearch;
