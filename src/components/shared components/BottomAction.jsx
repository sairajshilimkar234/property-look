import { Phone, MessageSquareText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function BottomActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-sky-800 border-t border-gray-400 text-white py-2 shadow-md">
      
      {/* Phone */}
      <a
        href="tel:9657308229"
        className="flex flex-col items-center hover:text-sky-800"
      >
        <Phone className="w-6 h-6" />
        <span className="text-sm">Phone</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/9657308229" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:text-sky-800"
      >
        <MessageSquareText className="w-6 h-6" />
        <span className="text-sm">WhatsApp</span>
      </a>

      {/* Enquire */}
      <Link
        to="/contact" // or trigger your modal
        className="flex flex-col items-center hover:text-sky-800"
      >
        <HelpCircle className="w-6 h-6" />
        <span className="text-sm">Enquire</span>
      </Link>

    </div>
  );
}

export default BottomActions;
