"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const openContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactFormOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeContactForm = () => setIsContactFormOpen(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    closeContactForm();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const COPIES = 10;

  return (
    <>
      <style>{`
        /* ─── Marquee ─── */
        .marquee-outer {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-infinite 60s linear infinite;
          will-change: transform;
        }

        /* Shift exactly 50% → last frame === first frame → seamless */
        @keyframes marquee-infinite {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation-play-state: paused; }
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          /*
            Fluid font size:
              - Mobile  (≥320px) : ~80px
              - Tablet  (≥768px) : ~22vw ≈ 170px
              - Desktop (≥1440px): capped at 280px
          */
          font-size: clamp(80px, 22vw, 280px);
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: regular;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #ffffff;
          user-select: none;
        }

        .marquee-sep {
          display: inline-block;
          font-size: 0.28em;
          margin: 0 0.3em;
          vertical-align: middle;
          color: #ffffff;
        }

        /* ─── Side vignettes so text bleeds off cleanly ─── */
        .vignette-left,
        .vignette-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 7%;
          pointer-events: none;
          z-index: 16;
        }
        .vignette-left  { left: 0;  background: linear-gradient(to right, rgba(0,0,0,0.75), transparent); }
        .vignette-right { right: 0; background: linear-gradient(to left,  rgba(0,0,0,0.75), transparent); }

        /* ─── Bottom fade → smooth into next section ─── */
        .bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            to bottom,
            transparent       0%,
            rgba(0,0,0,0.10) 20%,
            rgba(0,0,0,0.45) 45%,
            rgba(0,0,0,0.82) 68%,
            rgba(0,0,0,0.97) 86%,
            #000000          100%
          );
          pointer-events: none;
          z-index: 15;
        }
      `}</style>

      <section
        id="hero-section"
        className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/NKN_0852.jpg"
            alt="DevAdora"
            fill
            priority
            className="object-cover object-center"
            style={{
              filter: "grayscale(100%) brightness(0.55) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        <div
          className="marquee-outer absolute z-10"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-hidden="true"
        >
          <div className="marquee-track">
            {Array.from({ length: COPIES }, (_, i) => (
              <span key={i} className="marquee-item">
                DevAdora
                <span className="marquee-sep p-10">⬤</span>
              </span>
            ))}
          </div>
        </div>

        <div className="vignette-left" />
        <div className="vignette-right" />

        <div className="absolute bottom-8 right-6 md:right-12 z-20 text-right">
          <p
            className="text-white leading-tight"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
            }}
          >
            Software Developer
            <br />
            <span className="font-normal opacity-80">
              Design &amp; Innovation
            </span>
          </p>
        </div>

        {/* Smooth bottom section transition */}
        <div className="bottom-fade" />
      </section>

      {/* ─── CONTACT FORM SLIDE-IN ─── */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0a0a09] z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-in-out ${
          isContactFormOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <h2 className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
            Get In Touch
          </h2>
          <button
            onClick={closeContactForm}
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
                {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs text-white/60 hover:text-white transition-colors tracking-wide"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isContactFormOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeContactForm}
        />
      )}
    </>
  );
}
