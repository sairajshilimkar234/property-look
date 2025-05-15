import React, { useRef } from 'react';
import Banner from '../../shared components/Banner';
import { motion, useInView } from 'framer-motion';

function Initial() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<div>
			<Banner
				heading="Home Loan"
				bgImage="https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg"
			/>

			<section className="px-6 md:px-24 py-5 bg-sky-50 text-sky-900">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					<h2 className="text-3xl font-bold mb-4 text-sky-600">Unlock Your Dream Home</h2>
					<hr className="border-sky-500 mb-6" />
					<p className="mb-4 text-xl">
						Whether you're buying your first home or upgrading to your dream space, we make home financing simple and hassle-free. With competitive interest rates and expert guidance, we help you every step of the way.
					</p>
					<ul className="list-disc pl-6 text-base text-lg space-y-2">
						<li>Low interest rates and easy EMIs</li>
						<li>Minimal documentation required</li>
						<li>Quick approval and disbursal process</li>
						<li>Personalized loan solutions based on your needs</li>
					</ul>
				</motion.div>
			</section>
		</div>
	);
}

export default Initial;
