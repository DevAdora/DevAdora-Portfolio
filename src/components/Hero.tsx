"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  return (
    <section className="relative w-full h-auto min-h-screen overflow-hidden flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
        {/* LEFT IMAGE */}
        <div className="w-full h-full flex justify-center items-center md:p-5 md:p-0">
          <Image
            src="/images/devadora-image.png"
            width={600}
            height={600}
            alt="DevAdora"
            className="w-[100%] md:w-[90%] h-[80%] md:h-[100%] max-w-[700px] md:max-w-[700px] lg:max-w-[650px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full h-full flex justify-center md:justify-start items-center">
          <div className="p-6 md:p-10 lg:p-16">
            {/* TITLE */}
            <h1
              className="font-bold text-[2.8rem] leading-tight 
                           md:text-[4rem] lg:text-[5rem]"
            >
              Software Developer
            </h1>

            {/* SUBTEXT */}
            <div className="py-5">
              <span className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem] text-[#686662] leading-relaxed">
                Rai Here! <br />
                The one who bridges imagination and innovation—crafting
                solutions that don’t just function, but resonate.
              </span>
            </div>

            {/* UNDERLINE ANIMATION */}
            <span
              onClick={openContactForm}
              className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] cursor-pointer font-medium
                         transition-all duration-300 ease-in-out
                         relative inline-block
                         after:content-[''] after:absolute after:left-0 after:bottom-0
                         after:h-[2px] after:w-full after:bg-black
                         after:transition-all after:duration-300
                         hover:after:w-0 hover:font-semibold"
            >
              Get in touch ↘
            </span>
          </div>
        </div>
      </div>

      <>
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-500 ease-out ${
            isContactFormOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeContactForm}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full bg-[#323333] z-[70] shadow-2xl transform transition-all duration-700 ease-in-out overflow-y-auto ${
            isMobile ? "w-full" : "w-full md:w-[40%]"
          } ${
            isContactFormOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="sticky top-0 bg-[#323333] border-b border-white px-6 md:px-10 py-6 z-10">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl tracking-[-1px] text-white">
                    Get in Touch
                  </h2>
                  <p className="text-sm text-black/60 mt-1  text-white">
                    Let's start a conversation
                  </p>
                </div>
                <button
                  onClick={closeContactForm}
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors group"
                  aria-label="Close contact form"
                >
                  <svg
                    className="w-6 h-6 text-white hover:w-8 hover:h-8 cursor-pointer transition-colors"
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

            <div className="flex-1 px-6 md:px-10 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="block text-sm text-white mb-2"
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
                    className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#323333] text-white"
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
                    className="block text-sm text-white mb-2"
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
                    className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#323333] text-white"
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
                    className="block text-sm text-white mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#323333] text-white"
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
                    className="block text-sm text-white mb-2"
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
                    className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#323333] text-white"
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
                    className="w-full bg-white text-[#080807] py-4 rounded-lg text-base transition-all duration-300 hover:shadow-lg"
                  >
                    Send Message →
                  </button>
                </div>
              </form>

              <div
                className={`mt-12 pt-8 border-t border-white/10 space-y-6 transform transition-all duration-500 ${
                  isContactFormOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div>
                  <h3 className="text-sm text-white mb-2">EMAIL</h3>
                  <a
                    href="mailto:hello@arctech.com"
                    className="text-base  text-white/80 hover:text-white transition-colors"
                  >
                    hello@arctech.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm text-white mb-2">PHONE</h3>
                  <a
                    href="tel:+15550000000"
                    className="text-base  text-white/80 hover:text-white transition-colors"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>

                <div>
                  <h3 className="text-sm text-white mb-2">OFFICE</h3>
                  <p className="text-base  text-white/80">
                    123 Architecture Street
                    <br />
                    Design District, NY 10001
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-white mb-3">FOLLOW US</h3>
                  <div className="flex gap-4">
                    {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-sm  text-white/80 hover:text-white transition-colors"
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
