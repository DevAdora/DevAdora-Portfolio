"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Services, ", path: "/" },
  { name: "About, ", path: "/About" },
  { name: "Works, ", path: "/Projects" },
  { name: "Testimonials, ", path: "/" },
  { name: "Contact", path: "/" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.3);
    };

    checkMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${
          isScrolled ? "fixed top-0 left-0 w-full z-50" : "relative"
        }`}
      >
        <nav>
          <div className="header hidden md:flex justify-center items-center p-7">
            {!isScrolled ? (
              <ul className="flex gap-[10px]">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.path}
                      className="text-light-dark text-[1.2rem] font-medium hover:text-gray-950 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="header flex md:hidden justify-between items-start px-4 py-4"></div>
        </nav>

        {!isScrolled && (
          <div className="header-line w-full bg-light-dark"></div>
        )}
      </header>
      {/* Top-right container */}
      <div className="fixed top-4 right-10 flex items-center space-x-4 z-50">
        {/* Show BOOK A CALL + burger only when scrolled or mobile */}
        <div
          className={`flex items-center space-x-4 transition-all duration-300 ${
            isScrolled || isMobile
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {/* BOOK A CALL beside burger */}
          <Link
            href="#contact"
            className="bg-[#323333] text-white px-8 py-4 rounded-full text-sm sm:text-base md:text-base font-medium tracking-wide hover:opacity-90 transition"
          >
            BOOK A CALL
          </Link>

          {/* Burger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`w-16 h-16 rounded-full flex flex-col justify-center items-center space-y-1 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer ${
              isMobileMenuOpen ? "space-y-0" : "space-y-1"
            }`}
            style={{ backgroundColor: "#323333" }}
            aria-label="Toggle menu"
          >
            <span
              className={`w-8 h-0.5 transition-all duration-500 ease-in-out ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-0.5"
                  : "rotate-0 translate-y-0"
              }`}
              style={{ backgroundColor: "#f0ede4" }}
            ></span>
            <span
              className={`w-8 h-0.5 transition-all duration-500 ease-in-out ${
                isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
              style={{ backgroundColor: "#f0ede4" }}
            ></span>
            <span
              className={`w-8 h-0.5 transition-all duration-500 ease-in-out ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-0.5"
                  : "rotate-0 translate-y-0"
              }`}
              style={{ backgroundColor: "#f0ede4" }}
            ></span>
          </button>
        </div>
      </div>

      {/* Side Menu Panel */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMobileMenu}
        ></div>

        {/* Side Menu Panel - 30% width */}
        <div
          className={`fixed top-0 right-0 w-[100%] md:w-[50%] min-w-[280px] h-full z-50 transform transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          style={{ backgroundColor: "#323333" }}
        >
          <div className="flex flex-col p-8 space-y-8 h-full">
            {/* Close button */}
            <div className="flex justify-end items-center">
              <button
                onClick={closeMobileMenu}
                className="w-20 h-20 flex items-center justify-center relative rounded-full transition-all duration-300 hover:bg-white/10"
                aria-label="Close menu"
              >
                <span
                  className="w-10 h-0.5 rotate-45 absolute transition-all duration-300"
                  style={{ backgroundColor: "#f0ede4" }}
                ></span>
                <span
                  className="w-10 h-0.5 -rotate-45 absolute transition-all duration-300"
                  style={{ backgroundColor: "#f0ede4" }}
                ></span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 flex-1">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`text-[3rem] md:text[3.5rem] hover:opacity-80 transition-all duration-500 ease-out pb-3 transform relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    color: "#f0ede4",
                    borderColor: "#f0ede4",
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Footer text in menu */}
            <div
              className={`mt-auto transform transition-all duration-500 ease-out ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-70"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-sm" style={{ color: "#f0ede4" }}>
                DevAdora © 2024
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
