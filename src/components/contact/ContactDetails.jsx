import React, { useState } from "react";
import {
	FaMapMarkerAlt,
	FaPhone,
	FaWhatsapp,
	FaEnvelope,
	FaUser,
	FaMobileAlt,
	FaCommentDots,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
	const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");
	const [captchaToken, setCaptchaToken] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const loadCaptcha = () => {
		if (window.hcaptcha) {
			window.hcaptcha.render("hcaptcha-container", {
				sitekey: "YOUR_HCAPTCHA_SITE_KEY",
				callback: (token) => {
					setCaptchaToken(token);
				},
			});
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		let validationErrors = {};

		if (!formData.name.trim()) validationErrors.name = "Name is required";
		if (!formData.phone.trim()) validationErrors.phone = "Phone number is required";
		if (!formData.message.trim()) validationErrors.message = "Message is required";
		if (!captchaToken) validationErrors.captcha = "Please verify the captcha";

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		const payload = {
			access_key: "YOUR_ACCESS_KEY_HERE",
			name: formData.name,
			phone: formData.phone,
			message: formData.message,
			"h-captcha-response": captchaToken,
		};

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});
			const result = await response.json();

			if (result.success) {
				setSuccessMessage("Thank you! Your message has been sent.");
				setFormData({ name: "", phone: "", message: "" });
				setCaptchaToken("");
				window.hcaptcha.reset();
			} else {
				setSuccessMessage("Something went wrong. Please try again.");
			}
		} catch (error) {
			setSuccessMessage("An error occurred. Please try later.");
		}
	};

	React.useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://js.hcaptcha.com/1/api.js";
		script.async = true;
		script.defer = true;
		script.onload = loadCaptcha;
		document.body.appendChild(script);
	}, []);

	return (
		<section className="bg-white  md:py-5 md:px-5">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="max-w-6xl mx-auto shadow-lg flex flex-col md:flex-row overflow-hidden border border-sky-300"
			>
				{/* Left Side */}
				<div className="md:w-1/2 bg-sky-50 p-8 md:p-10 flex flex-col justify-center space-y-6">
					<h2 className="text-3xl font-bold text-sky-600 mb-5 text-center md:text-left">Get in Touch</h2>
					<div className="space-y-4 text-sky-700 text-lg">
						<div className="flex items-center space-x-3">
							<FaMapMarkerAlt className="text-sky-500 text-xl" />
							<p>Pune, Maharashtra</p>
						</div>
						<div className="flex items-center space-x-3">
							<FaPhone className="text-sky-500 text-xl" />
							<p>+91 9657308229</p>
						</div>
						<div className="flex items-center space-x-3">
							<FaWhatsapp className="text-green-500 text-xl" />
							<a href="https://wa.me/9657308229" target="_blank" rel="noreferrer" className="hover:text-sky-900 transition">
							+91 9657308229
							</a>
						</div>
						<div className="flex items-center space-x-3">
							<FaEnvelope className="text-sky-500 text-xl" />
							<p>propertylook.pl@gmail.com</p>
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className="md:w-1/2 p-6 md:p-10 bg-white flex flex-col justify-center">
					<h2 className="text-3xl font-bold text-sky-600 mb-2 text-center md:text-left">Contact Us</h2>
					<p className="text-sky-700 mb-4 text-center md:text-left">
						Have questions? Fill out the form and we’ll get back to you shortly.
					</p>

					{successMessage && (
						<p className="text-green-600 font-semibold mb-3 text-center">{successMessage}</p>
					)}

					<form onSubmit={onSubmit} className="space-y-4">
						{/* Name */}
						<div className="relative">
							<FaUser className="absolute top-4 left-4 text-sky-400" />
							<input
								type="text"
								name="name"
								placeholder="Your Full Name"
								value={formData.name}
								onChange={handleChange}
								className={`w-full pl-12 pr-4 py-3 rounded-md border ${errors.name ? "border-red-500" : "border-sky-300"
									} text-sky-800 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500`}
							/>
							{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
						</div>

						{/* Phone */}
						<div className="relative">
							<FaMobileAlt className="absolute top-4 left-4 text-sky-400" />
							<input
								type="tel"
								name="phone"
								placeholder="Your Mobile Number"
								value={formData.phone}
								onChange={handleChange}
								className={`w-full pl-12 pr-4 py-3 rounded-md border ${errors.phone ? "border-red-500" : "border-sky-300"
									} text-sky-800 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500`}
							/>
							{errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
						</div>

						{/* Message */}
						<div className="relative">
							<FaCommentDots className="absolute top-4 left-4 text-sky-400" />
							<textarea
								name="message"
								placeholder="Your Message"
								value={formData.message}
								onChange={handleChange}
								rows={4}
								className={`w-full pl-12 pr-4 py-3 rounded-md border ${errors.message ? "border-red-500" : "border-sky-300"
									} text-sky-800 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none`}
							/>
							{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
						</div>

						{/* hCaptcha */}
						<div id="hcaptcha-container" className="mb-2" />
						{errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md transition"
						>
							Send Message
						</button>
					</form>
				</div>
			</motion.div>
		</section>
	);
};

export default Contact;
