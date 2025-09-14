import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we just show thank-you instead of sending anywhere
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Karnataka Govt. Polytechnic Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6411.18800963553!2d74.8524094!3d12.8915435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a145a8d7537%3A0x40972a862265bcb8!2sKarnataka%20(Govt.)%20Polytechnic!5e1!3m2!1sen!2sin!4v1757060223315!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              Get in Touch
            </h3>

            {submitted ? (
              <p className="text-green-700 font-semibold text-center">
                ✅ Thank you, {formData.name || "Friend"}!  
                We received your message and will get back to you soon.
              </p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-yellow-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-700">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
