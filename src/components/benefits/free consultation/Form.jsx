import React, { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { motion, useInView } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		requirement: '',
		location: '',
		budget: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = new FormData();
		form.append('access_key', 'e0972470-5cfc-4e9a-90fe-9559976760e2');
		form.append('subject', 'New Consultation Request');
		form.append('name', formData.name);
		form.append('phone', formData.phone);
		form.append('email', formData.email);
		form.append('requirement', formData.requirement);
		form.append('location', formData.location);
		form.append('budget', formData.budget);

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
					requirement: '',
					location: '',
					budget: ''
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
		<section className="bg-white px-6 md:px-24 py-5 text-sky-900 mb-5">
			<ToastContainer />
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: 'easeOut' }}
			>
				<h2 className="text-3xl font-bold text-sky-600 mb-6 text-center">
					Get Your Free Consultation
				</h2>

				<form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
					{/* Full Name */}
					<div>
						<label className="block mb-1 font-semibold">Full Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							placeholder="Enter your name"
							className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
						/>
					</div>

					{/* Mobile Number */}
					<div>
						<label className="block mb-1 font-semibold">Mobile Number</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required
							placeholder="Enter your mobile number"
							className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
						/>
					</div>

					{/* Email */}
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

					{/* Requirement */}
					<div>
						<label className="block mb-1 font-semibold">Your Requirement</label>
						<select
							name="requirement"
							value={formData.requirement}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
						>
							<option value="">Select</option>
							<option value="2 BHK">2 BHK</option>
							<option value="3 BHK">3 BHK</option>
							<option value="4 BHK and above">4 BHK and above</option>
							<option value="Commercial / Shop">Commercial / Shop</option>
						</select>
					</div>

					{/* Preferred Location */}
					<div>
						<label className="block mb-1 font-semibold">Preferred Location</label>
						<input
							type="text"
							name="location"
							value={formData.location}
							onChange={handleChange}
							required
							placeholder="Enter location"
							className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
						/>
					</div>

					{/* Budget */}
					<div>
						<label className="block mb-1 font-semibold">Budget</label>
						<select
							name="budget"
							value={formData.budget}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
						>
							<option value="">Select</option>
							<option value="₹20L - ₹30L">₹20L - ₹30L</option>
							<option value="₹30L - ₹50L">₹30L - ₹50L</option>
							<option value="₹50L - ₹80L">₹50L - ₹80L</option>
							<option value="₹80L and above">₹80L and above</option>
						</select>
					</div>

					{/* Submit */}
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

export default Form;
