import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // ✅ For mobile menu
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

  // ✅ Smooth Scroll with navbar height
  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("nav");

    if (section && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false); // close menu after clicking (mobile)
    }
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-600 to-red-700 text-white shadow-md fixed top-0 left-0 right-0 z-50">
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

        {/* Desktop Nav links */}
        <ul className="hidden md:flex gap-6 uppercase font-medium text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item);
                }}
                className={`cursor-pointer transition ${
                  active === item
                    ? "underline underline-offset-4 font-semibold text-yellow-200"
                    : "hover:text-yellow-200"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-yellow-600 to-red-700 px-4 pb-4">
          <ul className="flex flex-col gap-4 uppercase font-medium text-sm">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(item);
                  }}
                  className={`block cursor-pointer transition ${
                    active === item
                      ? "underline underline-offset-4 font-semibold text-yellow-200"
                      : "hover:text-yellow-200"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
