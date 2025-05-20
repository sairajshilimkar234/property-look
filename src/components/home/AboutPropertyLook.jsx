import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  RefreshCw,
  Users,
} from "lucide-react";

const AboutPropertyLook = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("property-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const badges = [
    {
      icon: <Building2 className="text-sky-600" size={28} />,
      label: "RERA Verified Listings",
    },
    {
      icon: <ShieldCheck className="text-sky-600" size={28} />,
      label: "100% Secure Platform",
    },
    {
      icon: <Users className="text-sky-600" size={28} />,
      label: "Trusted Agents Only",
    },
    {
      icon: <RefreshCw className="text-sky-600" size={28} />,
      label: "Daily Updated Data",
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-sky-50 to-sky-50 py-8 px-4 md:px-20 overflow-hidden">
      {/* Background pattern (optional decorative touch) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-sky-700 mb-6">
            About Property Look
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Property Look is your trusted destination for finding genuine and RERA-approved properties in Pune. Whether you're buying, renting, or investing, we simplify your search with verified listings and expert support with no comission and zero brokerage.
          </p>
          <p className="text-gray-700 text-lg">
            Our platform is designed to provide transparency, clarity, and speed in real estate decisions. Say goodbye to fake listings and hello to a smarter, smoother property experience.
          </p>
        </motion.div>

        {/* Right Side - Badges + CTA */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Trust Badges Grid */}
          <div className="grid grid-cols-2 gap-5 w-full max-w-sm">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white shadow-md rounded-xl px-4 py-3"
              >
                <div className="p-2 bg-sky-100 rounded-full">{badge.icon}</div>
                <span className="text-gray-800 font-medium text-sm">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* Explore Button */}
          <button
            onClick={scrollToForm}
            className="mt-6 bg-sky-800 hover:bg-sky-700 text-white px-6 py-3 rounded-md font-medium transition shadow-md"
          >
            Explore Properties
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPropertyLook;
