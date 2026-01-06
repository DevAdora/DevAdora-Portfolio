"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    closeContactForm();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const leftTransform = scrollProgress * -100;
  const rightTransform = scrollProgress * 100;
  const opacity = 1 - scrollProgress;

  return (
    <section
      id="hero-section"
      className="relative w-full h-auto min-h-screen overflow-hidden flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 bg-[#0a0a09]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* ROW 1: Image 1 - Software Developer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Image 1 */}
          <div
            className="w-full flex justify-center md:justify-end order-1"
            style={{
              transform: `translateX(${leftTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <Image
              src="/images/hero-bg-1.jpg"
              width={700}
              height={400}
              alt="DevAdora"
              className="w-full h-auto object-contain grayscale-50 hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Software Developer Title */}
          <div
            className="w-full flex items-center order-2 px-4 md:px-0"
            style={{
              transform: `translateX(${rightTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <h1 className="font-bold text-[2rem] leading-tight sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[5.5rem] tracking-[-1px] md:tracking-[-2px] text-[#f0ede4]">
              Software Developer
            </h1>
          </div>
        </div>

        {/* ROW 2: Image 2 - DevAdora Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Image 2 - Order 1 on mobile, Order 2 on desktop */}
          <div
            className="w-full flex justify-center md:justify-start order-1 md:order-2"
            style={{
              transform: `translateX(${rightTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <Image
              src="/images/hero-bg-2.jpg"
              width={700}
              height={400}
              alt="DevAdora"
              className="w-full h-auto object-contain grayscale-50 hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* DevAdora Content with Contact Button - Order 2 on mobile, Order 1 on desktop */}
          <div
            className="w-full flex flex-col justify-center text-left md:text-right order-2 md:order-1 px-4 md:px-0"
            style={{
              transform: `translateX(${leftTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <h2 className="font-bold text-[2rem] leading-tight sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] mb-3 sm:mb-4 text-[#f0ede4]">
              DevAdora
            </h2>
            <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] leading-relaxed text-[#f0ede4] mb-6">
              The one who bridges imagination and innovation—crafting solutions
              that don't just function, but resonate.
            </p>

            {/* Contact Button */}
            <div className="w-full flex items-center justify-start md:justify-end">
              <span
                onClick={openContactForm}
                className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem] cursor-pointer font-medium
                           transition-all duration-300 ease-in-out
                           relative inline-block
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[1px] md:after:h-[2px] after:w-full after:bg-[#f0ede4]
                           after:transition-all after:duration-300
                           hover:after:w-0 hover:font-semibold
                           text-[#f0ede4]"
              >
                Get in touch ↘
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <>
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-500 ease-out ${
            isContactFormOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeContactForm}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full bg-[#323333] z-[70] shadow-2xl transform transition-all duration-700 ease-in-out overflow-y-auto w-full sm:w-[85%] md:w-[65%] lg:w-[50%] xl:w-[40%] ${
            isContactFormOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="sticky top-0 bg-[#323333] border-b border-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 z-10">
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
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#323333] text-white"
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
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#323333] text-white"
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
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#323333] text-white"
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
                    required
                    rows={6}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#323333] text-white resize-none"
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
                    type="submit"
                    className="w-full bg-white text-[#080807] py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
                  >
                    Send Message →
                  </button>
                </div>
              </form>

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
                    href="mailto:hello@arctech.com"
                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors break-all"
                  >
                    hello@arctech.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-2">PHONE</h3>
                  <a
                    href="tel:+15550000000"
                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-2">OFFICE</h3>
                  <p className="text-sm sm:text-base text-white/80">
                    123 Architecture Street
                    <br />
                    Design District, NY 10001
                  </p>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-3">
                    FOLLOW US
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
