"use client";

import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import { ALL_PROJECTS } from "@/data/projects";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ── Icons ── */
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ── Custom hover cursor ── */
function CustomCursor({ isHovering, x, y }: { isHovering: boolean; x: number; y: number }) {
  if (!isHovering) return null;
  return (
    <div
      className="fixed pointer-events-none z-[60] transition-opacity duration-150"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <div
        className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-semibold whitespace-nowrap"
        style={{ backgroundColor: "var(--fg-primary)", color: "var(--bg-base)" }}
      >
        View Project
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  if (isLoading) return <Preloader />;

  return (
    <>
      <Header overlayHero={false} />

      <CustomCursor isHovering={hoveredIndex !== null} x={cursor.x} y={cursor.y} />

      <section className="projects-page-section min-h-screen px-[5%] pt-28 pb-20">

        {/* ── Page header ── */}
        <div className="flex items-end justify-between mb-16 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
            >
              PROJECTS
            </h1>
          </div>
          <span
            className="text-[11px] tracking-[0.2em] uppercase opacity-35 shrink-0 mb-4"
          >
            ({String(ALL_PROJECTS.length).padStart(2, "0")}) Total
          </span>
        </div>

        {/* ── Alternating editorial grid ── */}
        <div className="flex flex-col gap-0">
          {ALL_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="group grid grid-cols-1 md:grid-cols-2 border-b border-[var(--border-subtle)] py-10 md:py-14 gap-8 md:gap-0"
                onMouseMove={handleMouseMove}
              >
                {/* Image — alternates left/right */}
                <div
                  className={`overflow-hidden rounded-xl cursor-pointer ${isEven ? "md:order-1" : "md:order-2"}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="overflow-hidden rounded-xl w-full h-[280px] sm:h-[340px] md:h-[380px]">
                    <Image
                      src={project.image}
                      width={900}
                      height={600}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* Info — alternates right/left */}
                <div
                  className={`flex flex-col justify-between ${
                    isEven
                      ? "md:order-2 md:pl-12 lg:pl-16"
                      : "md:order-1 md:pr-12 lg:pr-16"
                  }`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[11px] tracking-[0.25em] uppercase opacity-35">
                      {num}
                    </span>
                    <span className="text-[11px] tracking-[0.2em] uppercase opacity-35 text-right">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Main info */}
                  <div className="mt-6 md:mt-0 flex flex-col gap-4">
                    <p className="text-[11px] tracking-[0.22em] uppercase opacity-40">
                      {project.title}
                    </p>
                    <h2
                      className="font-bold leading-tight tracking-tight"
                      style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}
                    >
                      {project.name}
                    </h2>
                    <p className="text-[0.9rem] leading-relaxed opacity-60 max-w-md">
                      {project.desc}
                    </p>
                  </div>

                  {/* Bottom row — tags + links */}
                  <div className="mt-6 flex flex-col gap-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.filter(t => isNaN(Number(t))).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-[var(--border-subtle)] opacity-60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Tech + action links */}
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] opacity-40 tracking-wide max-w-[65%]">
                        {project.tech}
                      </p>

                      <div className="flex items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity duration-200 group/link"
                        >
                          <GitHubIcon />
                          <span className="text-[10px] tracking-widest uppercase hidden sm:block opacity-0 group-hover/link:opacity-100 transition-opacity duration-200">
                            Code
                          </span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity duration-200 group/link"
                        >
                          <LiveIcon />
                          <span className="text-[10px] tracking-widest uppercase hidden sm:block opacity-0 group-hover/link:opacity-100 transition-opacity duration-200">
                            Live
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Footer note ── */}
        <p className="text-center text-[11px] tracking-[0.25em] uppercase opacity-25 mt-16">
          End of works — {ALL_PROJECTS.length} projects
        </p>
      </section>

      <Footer />
      <FloatingControls />
    </>
  );
}