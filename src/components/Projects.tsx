"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ALL_PROJECTS, HOMEPAGE_PREVIEW_COUNT, REMAINING_COUNT } from "@/data/projects";

interface CursorPosition {
  x: number;
  y: number;
}

function CustomCursor({
  isHovering,
  position,
}: {
  isHovering: boolean;
  position: CursorPosition;
}) {
  if (!isHovering) return null;
  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="bg-black text-white px-6 py-3 rounded-full text-sm font-onestsemibold whitespace-nowrap">
        View Project
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const projects = ALL_PROJECTS.slice(0, HOMEPAGE_PREVIEW_COUNT);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xReverse = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const projectRefs = projects.map(() =>
    useInView({ threshold: 0.5, triggerOnce: false }),
  );

  return (
    <section
      ref={containerRef}
      className="projects bg-dark-black text-white-dove relative"
    >
      <CustomCursor
        isHovering={hoveredIndex !== null}
        position={cursorPosition}
      />

      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex whitespace-nowrap mb-4 sm:mb-8"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <h1 className="text-[16rem] sm:text-[20rem] md:text-[16rem] lg:text-[20rem] xl:text-[35rem] font-black leading-none tracking-tighter karla-script">
                WORKS
              </h1>
              <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] px-8">
                —
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: xReverse }} className="flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <h1 className="text-[16rem] sm:text-[20rem] md:text-[16rem] lg:text-[20rem] xl:text-[35rem] font-black leading-none tracking-tighter karla-script">
                PROJECTS
              </h1>
              <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] px-8">
                —
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-0">
        <h1 className="md:hidden text-[3rem] font-black tracking-tighter leading-none mb-16">
          SELECTED WORKS
        </h1>

        <div className="flex flex-col md:flex-row gap-0">
          <div className="hidden md:block md:w-[50%] lg:w-[50%] shrink-0">
            <div className="sticky top-5 xl:top-5">
              <h1 className="text-[3.2rem] lg:text-[8rem] xl:text-[8rem] leading-none text-left font-black tracking-tighter">
                SELECTED
                <br />
                WORKS
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:w-[58%] lg:w-[60%]">
            {projects.map((project, index) => {
              const { ref } = projectRefs[index];
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`flex flex-col relative ${index === 0 ? "pt-0" : "pt-24 md:pt-32"}`}
                >
                  <div className="w-full overflow-hidden rounded-xl">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="w-full"
                    >
                      <Image
                        src={project.image}
                        width={1200}
                        height={800}
                        className="w-full object-cover cursor-pointer"
                        style={{ height: "clamp(260px, 40vw, 540px)" }}
                        alt={project.name}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onMouseMove={handleMouseMove}
                      />
                    </motion.div>
                  </div>

                  <div className="mt-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <span className="text-white-dove/40 text-xs tracking-[0.2em] uppercase">
                        {project.title}
                      </span>
                      <h3 className="text-[1.25rem] sm:text-[1.4rem] font-semibold leading-snug tracking-tight">
                        {project.name}
                      </h3>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
                      <span className="text-white-dove/40 text-xs tracking-widest uppercase">
                        {project.timeline}
                      </span>
                      <div className="flex items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View on GitHub"
                          className="flex items-center gap-1.5 text-white-dove/50 hover:text-white-dove transition-colors duration-200 text-xs tracking-wide group"
                        >
                          <GitHubIcon />
                          <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            GitHub
                          </span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                          className="flex items-center gap-1.5 text-white-dove/50 hover:text-white-dove transition-colors duration-200 text-xs tracking-wide group"
                        >
                          <LiveIcon />
                          <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Live
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {index < projects.length - 1 && (
                    <div className="mt-10 md:mt-14 w-full h-px bg-white-dove/10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-16 min-h-[20vh]">
        <div className="relative">
          <Link href="/Projects">
            <button className="projects-btn text-white-dove px-6 py-3 rounded-full mx-2 hover:bg-white-dove hover:text-dark-black border border-white-dove/30 transition-colors cursor-pointer relative text-sm tracking-widest uppercase">
              More Works
              <span className="absolute -top-2 -right-2 text-[9px] bg-white-dove text-dark-black rounded-full w-5 h-5 flex items-center justify-center leading-none font-semibold">
                {REMAINING_COUNT}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}