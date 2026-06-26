"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Only render the portal after the component mounts in the browser —
  // document.body doesn't exist during server rendering.
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const closeForm = () => setIsFormOpen(false);

  // ── The slide-in panel + backdrop, defined once, rendered via portal ──
  const overlay = (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-md z-[60] transition-all duration-500 ease-out ${
          isFormOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeForm}
      />

      <div
        className={`fixed top-0 right-0 h-full bg-[#0a0a09] z-[70] shadow-2xl transform transition-all duration-700 ease-in-out overflow-y-auto w-full sm:w-[85%] md:w-[65%] lg:w-[50%] xl:w-[40%] ${
          isFormOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="sticky top-0 bg-[#0a0a09] border-b border-white/10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 z-10">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[-1px] text-white">
                  Book a Call
                </h2>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  Let's talk about your project
                </p>
              </div>
              <button
                onClick={closeForm}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors group"
                aria-label="Close"
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
              {[
                {
                  label: "Full Name *",
                  id: "name",
                  type: "text",
                  placeholder: "John Doe",
                  delay: "100ms",
                },
                {
                  label: "Email Address *",
                  id: "email",
                  type: "email",
                  placeholder: "john@example.com",
                  delay: "200ms",
                },
                {
                  label: "Phone Number",
                  id: "phone",
                  type: "tel",
                  placeholder: "+63 9XX XXX XXXX",
                  delay: "300ms",
                },
              ].map(({ label, id, type, placeholder, delay }) => (
                <div
                  key={id}
                  className={`transform transition-all duration-500 ${
                    isFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: delay }}
                >
                  <label
                    htmlFor={id}
                    className="block text-xs sm:text-sm text-white mb-2"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white/30 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09] text-white placeholder-white/30"
                    placeholder={placeholder}
                  />
                </div>
              ))}

              <div
                className={`transform transition-all duration-500 ${
                  isFormOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm text-white mb-2"
                >
                  Tell me about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white/30 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09] text-white placeholder-white/30 resize-none"
                  placeholder="What are you building? What's the timeline?"
                />
              </div>

              <div
                className={`transform transition-all duration-500 ${
                  isFormOpen
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
                isFormOpen
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
                  href="tel:+639762583010"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  +63 9 762 583 010
                </a>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm text-white mb-2">BASED</h3>
                <p className="text-sm sm:text-base text-white/80">
                  Kabankalan City, 6111
                  <br />
                  Negros Occidental, PH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="p-8 bg-[#000000] text-[#f0ede4]">
        <div className="bg-[#f0ede4] text-[#0a0a09] p-8 w-full min-h-[30vh] sm:min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen 2xl:min-h-screen flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center text-center mt-10">
            <p className="text-sm mb-2">(Need an unfair advantage?)</p>
            <h1 className="text-5xl md:text-[8rem] lg:text-[8rem] font-bold leading-tight">
              LET'S MAKE <br /> IT HAPPEN
            </h1>
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-8 bg-[#0a0a09] text-[#f0ede4] font-semibold py-3 px-8 rounded-full text-lg transition-all hover:opacity-80 cursor-pointer"
            >
              BOOK A CALL ↗
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-xs">
            <div className="flex items-center space-x-2 border border-[#323333] rounded-md px-3 py-2">
              <span className="text-xl">🌍</span>
              <div className="flex flex-col leading-tight">
                <span>Available for Work</span>
              </div>
            </div>

            <div className="text-right mt-4 md:mt-0">
              <p className="uppercase font-semibold">For Further Inquiries</p>
              <a href="mailto:raireyesjr@gmail.com" className="hover:underline">
                ↳ raireyesjr@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*
        ── Why a portal ──
        Contact lives inside <section id="contact"> in page.tsx.
        If ANY ancestor between <body> and this component ever picks up
        a transform, filter, perspective, or contain property (now or in
        a future change — e.g. a Framer Motion wrapper, a theme transition,
        or a future redesign), this fixed overlay would get silently clipped
        or repositioned relative to that ancestor instead of the viewport —
        exactly the bug we were chasing.

        createPortal mounts this overlay as a direct child of <body>,
        completely independent of where <Contact /> sits in the tree.
        This guarantees the backdrop blur always covers the full viewport,
        permanently, regardless of any styling changes elsewhere on the page.
      */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
