import { useState } from "react";
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img7 from "../assets/gallery/img7.jpg";
import img8 from "../assets/gallery/img8.jpg";

export default function Gallery() {
  const images = [
    {
      src: img1,
      title: "Blood Donation Camp",
      description: (
        <>
          Certificate of Appreciation awarded by the Indian Red Cross Society
          for organizing a successful Blood Donation Camp on{" "}
          <strong>07/08/2025</strong> with <strong>70 donors</strong> at
          Karnataka (Govt.) Polytechnic, Mangaluru.
        </>
      ),
      place: "KPT Auditorium, Mangaluru",
    },
    {
      src: img2,
      title: "Blood Donation Camp",
      description: (
        <>
          Certificate of Appreciation awarded for the Blood Donation Camp held
          on <strong>02/08/2025</strong> at Karnataka (Govt.) Polytechnic,
          Mangaluru with <strong>50 donors</strong> participating.
        </>
      ),
      place: "KPT Auditorium, Mangaluru",
    },
    {
      src: img3,
      title: "Blood Donation Camp in Action",
      description: (
        <>
          Glimpse of the blood donation camp held at Karnataka Polytechnic
          Mangaluru, where students and volunteers actively participated in{" "}
          <strong>saving lives</strong>.
        </>
      ),
      place: "KPT Auditorium, Mangaluru",
    },
    {
      src: img4,
      title: "Certificate of Appreciation",
      description: (
        <>
          Recognition from the Indian Red Cross Society for organizing a blood
          donation drive at Karnataka Polytechnic Mangaluru, acknowledging the
          contributions of <strong>70 donors</strong>.
        </>
      ),
      place: "KPT Auditorium, Mangaluru",
    },
    {
      src: img5,
      title: "Blood Checkup Camp",
      description: "Free health checkup camp for the community.",
      place: "Main Campus",
    },
    {
      src: img6,
      title: "Youth Awareness Rally",
      description: "Students spreading awareness through rally.",
      place: "Mangalore City",
    },
    {
      src: img7,
      title: "Medical Camp",
      description: "Free medical services to local villagers.",
      place: "Rural Village",
    },
    {
      src: img8,
      title: "Cultural Program",
      description: "Students showcasing cultural activities.",
      place: "College Auditorium",
    },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section
      id="gallery"
      className="bg-white text-center font-sans py-12 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-[#b8860b] mb-6">Gallery</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-full h-48 overflow-hidden rounded-xl border border-[#b8860b] shadow-md cursor-pointer"
            onClick={() => setSelectedImg(img)} // open popup
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-lg max-w-3xl w-full mx-4 p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full font-bold shadow-lg"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="rounded-lg w-full max-h-[60vh] object-contain mb-4"
            />

            {/* Details */}
            <h3 className="text-xl font-bold text-[#b8860b] mb-2">
              {selectedImg.title}
            </h3>
            <div className="text-gray-700 mb-1">{selectedImg.description}</div>
            <p className="text-gray-500 text-sm">📍 {selectedImg.place}</p>
          </div>
        </div>
      )}
    </section>
  );
}
