import React, { useRef } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

const ContactForm = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Thank you! We'll contact you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form.");
    }
  };

  return (
    <section className="bg-sky-50 py-8 px-6 md:px-20" id="contact">
      <ToastContainer />

      {/* Heading */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-sky-700 mb-3">Get in Touch</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          If you would like to know more details or something specific about home loan, feel free to contact us. Our site representative will give you a call back.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <input type="hidden" name="access_key" value="e0972470-5cfc-4e9a-90fe-9559976760e2" />

        {/* Input Fields */}
        {[
          { label: "Name *", name: "name", type: "text", required: true },
          { label: "Mobile Number *", name: "mobile", type: "tel", required: true },
          { label: "Email (optional)", name: "email", type: "email", required: false },
        ].map(({ label, name, type, required }, index) => (
          <motion.div key={name} className="relative" variants={fadeInUp} custom={index}>
            <input
              type={type}
              name={name}
              required={required}
              className="peer w-full border-b border-gray-300 bg-transparent pt-6 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
              placeholder={label}
            />
            <label
              htmlFor={name}
              className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-sky-600"
            >
              {label}
            </label>
          </motion.div>
        ))}

        {/* Query Field - Optional */}
        <motion.div className="relative" variants={fadeInUp} custom={3}>
          <textarea
            name="query"
            rows="4"
            required={false}
            className="peer w-full border-b border-gray-300 bg-transparent pt-6 pb-2 resize-none text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
            placeholder="Query"
          ></textarea>
          <label
            htmlFor="query"
            className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-sky-600"
          >
            Query (Optional)
          </label>
        </motion.div>

        {/* Submit Button */}
        <motion.div className="text-center pt-2" variants={fadeInUp} custom={4}>
          <button
            type="submit"
            className="bg-sky-800 hover:bg-sky-700 text-white px-6 py-2 rounded-md font-medium transition"
          >
            Submit
          </button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
