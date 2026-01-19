"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const heroHeight = heroSection.offsetHeight;
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / heroHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactFormOpen(true);
    closeMobileMenu();
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    closeContactForm();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const leftTransform = scrollProgress * -100;
  const rightTransform = scrollProgress * 100;
  const opacity = 1 - scrollProgress;

  const cards = [
    { id: 0, image: "/images/me-1.jpg", row: 0, col: 0 },
    { id: 1, image: "/images/me-2.jpg", row: 0, col: 1 },
    { id: 2, image: "/images/devadora-image.png", row: 1, col: 0 },
    { id: 3, image: "/images/me-3.png", row: 1, col: 1 },
  ];

  return (
    <section
      id="hero-section"
      className="relative w-full h-auto min-h-screen overflow-hidden flex items-center justify-center py-12 md:py-20 bg-[#0a0a09]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-16 items-center">
          <div
            className="relative w-full flex items-center justify-center"
            style={{
              transform: `translateX(${leftTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <div className="relative w-full max-w-[520px] mx-auto">
              <div className="relative h-[360px] sm:h-[420px] md:h-[460px] flex items-center justify-center">
                <div className="relative w-full h-full max-w-[360px] sm:max-w-none mx-auto">
                  {cards.map((card, index) => {
                    const isHovered = hoveredCard === card.id;

                    const positions = [
                      "top-0 left-1/3 -translate-x-[110px] sm:translate-x-0 sm:left-10 -rotate-6",
                      "top-5 left-1/3 -translate-x-[10px] sm:translate-x-0 sm:left-30 sm:left-42 rotate-4",
                      "top-40 left-1/3 -translate-x-[90px] sm:translate-x-0 sm:left-6 sm:left-20 rotate-6",
                      "top-52 left-1/3 -translate-x-[30px] sm:translate-x-0 sm:left-24 sm:left-50 -rotate-6",
                    ];

                    const baseZ = [10, 20, 15, 25][index];
                    const zIndex = isHovered ? 50 : baseZ;

                    return (
                      <div
                        key={card.id}
                        className={`absolute ${positions[index]} `}
                        style={{ zIndex }}
                      >
                        <div
                          className="p-2 sm:p-3 items-center"
                          onMouseEnter={() => setHoveredCard(card.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div
                            className="group relative cursor-pointer overflow-hidden rounded-xl
                           w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px]
                           shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                           transition-transform duration-300"
                            style={{
                              transform: isHovered
                                ? "scale(1.06) translateY(-6px)"
                                : "scale(1)",
                            }}
                          >
                            <div
                              className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-300"
                              style={{
                                boxShadow: isHovered
                                  ? "0 0 0 1px rgba(240,237,228,0.55), 0 18px 45px rgba(0,0,0,0.55)"
                                  : "0 0 0 1px rgba(240,237,228,0.10)",
                              }}
                            />

                            <div
                              className="absolute inset-0 bg-gradient-to-br from-[#f0ede4]/25 via-transparent to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
                            />

                            <Image
                              src={card.image}
                              fill
                              alt={`Card ${index + 1}`}
                              className="object-cover transition-all duration-300"
                              style={{
                                filter: isHovered
                                  ? "grayscale(0%) brightness(1.08) contrast(1.05)"
                                  : "grayscale(35%) brightness(0.92)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-br from-[#f0ede4]/10 via-transparent to-transparent" />
            </div>
          </div>

          <div
            className="w-full flex flex-col justify-center md:space-y-8 karla-script"
            style={{
              transform: `translateX(${rightTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <div className="md:space-y-6">
              <h2 className="font-bold text-[2.5rem] leading-tight sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] text-[#f0ede4] tracking-tight ">
                DevAdora
              </h2>

              <h1 className="font-bold text-[1.8rem] leading-tight sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#f0ede4]/80 tracking-tight">
                Software Developer
              </h1>

              <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] leading-relaxed text-[#f0ede4]/70 max-w-[600px]">
                The one who bridges imagination and innovation—crafting
                solutions that don't just function, but resonate.
              </p>
            </div>

            <div className="flex items-center">
              <span
                onClick={openContactForm}
                className="group relative text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] cursor-pointer font-medium
                           text-[#f0ede4] transition-all duration-300 ease-in-out
                           hover:tracking-wide"
              >
                <span className="relative inline-block">
                  Get in touch
                  <span
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-[#f0ede4] 
                                 transform origin-left transition-transform duration-300 
                                 group-hover:scale-x-0"
                  ></span>
                </span>
                <span
                  className="inline-block ml-2 transform transition-transform duration-300 
                               group-hover:translate-x-2 group-hover:translate-y-[-2px]"
                >
                  ↘
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <>
        <div
          className={`fixed inset-0 bg-[#0a0a09] backdrop-blur-sm z-[60] transition-all duration-500 ease-out ${
            isContactFormOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeContactForm}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full bg-[#0a0a09]  z-[70] shadow-2xl transform transition-all duration-700 ease-in-out overflow-y-auto w-full sm:w-[85%] md:w-[65%] lg:w-[50%] xl:w-[40%] ${
            isContactFormOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="sticky top-0 bg-[#0a0a09] border-b border-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 z-10">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[-1px] text-white">
                    Get in Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-white mt-1">
                    Let's start a conversation
                  </p>
                </div>
                <button
                  onClick={closeContactForm}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors group"
                  aria-label="Close contact form"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
              <div className="space-y-4 sm:space-y-6">
                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm text-white mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09]  text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm text-white mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09]  text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm text-white mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09]  text-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm text-white mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09]  text-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-white text-[#080807] py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
                  >
                    Send Message →
                  </button>
                </div>
              </div>

              <div
                className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 space-y-4 sm:space-y-6 transform transition-all duration-500 ${
                  isContactFormOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-2">EMAIL</h3>
                  <a
                    href="mailto:raireyesjr@gmail.com"
                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors break-all"
                  >
                    raireyesjr@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-2">PHONE</h3>
                  <a
                    href="tel:+63 9 762 583 010"
                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                  >
                    +63 9 762 583 010
                  </a>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-2">BASED</h3>
                  <p className="text-sm sm:text-base text-white/80">
                    Negros Occidental
                    <br />
                    Kabankalan City, 6111
                  </p>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-2">
                    SOCIALS
                  </h3>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
