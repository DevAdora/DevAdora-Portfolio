"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Projects() {
  const projects = [
    {
      industry: "Book Platform",
      title: "Scriptum, Mens, Lumen",
      timeline: "2025 - Present",
      image: "/images/sml.png",
      tags: ["Design", "Development", "Web Application"],
    },
    {
      industry: "Data Analytics",
      title: "Analytique",
      timeline: "2025 - Present",
      image: "/images/analytique.png",
      tags: ["Design", "Development", "Web Application"],
    },
    {
      industry: "Architecture",
      title: "ARC-TECH",
      timeline: "2025",
      image: "/images/arc-tech (2).png",
      tags: ["Design", "Development", "Showcase"],
    },
    {
      industry: "Fashion",
      title: "Passion meets Fashion",
      timeline: "2025",
      image: "/images/PF Background.png",
      tags: ["E-commerce", "Web Design"],
    },
    {
      industry: "Healthcare Services",
      title: "Transcare EMS",
      timeline: "2025",
      image: "/images/transcare-image.png",
      tags: ["Development", "Mobile App"],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xReverse = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section
      ref={containerRef}
      className="projects bg-dark-black text-white-dove relative overflow-hidden"
    >
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden border-b-4 border-white-dove">
        <motion.div
          style={{ x }}
          className="flex whitespace-nowrap mb-4 sm:mb-8"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem] font-black leading-none tracking-tighter px-8">
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
              <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem] font-black leading-none tracking-tighter px-8">
                PROJECTS
              </h1>
              <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] px-8">
                —
              </span>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-sm sm:text-base">
          <span className="font-mono">(SELECTED PROJECTS)</span>
          <span className="font-mono hidden sm:block">2022—Present</span>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16 py-16 sm:py-24">
        <div className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-4 lg:gap-8 pb-8 mb-8 border-b-2 border-white-dove/20 text-xs uppercase tracking-wider opacity-60">
          <div>Industry</div>
          <div>Project Title</div>
          <div>Timeline</div>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>

        <div className="flex justify-center items-center pt-24 pb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 text-lg font-bold border border-white-dove bg-dark-black text-white-dove hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider group rounded-xl cursor-pointer"
          >
            View All Works
            <span className="absolute -top-1 -right-1 bg-white-dove text-dark-black w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-black group-hover:text-white group-hover:border-2 group-hover:border-white-dove transition-all">
              {projects.length}
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: {
    industry: string;
    title: string;
    timeline: string;
    image: string;
    tags: string[];
  };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-b-2 border-white-dove/20 cursor-pointer group overflow-hidden"
    >
      <div className="md:hidden py-6 space-y-3">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider opacity-60">
              {project.industry}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
          </div>
          <div className="text-xs font-mono uppercase tracking-wider opacity-60 whitespace-nowrap">
            {project.timeline}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 border border-white-dove/40 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-4 lg:gap-8 py-8 items-center relative"
      >
        <motion.div
          animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-sm lg:text-base font-mono uppercase tracking-wider"
        >
          {project.industry}
        </motion.div>

        <motion.div
          animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h3 className="text-2xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 border border-white-dove/40 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-sm lg:text-base font-mono uppercase tracking-wider"
        >
          {project.timeline}
        </motion.div>

        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{
            clipPath: isHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover w-[100%]"
              sizes="100vw"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-dark-black/10" />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-4 hidden lg:block z-30">
        <span className="text-6xl font-black opacity-10 group-hover:opacity-20 transition-opacity font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
