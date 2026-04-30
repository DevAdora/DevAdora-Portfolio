"use client";

import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import { ALL_PROJECTS } from "@/data/projects";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { JSX } from "react";
import {
  FaReact, FaPython, FaPhp, FaHtml5, FaCss3Alt,
  FaBootstrap, FaWordpress, FaJsSquare, FaFileAlt,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiFlask, SiFirebase,
  SiFlutter, SiDart, SiMysql, SiSupabase, SiExpo, SiElementor,
} from "react-icons/si";

export default function ProjectsPage() {
  const techIcons: { [key: string]: JSX.Element } = {
    React:        <FaReact className="text-cyan-400" />,
    NextJS:       <SiNextdotjs className="text-black" />,
    Tailwind:     <SiTailwindcss className="text-sky-400" />,
    TailwindCSS:  <SiTailwindcss className="text-sky-400" />,
    Supabase:     <SiSupabase className="text-green-500" />,
    Flask:        <SiFlask className="text-white" />,
    Python:       <FaPython className="text-yellow-400" />,
    TXT:          <FaFileAlt className="text-gray-400" />,
    Bootstrap:    <FaBootstrap className="text-purple-500" />,
    Firebase:     <SiFirebase className="text-yellow-400" />,
    Flutter:      <SiFlutter className="text-blue-400" />,
    Dart:         <SiDart className="text-blue-300" />,
    WordPress:    <FaWordpress className="text-blue-500" />,
    Elementor:    <SiElementor className="text-pink-500" />,
    PHP:          <FaPhp className="text-indigo-500" />,
    HTML:         <FaHtml5 className="text-orange-500" />,
    CSS:          <FaCss3Alt className="text-blue-500" />,
    JavaScript:   <FaJsSquare className="text-yellow-400" />,
    MySQL:        <SiMysql className="text-blue-400" />,
    Expo:         <SiExpo className="text-black" />,
    SQLite:       <SiMysql className="text-blue-300" />,
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Header overlayHero={false} />

      <section className="projects-page-section h-full py-8 px-[5%] bg-[#000000] text-[#f0ede4]">
        <div className="text-center py-8">
          <h1 className="text-[4rem] sm:text-[7rem] md:text-[7rem] lg:text-[7rem] xl:text-[8rem] leading-15 sm:leading-24 md:leading-24 lg:leading-24 xl:leading-24 2xl:leading-24 text-center">
            PROJECTS
          </h1>
        </div>

        <div className="flex-col md:gap-40 flex">
          {ALL_PROJECTS.map((project, index) => (
            <div key={index} className="flex-col flex md:flex-col md:items-start relative md:h-[100%]">
              <div className="flex flex-col lg:flex-row w-[100%] gap-10 min-h-[100vh] md:min-h-[40vh]">

                <div className="w-[100%] lg:w-[50%] h-auto sm:h-[40vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] 2xl:h-[40vh] overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image
                      src={project.image}
                      width={1000}
                      height={600}
                      className="w-full h-[40vh] object-cover rounded-lg"
                      alt={project.name}
                    />
                  </motion.div>
                </div>

                <div className="flex flex-col gap-2 lg:gap-6 px-2 sm:px-0 w-[100%] lg:w-[50%] justify-between">
                  <h3 className="text-[1.2rem]">{project.title}</h3>

                  <div className="text-[1.5rem] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <h2>{project.name}</h2>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[0.7rem] md:text-[1rem] py-1 px-2 md:py-2 md:px-4 rounded-3xl border border-white-dove text-base projects">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-[1.2rem] text-white-dove">
                    <span className="text-[1rem] md:text-[1.2rem]">{project.desc}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(",").map((tech, i) => {
                      const trimmed = tech.trim();
                      return (
                        <span key={i} className="flex items-center gap-2 text-[0.8rem] md:text-[1rem] py-1 px-2 md:py-2 md:px-4 border border-white-dove rounded-3xl">
                          {techIcons[trimmed] || null}
                          {trimmed}
                        </span>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingControls />
    </>
  );
}