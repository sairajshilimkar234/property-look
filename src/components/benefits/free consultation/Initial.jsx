import React, { useRef } from 'react';
import Banner from '../../shared components/Banner';
import { FaMapMarkedAlt, FaHandshake, FaRupeeSign } from 'react-icons/fa';
import { motion, useInView} from 'framer-motion';

function Initial() {

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<div>
			<Banner
				heading="Free Consultation"
				bgImage="https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg"
			/>
			{/* Info Section */}
				<section className="bg-white px-6 md:px-24 py-5 text-sky-800">
				<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: 'easeOut' }}
				>
				<h1 className="text-3xl font-bold text-sky-600 mb-2">FREE CONSULTATION</h1>
				<hr className="border-sky-500 mb-6" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<p className="text-lg mb-5 leading-relaxed">
						PropertyLook is your trusted real estate advisor built on the pillars of transparency, trust,
						and deep market expertise. As a digital-first platform with a wide range of verified property
						listings, we simplify your home search journey from start to finish. We help you shortlist
						favorite homes, schedule site visits, and even assist with home loans and property
						registrations—so your dream home becomes a secure, smart investment.
					</p>

					<p className="text-lg leading-relaxed">
						We are a tech-enabled platform bringing together buyers, sellers, and agents under one roof. By
						leveraging automation, smart listings, and professional support, PropertyLook is redefining the
						property discovery experience. Whether you're a first-time buyer or seasoned investor, our
						expert team is committed to ensuring that your search ends in satisfaction.
					</p>
				</motion.div>
			</section>

			{/* Features Section */}
			<section className="bg-sky-50 py-12 px-6 md:px-24">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{/* Feature 1 */}
					<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-sky-200">
						<FaMapMarkedAlt className="text-sky-500 text-4xl mb-4" />
						<h3 className="text-xl font-semibold text-sky-700 mb-2">Verified Properties</h3>
						<p className="text-sky-700">
							Every property listing is manually verified, ensuring trust and transparency in your
							property search.
						</p>
					</div>

					{/* Feature 2 */}
					<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-sky-200">
						<FaHandshake className="text-sky-500 text-4xl mb-4" />
						<h3 className="text-xl font-semibold text-sky-700 mb-2">Expert Support</h3>
						<p className="text-sky-700">
							Our advisors help you every step of the way—from site visits to negotiations and legal
							assistance.
						</p>
					</div>

					{/* Feature 3 */}
					<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-sky-200">
						<FaRupeeSign className="text-sky-500 text-4xl mb-4" />
						<h3 className="text-xl font-semibold text-sky-700 mb-2">Best Deals</h3>
						<p className="text-sky-700">
							Get exclusive deals on premium properties and home loans with zero hidden charges.
						</p>
					</div>
				</motion.div>
			</section>
		</div>
	);
}

export default Initial;
