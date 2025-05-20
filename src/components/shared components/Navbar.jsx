import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [desktopProjectsOpen, setDesktopProjectsOpen] = useState(false);
  const [desktopBenefitsOpen, setDesktopBenefitsOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  const handleOutsideClick = (e) => {
    if (
      (mobileOpen || desktopProjectsOpen || desktopBenefitsOpen) &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setMobileOpen(false);
      setDesktopProjectsOpen(false);
      setDesktopBenefitsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [mobileOpen, desktopProjectsOpen, desktopBenefitsOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bg-sky-800 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <img src="../logo.jpg" alt="Logo" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xl font-serif">PROPERTY LOOK</span>
              <span className="text-sm text-black font-serif text-gray-300">Authorized Channel Partner</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-white font-medium text-lg relative" ref={menuRef}>
            <Link
              to="/"
              className={`hover:text-sky-600 transition duration-200 ${
                isActive('/') ? 'underline underline-offset-4 font-semibold' : ''
              }`}
            >
              Home
            </Link>

            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setDesktopProjectsOpen((prev) => !prev);
                  setDesktopBenefitsOpen(false);
                }}
                className="flex items-center hover:text-sky-600 transition duration-200 focus:outline-none"
              >
                Projects
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    desktopProjectsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg transition-all duration-300 z-50 ${
                  desktopProjectsOpen
                    ? 'opacity-100 visible max-h-60'
                    : 'opacity-0 invisible max-h-0 overflow-hidden'
                }`}
              >
                <Link
                  to="/projects/residential"
                  className={`block px-4 py-2 text-sky-700 hover:bg-sky-100 transition-colors ${
                    isActive('/projects/residential') ? 'font-semibold underline underline-offset-4' : ''
                  }`}
                  onClick={() => setDesktopProjectsOpen(false)}
                >
                  Residential
                </Link>
                <Link
                  to="/projects/commercial"
                  className={`block px-4 py-2 text-sky-700 hover:bg-sky-100 transition-colors ${
                    isActive('/projects/commercial') ? 'font-semibold underline underline-offset-4' : ''
                  }`}
                  onClick={() => setDesktopProjectsOpen(false)}
                >
                  Commercial
                </Link>
              </div>
            </div>

            {/* Benefits Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setDesktopBenefitsOpen((prev) => !prev);
                  setDesktopProjectsOpen(false);
                }}
                className="flex items-center hover:text-sky-600 transition duration-200 focus:outline-none"
              >
                Benefits
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    desktopBenefitsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-300 z-50 ${
                  desktopBenefitsOpen
                    ? 'opacity-100 visible max-h-60'
                    : 'opacity-0 invisible max-h-0 overflow-hidden'
                }`}
              >
                <Link
                  to="/benefits/consultation"
                  className={`block px-4 py-2 text-sky-700 hover:bg-sky-100 transition-colors ${
                    isActive('/benefits/consultation') ? 'font-semibold underline underline-offset-4' : ''
                  }`}
                  onClick={() => setDesktopBenefitsOpen(false)}
                >
                  Free Consultation
                </Link>
                <Link
                  to="/benefits/homeloan"
                  className={`block px-4 py-2 text-sky-700 hover:bg-sky-100 transition-colors ${
                    isActive('/benefits/homeloan') ? 'font-semibold underline underline-offset-4' : ''
                  }`}
                  onClick={() => setDesktopBenefitsOpen(false)}
                >
                  Home Loan
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className={`hover:text-sky-600 transition duration-200 ${
                isActive('/contact') ? 'underline underline-offset-4 font-semibold' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen((prev) => !prev)}>
              {mobileOpen ? (
                <X className="text-white w-6 h-6" />
              ) : (
                <Menu className="text-white w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300">
          <div
            ref={menuRef}
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white text-sky-600 shadow-2xl p-6 animate-slide-in z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-extrabold text-xl">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6 text-sky-800" />
              </button>
            </div>

            <nav className="flex flex-col space-y-5 font-semibold text-xl">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`text-sky-800 hover:text-sky-800 transition-colors ${
                  isActive('/') ? 'underline underline-offset-4' : ''
                }`}
              >
                Home
              </Link>

              {/* Projects Mobile Dropdown */}
              <div className="border-t border-gray-200 pt-3">
                <button
                  onClick={() => setShowProjects((prev) => !prev)}
                  className="flex justify-between items-center w-full text-left text-sky-800"
                >
                  <span className="font-semibold">Projects</span>
                  {showProjects ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <div
                  className={`mt-2 pl-3 border-l-2 border-sky-200 transition-all duration-300 overflow-hidden ${
                    showProjects ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <Link
                    to="/projects/residential"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 hover:text-sky-800"
                  >
                    Residential
                  </Link>
                  <Link
                    to="/projects/commercial"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 hover:text-sky-800"
                  >
                    Commercial
                  </Link>
                </div>
              </div>

              {/* Benefits Mobile Dropdown */}
              <div className="border-t border-gray-200 pt-3">
                <button
                  onClick={() => setShowBenefits((prev) => !prev)}
                  className="flex justify-between items-center w-full text-left text-sky-800"
                >
                  <span className="font-semibold">Benefits</span>
                  {showBenefits ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <div
                  className={`mt-2 pl-3 border-l-2 border-sky-200 transition-all duration-300 overflow-hidden ${
                    showBenefits ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <Link
                    to="/benefits/consultation"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 hover:text-sky-800"
                  >
                    Free Consultation
                  </Link>
                  <Link
                    to="/benefits/homeloan"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 hover:text-sky-800"
                  >
                    Home Loan
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className={`text-sky-700 hover:text-sky-900 transition-colors border-t border-gray-200 pt-3 ${
                  isActive('/contact') ? 'underline underline-offset-4' : ''
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}

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
