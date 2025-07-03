import { Mail, Phone, MapPin, BadgeCheck} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-sky-800 py-5 mt-0 mb-15">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Property Look</h2>
          <p>Your trusted estate partner helping you find the perfect property in your dream location. Buy, Sell, or Rent – we’re here to help.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-sky-900 transition-colors">Home</a></li>
            <li><a href="/projects/residential" className="hover:text-sky-900 transition-colors">Properties</a></li>
            <li><a href="/contact" className="hover:text-sky-900 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-3">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +91 9657308229</li>
            <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> propertyloook.pl@gmail.com</li>
            <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Pune, Maharashtra</li>
            <li className="flex items-center"><BadgeCheck className="w-4 h-4 mr-2"/> MAHARERA No. A52100039213</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Property Look. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
