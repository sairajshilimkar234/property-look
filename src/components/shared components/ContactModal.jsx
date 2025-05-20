import { useEffect, useRef, useState } from "react";
import { User, MapPin, Phone } from "lucide-react"; // Import icons

function ContactModal() {
  const [show, setShow] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setShow(false);
    } else {
      alert("Form submission failed.");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-lg px-4">
      <div
        ref={modalRef}
        className="relative bg-white w-full max-w-sm sm:max-w-md p-4 rounded-xl shadow-xl border-2 border-sky-50"
      >
        {/* Cancel button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-lg"
        >
          X
        </button>

        {/* Image */}
        <img
          src="../refresh.png"
          alt="Contact"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        {/* Company Name */}
        <h2 className="text-2xl font-bold text-sky-800 text-center mb-4 font-serif">
          PROPERTY LOOK
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="e0972470-5cfc-4e9a-90fe-9559976760e2"
          />

          {/* Name Field */}
          <div className="mb-3 flex items-center border rounded px-2">
            <User className="w-5 h-5 text-sky-800" />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-2 outline-none"
            />
          </div>

          {/* Location Field */}
          <div className="mb-3 flex items-center border rounded px-2">
            <MapPin className="w-5 h-5 text-sky-800" />
            <select
              name="location"
              required
              className="w-full p-2 outline-none text-gray-600 bg-transparent"
            >
              <option value="">Select Location</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">PCMC</option>
              <option value="Nashik">East Pune</option>
            </select>
          </div>

          {/* Phone Field */}
          <div className="mb-4 flex items-center border rounded px-2">
            <Phone className="w-5 h-5 text-sky-800" />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full p-2 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-sky-800 text-white px-6 py-2 rounded-xl hover:bg-sky-700 transition font-serif"
            >
              Get Call Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;