import React from "react";
import { motion } from "framer-motion";
import KarlImage from "../assets/Karl.jpg"; // Make sure this path is correct

export default function About() {
  // Zoom-in animation variant
  const zoomVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="bg-white text-center font-sans py-12 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-[#b8860b] mb-4">About Us</h2>

      {/* Karl Landsteiner and Jean Henri Dunant Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Karl Landsteiner Card */}
        <motion.div
          className="bg-[#fff8e7] border border-[#b8860b] shadow-md rounded-xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
          variants={zoomVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-[#b8860b] mb-4">
            👨‍🔬 Karl Landsteiner – The Father of Blood Groups
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={KarlImage}
              alt="Karl Landsteiner"
              className="w-48 h-auto rounded shadow-md"
            />
            <p className="text-gray-700">
              Karl Landsteiner (1868–1943) was an Austrian immunologist and
              pathologist who discovered the ABO blood group system in 1901.
              This groundbreaking work laid the foundation for safe blood
              transfusions and revolutionized medicine. He was awarded the Nobel
              Prize in Physiology or Medicine in 1930. His contributions are
              vital to the mission of the Red Cross, especially in blood
              donation and transfusion services.
            </p>
          </div>
        </motion.div>

        {/* Jean Henri Dunant Card */}
        <motion.div
          className="bg-[#fff8e7] border border-[#b8860b] shadow-md rounded-xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
          variants={zoomVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-[#b8860b] mb-4">
            🕊️ Jean Henri Dunant – Founder of the Red Cross
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={require("../assets/Jean.jpg")}
              alt="Jean Henri Dunant"
              className="w-48 h-auto rounded shadow-md"
            />
            <p className="text-gray-700">
              Jean Henri Dunant (1828–1910) was a Swiss humanitarian and the
              founder of the International Committee of the Red Cross (ICRC).
              His experiences at the Battle of Solferino led him to advocate for
              neutral and voluntary aid to wounded soldiers. In 1901, he was
              awarded the first-ever Nobel Peace Prize. His legacy lives on
              through the global humanitarian work of the Red Cross and Red
              Crescent Movement.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Vision and Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">
        {/* Vision Card */}
        <motion.div
          className="bg-[#fff8e7] border border-[#b8860b] shadow-md rounded-xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
          variants={zoomVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-[#b8860b] mb-2">🌟 Vision</h3>
          <p className="text-gray-700">
            To inspire youth to embrace service and humanitarian values,
            fostering responsibility, compassion, and active participation in
            initiatives like health awareness, community service, and blood
            donation.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="bg-[#fff8e7] border border-[#b8860b] shadow-md rounded-xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
          variants={zoomVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-[#b8860b] mb-2">🎯 Mission</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>Organize blood donation drives.</li>
            <li>Conduct health awareness camps and workshops.</li>
            <li>Engage in community service programs for the betterment of society.</li>
            <li>Promote leadership, teamwork, and youth participation in humanitarian activities.</li>
          </ul>
        </motion.div>
      </div>

      {/* Detailed KPT YRC Info */}
      <motion.div
        className="bg-[#fff8e7] border border-[#b8860b] shadow-md rounded-xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
        variants={zoomVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
          About the KPT Youth Red Cross Wing
        </h3>
        <p className="text-gray-700 mb-2">
          The Karnataka Government Polytechnic (KPT) in Mangalore has a Youth
          Red Cross (YRC) Wing that was established in 2015 to instill social
          responsibility and participation in the Indian Red Cross Society's
          activities among students. This includes training in health
          awareness, first aid, and disaster management, alongside promoting
          community service and humanitarian values.
        </p>

        <h4 className="font-semibold text-[#b8860b] mt-4">Purpose:</h4>
        <p className="text-gray-700 mb-2">
          To train students in humanitarian services, develop leadership
          qualities, and promote social responsibility.
        </p>

        <h4 className="font-semibold text-[#b8860b] mt-4">Activities:</h4>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>Health and hygiene awareness campaigns.</li>
          <li>First aid training for students.</li>
          <li>Disaster management preparedness.</li>
          <li>Promoting communal harmony and national integration.</li>
          <li>Participating in relief work during emergencies.</li>
          <li>Organizing blood donation camps and community services.</li>
        </ul>

        <h4 className="font-semibold text-[#b8860b] mt-4">Establishment:</h4>
        <p className="text-gray-700 mb-2">
          The wing, established in the academic year 2015, remains a significant
          component of the polytechnic’s social outreach initiatives.
        </p>

        <h4 className="font-semibold text-[#b8860b] mt-4">Structure:</h4>
        <p className="text-gray-700 mb-2">
          A qualified lecturer serves as the program officer, guiding the
          students in their Red Cross activities.
        </p>

        <h4 className="font-semibold text-[#b8860b] mt-4">Contact:</h4>
        <p className="text-gray-700">
          To learn more or get involved, you can visit the KPT Mangalore
          official website or contact the Indian Red Cross Society, Karnataka
          State Branch.
        </p>
      </motion.div>
    </section>
  );
}
