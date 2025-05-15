import React, { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { motion, useInView } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

function LoanForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanAmount: '',
    income: '',
    finalisedProperty: '',
    profession: '',
    age: '',
    cibilScore: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Replace this with your actual key
    form.append('subject', 'New Home Loan Application');
    form.append('from_name', formData.name);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('loanAmount', formData.loanAmount);
    form.append('income', formData.income);
    form.append('finalisedProperty', formData.finalisedProperty);
    form.append('profession', formData.profession);
    form.append('age', formData.age);
    form.append('cibilScore', formData.cibilScore);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });
      const result = await response.json();

      if (result.success) {
        toast.success('Form submitted successfully!', {
          position: 'top-center',
          autoClose: 3000
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          loanAmount: '',
          income: '',
          finalisedProperty: '',
          profession: '',
          age: '',
          cibilScore: ''
        });
      } else {
        toast.error('Form submission failed. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Try again later.');
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-white px-6 md:px-24 py-5 text-sky-900">
      <ToastContainer />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-sky-600 mb-6 text-center">
          Apply for Home Loan
        </h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Email (optional) */}
          <div>
            <label className="block mb-1 font-semibold">Email (optional)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Required Loan Amount */}
          <div>
            <label className="block mb-1 font-semibold">Required Loan Amount</label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="Enter loan amount (₹)"
              required
              min="0"
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Income Gross Per Month */}
          <div>
            <label className="block mb-1 font-semibold">Income (Gross per Month)</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              placeholder="Enter your monthly gross income (₹)"
              required
              min="0"
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Finalised Property */}
          <div>
            <label className="block mb-1 font-semibold">Have you finalised the property?</label>
            <select
              name="finalisedProperty"
              value={formData.finalisedProperty}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Profession */}
          <div>
            <label className="block mb-1 font-semibold">Profession</label>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="">Select</option>
              <option value="Job">Job</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1 font-semibold">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
              min="18"
              max="100"
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Approx CIBIL Score */}
          <div>
            <label className="block mb-1 font-semibold">Approximate CIBIL Score</label>
            <input
              type="number"
              name="cibilScore"
              value={formData.cibilScore}
              onChange={handleChange}
              placeholder="Enter your CIBIL score"
              required
              min="300"
              max="900"
              className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default LoanForm;
