"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsContactFormOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .h-fadein { animation: fadeIn  0.9s ease both; }
        .h-fadeup { animation: fadeUp  0.75s ease both; }
        .h-d1 { animation-delay: 0.10s; }
        .h-d2 { animation-delay: 0.25s; }
        .h-d3 { animation-delay: 0.38s; }
        .h-d4 { animation-delay: 0.52s; }
        .h-d5 { animation-delay: 0.66s; }
        .h-d6 { animation-delay: 0.80s; }
      `}</style>

      {/* ── Hero shell ── */}
      <section
        id="hero-section"
        className="relative w-full min-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2"
        style={{
          backgroundColor: "var(--bg-base)",
          color: "var(--fg-primary)",
        }}
      >
        {/* ════════ LEFT — photo ════════ */}
        <div className="relative min-h-[55vw] md:min-h-full h-full overflow-hidden h-fadein h-d1">
          <Image
            src="/images/NKN_0852.JPG"
            alt="Rai M. Reyes Jr. — DevAdora"
            fill
            priority
            className="object-cover object-center"
            style={{
              filter: "grayscale(85%) brightness(0.80) contrast(1.12)",
            }}
          />
        </div>

        <div className="flex flex-col justify-between px-8 md:px-12 lg:px-16 py-10 md:py-14">
          <div className="flex flex-col gap-6 my-auto py-12">
            <p className="h-fadeup h-d2 text-[11px] tracking-[0.3em] uppercase opacity-40">
              Software Developer · Philippines
            </p>

            <h1
              className="h-fadeup h-d3 font-black leading-[0.90] tracking-tighter"
              style={{ fontSize: "clamp(3rem, 6.5vw, 6.5rem)" }}
            >
              Rai M.
              <br />
              Reyes Jr.
            </h1>

            <p className="h-fadeup h-d4 text-[0.9rem] leading-relaxed opacity-55 max-w-sm">
              Turning complex challenges into elegant, scalable solutions —
              built to perform, designed to endure.
            </p>

            {/* CTAs */}
            <div className="h-fadeup h-d5 flex flex-wrap gap-3 mt-1">
              <Link
                href="/pages/projects"
                className="px-6 py-3 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 border"
                style={{
                  backgroundColor: "var(--fg-primary)",
                  color: "var(--bg-base)",
                  borderColor: "var(--fg-primary)",
                }}
              >
                View Works →
              </Link>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="px-6 py-3 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-200 border opacity-55 hover:opacity-100"
                style={{
                  borderColor: "var(--border-subtle)",
                  color: "var(--fg-primary)",
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Bottom meta */}
          <div className="h-fadeup h-d6 flex flex-col gap-1 opacity-30">
            <span className="text-[10px] tracking-[0.25em] uppercase">
              Design &amp; Innovation
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase">
              Kabankalan City, PH
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTACT FORM SLIDE-IN
      ════════════════════════════════════════ */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[70] flex flex-col shadow-2xl transition-transform duration-500 ease-in-out ${
          isContactFormOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#0a0a09" }}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <h2 className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
            Get In Touch
          </h2>
          <button
            onClick={() => setIsContactFormOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">
          {[
            {
              label: "Full Name *",
              id: "name",
              type: "text",
              placeholder: "John Doe",
            },
            {
              label: "Email Address *",
              id: "email",
              type: "email",
              placeholder: "john@example.com",
            },
            {
              label: "Phone Number",
              id: "phone",
              type: "tel",
              placeholder: "+63 9XX XXX XXXX",
            },
          ].map(({ label, id, type, placeholder }, i) => (
            <div
              key={id}
              className={`transition-all duration-500 ${isContactFormOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <label
                htmlFor={id}
                className="block text-xs text-white/60 mb-2 tracking-widest uppercase"
              >
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id as keyof typeof formData]}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>
          ))}

          <div
            className={`transition-all duration-500 ${isContactFormOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <label
              htmlFor="message"
              className="block text-xs text-white/60 mb-2 tracking-widest uppercase"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors resize-none"
            />
          </div>

          <div
            className={`transition-all duration-500 ${isContactFormOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black py-4 rounded-lg text-sm font-semibold tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              Send Message →
            </button>
          </div>

          <div
            className={`pt-8 border-t border-white/10 space-y-5 transition-all duration-500 ${isContactFormOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "600ms" }}
          >
            {[
              {
                label: "EMAIL",
                value: "raireyesjr@gmail.com",
                href: "mailto:raireyesjr@gmail.com",
              },
              {
                label: "PHONE",
                value: "+63 9 762 583 010",
                href: "tel:+639762583010",
              },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p className="text-[10px] text-white/40 tracking-widest mb-1">
                  {label}
                </p>
                <a
                  href={href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {value}
                </a>
              </div>
            ))}
            <div>
              <p className="text-[10px] text-white/40 tracking-widest mb-1">
                BASED
              </p>
              <p className="text-sm text-white/80">
                Kabankalan City, 6111
                <br />
                Negros Occidental, PH
              </p>
            </div>
            <div>
              <p className="text-[10px] text-white/40 tracking-widest mb-3">
                SOCIALS
              </p>
              <div className="flex gap-5">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/soullessr4i/",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/rai-reyes-jr-6bb906272/",
                  },
                  { label: "GitHub", href: "https://github.com/DevAdora" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/60 hover:text-white transition-colors tracking-wide"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isContactFormOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsContactFormOpen(false)}
        />
      )}
    </>
  );
}
