import { useEffect, useState } from "react";
import bgImage from "../assets/home-bg.png";
import { ReactTyped as Typed } from "react-typed";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup was already shown before
    const popupShown = localStorage.getItem("welcomePopupShown");
    if (!popupShown) {
      setShowPopup(true);
      localStorage.setItem("welcomePopupShown", "true"); // Mark as shown
    }
  }, []);

  // Close popup function
  const handleClose = () => setShowPopup(false);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center pt-24 bg-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Youth Red Cross
        </h1>

        {/* Typing effect */}
        <Typed
          strings={[
            "Serving humanity with compassion",
            "Promoting responsibility and unity",
            "Empowering youth through service",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-lg md:text-xl mb-8 block drop-shadow"
        />

        {/* Learn More button */}
        <a
          href="https://gpt.karnataka.gov.in/kptmangalore/public/28/youth-red-cross/en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Learn More
        </a>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center relative">
            <h2 className="text-2xl font-bold text-[#b8860b] mb-4">
              🎉 Welcome!
            </h2>
            <p className="text-gray-700 mb-6">
              We are glad to have you at <b>Youth Red Cross</b>.  
              Explore our mission and activities to know more.
            </p>
            <button
              onClick={handleClose}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
