import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const navItems = ["home", "about", "gallery", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 150;

      for (let section of sections) {
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Updated smooth scroll with dynamic navbar height
  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("nav");

    if (section && navbar) {
      const navbarHeight = navbar.offsetHeight; // get actual navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gold to-brown text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll("home");
          }}
          className="flex items-center gap-2 font-bold text-lg cursor-pointer"
        >
          <img
            src={logo}
            alt="Youth Red Cross Logo"
            className="w-8 h-8 rounded-full"
          />
          Youth Red Cross
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex gap-4 uppercase font-medium text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item);
                }}
                className={`cursor-pointer hover:text-yellow-200 transition ${
                  active === item
                    ? "underline underline-offset-4 font-semibold"
                    : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

