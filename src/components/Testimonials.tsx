"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonials, { type Testimonial } from "@/data/testimonials";

/* ── Inline project-image hover ── */
function InlineImage({ src, alt }: { src: string; alt: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className="inline-flex items-center justify-center align-middle mx-2 relative"
      style={{
        height: "1em", width: "2em", verticalAlign: "text-bottom",
        cursor: hovered ? `url(${src}) 16 16, auto` : "auto",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src} alt={alt}
        style={{
          height: "80%", width: "80%",
          objectFit: "cover", objectPosition: "center",
          opacity: hovered ? 1 : 0.85,
          transition: "opacity 0.2s ease-in-out",
        }}
      />
    </span>
  );
}

/* ── Card — colors controlled entirely by globals.css classes ── */
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-card w-full h-full rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-between p-8 transition-colors duration-300">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover mb-4 shadow-sm"
        style={{ opacity: 0.9 }}
      />
      <p className="testimonial-feedback text-center italic flex-1 text-[0.85rem] md:text-[1.05rem] leading-relaxed">
        &ldquo;{testimonial.feedback}&rdquo;
      </p>
      <div className="mt-6 text-center space-y-0.5">
        <h3 className="testimonial-name font-semibold text-lg">{testimonial.name}</h3>
        <p className="testimonial-role text-sm">{testimonial.role}</p>
        <p className="testimonial-skill italic text-[0.8rem]">{testimonial.skill}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((p) => (p + 1) % testimonials.length);

  const getPosition = (i: number): "center" | "left" | "right" => {
    const diff = (i - index + testimonials.length) % testimonials.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  const variants = {
    center: { x: "0%",   scale: 1.05, zIndex: 20, opacity: 1   },
    left:   { x: "-90%", scale: 0.90, zIndex: 10, opacity: 0.45 },
    right:  { x: "90%",  scale: 0.90, zIndex: 10, opacity: 0.45 },
  };

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden relative px-6 py-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-base)", color: "var(--fg-primary)" }}
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center pb-10 text-center max-w-5xl">
        <h1 className="font-serif italic leading-snug" style={{ fontSize: "clamp(1.8rem, 5vw, 5.5rem)" }}>
          "Here are <span className="font-semibold">some</span>
          <InlineImage src="/images/Goranow Designs.svg" alt="Goranow Designs" />
          &nbsp;statements from clients, or <span className="font-semibold">other</span>
          <InlineImage src="/images/Siren.png" alt="Siren" />
          &nbsp;individuals that describe their good experiences with <span className="font-semibold">me</span>
          <InlineImage src="/images/hr-image.png" alt="HR" />"
        </h1>
        <p className="mt-5 italic text-sm sm:text-base" style={{ color: "var(--fg-muted)" }}>
          Insights and reflections from those who've experienced our work.
        </p>
      </div>

      {/* Nav */}
      <div className="flex gap-4 mb-10">
        {[prev, next].map((fn, i) => (
          <button
            key={i}
            onClick={fn}
            className="p-3 rounded-full border transition-all duration-200 cursor-pointer hover:scale-105"
            style={{ borderColor: "var(--border-subtle)", color: "var(--fg-muted)" }}
          >
            {i === 0 ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative flex w-full h-[460px] justify-center items-center">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            variants={variants}
            animate={getPosition(i)}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="absolute w-[340px] md:w-[580px] h-[430px]"
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: i === index ? "1.5rem" : "0.5rem",
              height: "0.5rem",
              backgroundColor: i === index ? "var(--fg-primary)" : "var(--border-subtle)",
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}