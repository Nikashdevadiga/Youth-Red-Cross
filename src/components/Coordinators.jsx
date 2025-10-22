import { motion } from "framer-motion";
import coordinatorImg from "../assets/coordinator.png";
import viceImg from "../assets/Vice.jpg";

export default function Coordinators() {
  const coordinators = [
    {
      name: "Vishwanath Mane",
      role: "Coordinator",
      photo: coordinatorImg,
      email: "vishwanathmane@gmail.com",
      phone: "+91 9482596810",
    },
    {
      name: "Suraj",
      role: "Vice Coordinator",
      photo: viceImg,
      email: "suraj@gmail.com",
      phone: "+91 77604 21790",
    },
  ];

  return (
    <section
      id="coordinators"
      className="bg-[#fff8e7] text-center font-sans py-12 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-[#b8860b] mb-8">Our Coordinators</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {coordinators.map((coordinator, index) => (
          <motion.div
            key={coordinator.name}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-[#b8860b] rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 w-64"
          >
            <img
              src={coordinator.photo}
              alt={coordinator.name}
              className="w-28 h-28 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#b8860b]">
              {coordinator.name}
            </h3>
            <p className="text-gray-700">{coordinator.role}</p>
            <p className="text-gray-600 text-sm mt-2">📧 {coordinator.email}</p>
            <p className="text-gray-600 text-sm">📞 {coordinator.phone}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
