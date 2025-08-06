"use client";

import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { JSX } from "react";
import {
  FaReact,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaWordpress,
  FaJsSquare,
  FaFileAlt,
  
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiMysql,
  SiSupabase,
  SiExpo,
  SiElementor,
} from "react-icons/si";

export default function ProjectsPage() {
  const techIcons: { [key: string]: JSX.Element } = {
    React: <FaReact className="text-cyan-400" />,
    NextJS: <SiNextdotjs className="text-black" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    TailwindCSS: <SiTailwindcss className="text-sky-400" />,
    Supabase: <SiSupabase className="text-green-500" />,
    Flask: <SiFlask className="text-white" />,
    Python: <FaPython className="text-yellow-400" />,
    TXT: <FaFileAlt className="text-gray-400" />,
    Bootstrap: <FaBootstrap className="text-purple-500" />,
    Firebase: <SiFirebase className="text-yellow-400" />,
    Flutter: <SiFlutter className="text-blue-400" />,
    Dart: <SiDart className="text-blue-300" />,
    WordPress: <FaWordpress className="text-blue-500" />,
    Elementor: <SiElementor className="text-pink-500" />,
    PHP: <FaPhp className="text-indigo-500" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <FaJsSquare className="text-yellow-400" />,
    MySQL: <SiMysql className="text-blue-400" />,
    Expo: <SiExpo className="text-black" />,
  };

  const projects = [
    {
      image: "/images/transcare-image.png",
      title: "Healthcare Services ",
      name: "Web Application",
      tags: ["2025", "Design", "Development", "Web Application"],
      desc: "A comprehensive web application for health care services, providing a platform for patients and providers to connect.",
      tech: "React, NextJS, Supabase, ShadCN UI, Tailwind CSS",
    },
    {
      image: "/images/freshinsights-logo.png",
      title: "Grocery & E-commerce",
      name: "Flask Python Application",
      tags: ["2025", "Design", "Development", "Flask Python"],
      desc: "An e-commerce platform built with Flask and Python, offering a seamless shopping experience for groceries.",
      tech: "Flask, Python, TXT File, Bootstrap",
    },
    {
      image: "/images/ugyon.png",
      title: "Voucher Reward & Point System",
      name: "Ugyon App",
      tags: ["Flutter", "Mobile Application", "Development", "24-25"],
      desc: "A mobile application designed to manage voucher rewards and point systems, enhancing customer engagement and loyalty.",
      tech: "Flutter, Dart, Firebase",
    },
    {
      image: "/images/siren-app.png",
      title: "Emergency & Response Mobile App",
      name: "Siren App",
      tags: ["React Native", "Mobile Application", "Development", "2024"],
      desc: "A mobile application designed for emergency response, providing quick access to services and information during critical situations.",
      tech: "React Native, Expo, Firebase",
    },
    {
      image: "/images/goranow.png",
      title: "Travel Agency & Tourist WordPress Website",
      name: "GORANOW",
      tags: ["2024", "WordPress", "Development", "Website"],
      desc: "A WordPress website for a travel agency, offering services and information for tourists, designed to enhance user experience and engagement.",
      tech: "WordPress, Elementor",
    },
    {
      image: "/images/arc-tech-logo.png",
      title: "Architecture & Engineering",
      name: "Arc-tech Website",
      tags: ["Design", "Development", "2024", "Website"],
      desc: "A professional website for an architecture and engineering firm, showcasing their projects and services.",
      tech: "HTML, CSS, JavaScript, Tailwind CSS",
    },
    {
      image: "/images/hr-image.png",
      title: "Management & Education System",
      name: "HRMS Website",
      tags: ["2023", "Design", "Development", "Website"],
      desc: "A Human Resource Management System (HRMS) website designed to streamline HR processes and enhance employee management.",
      tech: "PHP, CSS, JavaScript, Tailwind CSS, MySQL",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Header />
      <section className="h-full py-8 px-[5%] bg-dark-black text-white-dove">
        <div className="text-center py-8">
          <h1 className="text-[4rem] sm:text-[7rem] md:text-[7rem] lg:text-[7rem] xl:text-[8rem] leading-15 sm:leading-24 md:leading-24 lg:leading-24 xl:leading-24 2xl:leading-24 text-left sm:text-left md:text-left lg:text-center">
            PROJECTS
          </h1>
        </div>

        <div className="flex flex-col gap-40 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-row flex md:flex-row md:items-start relative md:h-[100%]"
            >
              {/* Image + Details */}
              <div className="flex flex-row w-full md:w-[100%] gap-10 min-h-[40vh]">
                {/* Image Fullscreen on small screens */}
                <div className="w-[50%] h-auto sm:h-[40vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] 2xl:h-[40vh] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      width={1000}
                      height={600}
                      className="w-[100%] h-[40vh] object-cover rounded-lg"
                      alt={`Project ${index + 1}`}
                    />
                  </motion.div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-6 px-2 sm:px-0 w-[50%] justify-between">
                  <h3 className="text-[1.2rem]">{project.title}</h3>
                  <div className="text-[1.5rem] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <h2>{project.name}</h2>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base projects"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[1.2rem] text-white-dove">
                    <span className="text-[1.2rem]">{project.desc}</span>
                  </div>
                  {/* === Tech Stack === */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(",").map((tech, i) => {
                      const trimmed = tech.trim();
                      return (
                        <span
                          key={i}
                          className="flex items-center gap-2 py-2 px-4  border border-white-dove rounded-3xl text-md"
                        >
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

        {/* Button */}
        {/* <div className="flex justify-center items-center py-8">
          <div className="relative">
            <button className="projects-btn text-white-dove px-4 py-2 rounded-full mx-2 hover:bg-white-dove hover:text-dark-black border border-dark-black transition-colors cursor-pointer relative">
              More Works
              <span className="absolute text-[10px] rounded-full leading-none">
                11
              </span>
            </button>
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
}
