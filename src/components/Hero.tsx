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

  // Calculate transform values based on scroll progress
  const leftTransform = scrollProgress * -100; // Left column moves left
  const rightTransform = scrollProgress * 100; // Right column moves right
  const opacity = 1 - scrollProgress;

  return (
    <section
      id="hero-section"
      className="relative w-full h-auto overflow-hidden flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-10"
    >
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* ROW 1: Image 1 - Software Developer */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
          {/* Image 1 */}
          <div
            className="w-full flex justify-center md:justify-end"
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
              className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Software Developer Title */}
          <div
            className="w-full flex items-center"
            style={{
              transform: `translateX(${rightTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <h1 className="font-bold text-[1.5rem] leading-tight sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[5.5rem] tracking-[-1px] md:tracking-[-2px]">
              Software Developer
            </h1>
          </div>
        </div>

        {/* ROW 2: Name - Image 2 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
          {/* Name */}
          <div
            className="w-full flex flex-col justify-center text-right"
            style={{
              transform: `translateX(${leftTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <h2 className="font-bold text-[1.5rem] leading-tight sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] mb-2 sm:mb-3">
              Rai here!
            </h2>
            <p className="text-[0.75rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] text-[#686662] leading-relaxed">
              The one who bridges imagination and innovation—crafting solutions
              that don't just function, but resonate.
            </p>
          </div>

          {/* Image 2 */}
          <div
            className="w-full flex justify-center md:justify-start"
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
              className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* ROW 3: Image 3 - Contact button */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Image 3 */}
          <div
            className="w-full flex justify-center md:justify-end"
            style={{
              transform: `translateX(${leftTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <Image
              src="/images/hero-bg-3.jpg"
              width={700}
              height={400}
              alt="DevAdora"
              className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Contact Button */}
          <div
            className="w-full flex items-center"
            style={{
              transform: `translateX(${rightTransform}%)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <span
              onClick={openContactForm}
              className="text-[0.9rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem] cursor-pointer font-medium
                         transition-all duration-300 ease-in-out
                         relative inline-block
                         after:content-[''] after:absolute after:left-0 after:bottom-0
                         after:h-[1px] md:after:h-[2px] after:w-full after:bg-black
                         after:transition-all after:duration-300
                         hover:after:w-0 hover:font-semibold"
            >
              Get in touch ↘
            </span>
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
          className={`fixed top-0 right-0 h-full bg-[#323333] z-[70] shadow-2xl transform transition-all duration-700 ease-in-out overflow-y-auto w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] ${
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
