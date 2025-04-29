import { useEffect, useRef, useState } from "react";

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
        className="relative bg-white w-full max-w-sm sm:max-w-md p-4 rounded-xl shadow-xl"
      >
        {/* Cancel button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-lg"
        >
          x
        </button>

        {/* Image */}
        <img
          src="https://www.commercialproperty.review/wp-content/uploads/2020/10/Forest-County-Kharadi-Pune.jpg"
          alt="Contact"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        {/* Company Name */}
        <h2 className="text-2xl font-bold text-sky-600 text-center mb-4">
          Property Look
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="your-web3forms-access-key"
          />
          <div className="mb-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-2 border rounded focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <select
              name="location"
              required
              className="w-full p-2 border rounded text-gray-600"
            >
              <option value="">Select Location</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full p-2 border rounded focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-sky-600 text-white w-full py-2 rounded hover:bg-sky-700 transition"
          >
            Get Call Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
