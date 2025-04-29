import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const menuRef = useRef();

	// Close when clicking outside the menu
	const handleOutsideClick = (e) => {
		if (mobileOpen && menuRef.current && !menuRef.current.contains(e.target)) {
			setMobileOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, [mobileOpen]);

	// Prevent body scroll when menu is open
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
					<div className="flex items-center space-x-2">
						<img src="./logo.jpg" alt="Logo" className="h-10 w-10 object-contain" />
						<span className="text-sky-600 font-bold text-xl">Property Look</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-6 text-sky-600 font-medium">
						<Link to="/" className="hover:text-sky-800 transition-colors duration-200">Home</Link>
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
						className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white text-sky-600 shadow-lg p-5 animate-slide-in z-50 overflow-y-auto"
					>
						<div className="flex justify-between items-center mb-6">
							<span className="font-bold text-lg">Menu</span>
							<button onClick={() => setMobileOpen(false)}>
								<X className="w-6 h-6" />
							</button>
						</div>
						<nav className="flex flex-col space-y-4 font-medium text-xl">
							<Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-sky-800 transition-colors">Home</Link>
							<Link to="/contact" onClick={() => setMobileOpen(false)} className="hover:text-sky-800 transition-colors">Contact Us</Link>
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
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
		</>
	);
}

export default Navbar;
