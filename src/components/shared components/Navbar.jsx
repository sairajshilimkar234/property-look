import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from 'react-router-dom';

function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const menuRef = useRef();
	const [showProjects, setShowProjects] = useState(false);
	const [showBenefits, setShowBenefits] = useState(false);


	const handleOutsideClick = (e) => {
		if (mobileOpen && menuRef.current && !menuRef.current.contains(e.target)) {
			setMobileOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, [mobileOpen]);

	useEffect(() => {
		if (mobileOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
		return () => document.body.classList.remove('overflow-hidden');
	}, [mobileOpen]);

	return (
		<>
			<nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
				<div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
					{/* Logo + Company Name */}
					<div className="flex items-center space-x-3">
						<img src="../logo.jpg" alt="Logo" className="h-10 w-10 object-contain" />
						<div className="flex flex-col leading-tight">
							<span className="text-sky-600 font-bold text-xl">PROPERTY LOOK</span>
							<span className="text-sm text-black -mt-1">Authorized Channel Partner</span>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8 text-sky-600 font-medium text-lg relative">
						<Link to="/" className="hover:text-sky-800 transition-colors duration-200">Home</Link>

						{/* Projects Dropdown */}
						<div className="relative group">
							<span className="cursor-pointer hover:text-sky-800 transition-colors duration-200">Projects</span>
							<div className="absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
								<Link
									to="/projects/residential"
									className="block px-4 py-2 text-sky-600 hover:bg-sky-100 transition-colors"
								>
									Residential
								</Link>
								<Link
									to="/projects/commercial"
									className="block px-4 py-2 text-sky-600 hover:bg-sky-100 transition-colors"
								>
									Commercial
								</Link>
							</div>
						</div>

						{/* Benefits Dropdown */}
						<div className="relative group">
							<span className="cursor-pointer hover:text-sky-800 transition-colors duration-200">Benefits</span>
							<div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
								<Link
									to="/benefits/consultation"
									className="block px-4 py-2 text-sky-600 hover:bg-sky-100 transition-colors"
								>
									Free Consultation
								</Link>
								<Link
									to="/benefits/homeloan"
									className="block px-4 py-2 text-sky-600 hover:bg-sky-100 transition-colors"
								>
									Home Loan
								</Link>
							</div>
						</div>

						<Link to="/contact" className="hover:text-sky-800 transition-colors duration-200">Contact Us</Link>
					</div>


					{/* Mobile Menu Icon */}
					<div className="md:hidden">
						<button onClick={() => setMobileOpen((prev) => !prev)}>
							{mobileOpen ? (
								<X className="text-sky-600 w-6 h-6" />
							) : (
								<Menu className="text-sky-600 w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu with Backdrop */}
			{mobileOpen && (
				<div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300">
					<div
						ref={menuRef}
						className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white text-sky-600 shadow-2xl p-6 animate-slide-in z-50 overflow-y-auto"
					>
						<div className="flex justify-between items-center mb-6">
							<span className="font-extrabold text-xl">Menu</span>
							<button onClick={() => setMobileOpen(false)}>
								<X className="w-6 h-6 text-sky-600" />
							</button>
						</div>

						<nav className="flex flex-col space-y-5 font-semibold text-xl">
							<Link
								to="/"
								onClick={() => setMobileOpen(false)}
								className="text-sky-700 hover:text-sky-800 transition-colors"
							>
								Home
							</Link>

							{/* Projects Dropdown */}
							<div className="border-t border-gray-200 pt-3">
								<button
									onClick={() => setShowProjects(prev => !prev)}
									className="flex justify-between items-center w-full text-left text-sky-700 hover:text-sky-800"
								>
									<span className="font-semibold">Projects</span>
									<span
										className={`transform transition-transform duration-300 ${showProjects ? "rotate-180" : "rotate-0"}`}
									>
										{showProjects ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
									</span>
								</button>
								<div
									className={`mt-2 pl-3 border-l-2 border-sky-200 transition-all duration-300 ease-in-out overflow-hidden ${showProjects ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
										}`}
								>
									<Link
										to="/projects/residential"
										onClick={() => setMobileOpen(false)}
										className="block py-1 hover:text-sky-800 transition-colors"
									>
										Residential
									</Link>
									<Link
										to="/projects/commercial"
										onClick={() => setMobileOpen(false)}
										className="block py-1 hover:text-sky-800 transition-colors"
									>
										Commercial
									</Link>
								</div>
							</div>

							{/* Benefits Dropdown */}
							<div className="border-t border-gray-200 pt-3">
								<button
									onClick={() => setShowBenefits(prev => !prev)}
									className="flex justify-between items-center w-full text-left text-sky-700 hover:text-sky-800"
								>
									<span className="font-semibold">Benefits</span>
									<span
										className={`transform transition-transform duration-300 ${showBenefits ? "rotate-180" : "rotate-0"}`}
									>
										{showBenefits ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
									</span>
								</button>
								<div
									className={`mt-2 pl-3 border-l-2 border-sky-200 transition-all duration-300 ease-in-out overflow-hidden ${showBenefits ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
										}`}
								>
									<Link
										to="/benefits/consultation"
										onClick={() => setMobileOpen(false)}
										className="block py-1 hover:text-sky-800 transition-colors"
									>
										Free Consultation
									</Link>
									<Link
										to="/benefits/homeloan"
										onClick={() => setMobileOpen(false)}
										className="block py-1 hover:text-sky-800 transition-colors"
									>
										Home Loan
									</Link>
								</div>
							</div>

							<Link
								to="/contact"
								onClick={() => setMobileOpen(false)}
								className="text-sky-700 hover:text-sky-800 transition-colors border-t border-gray-200 pt-3"
							>
								Contact Us
							</Link>
						</nav>
					</div>
				</div>
			)}


			{/* Animation Styles */}
			<style>{`
        @keyframes slide-in {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
		</>
	);
}

export default Navbar;
