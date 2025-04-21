"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      number: "01.",
      image: "/images/freshinsights-logo.png",
      title: "Grocery & E-commerce",
      name: "Flask Python Application",
      tags: ["2025", "Design", "Development"],
    },
    {
      number: "02.",
      image: "/images/hr-image.png",
      title: "Management & Education System",
      name: "HRMS Website",
      tags: ["2025", "Design", "Development"],
    },
    {
      number: "03.",
      image: "/images/arc-tech-logo.png",
      title: "Architecture & Engineering",
      name: "Arc-tech Website",
      tags: ["Design", "Development", "2025"],
    },
  ];

  return (
    <section className="projects h-full py-8 px-[5%] bg-dark-black text-white-dove">
      <div className="text-center py-8">
        <h1 className="text-[4rem] sm:text-[7rem] md:text-[7rem] lg:text-[7rem] xl:text-[8rem] leading-15 sm:leading-24 md:leading-24 lg:leading-24 xl:leading-24 2xl:leading-24 text-left sm:text-left md:text-left lg:text-center">
          SELECTED WORKS
        </h1>
      </div>

      <div className="text-white-dove py-8 flex justify-end items-end w-full md:flex-col-reverse">
        <p>(Projects)</p>
        <span className="text-right text-xl w-full sm:w-[70%] md:w-[70%]">
          "I am here to help you transform your tech aspirations into a
          remarkable reality."
        </span>
      </div>

      <div className="flex flex-col gap-40">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start relative md:h-screen"
          >
            {/* Project Number */}
            <div className="hidden md:block sticky top-[20%] w-[40%] z-10 text-5xl text-white-dove">
              <h1 className="w-full text-[12rem]">{project.number}</h1>
            </div>

            {/* Image + Details */}
            <div className="w-full md:w-[60%] min-h-[60vh]">
              {/* Image Fullscreen on small screens */}
              <div className="w-full h-auto sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] 2xl:h-[60vh] mb-4 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                    alt={`Project ${index + 1}`}
                  />
                </motion.div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-6 px-2 sm:px-0">
                <h3 className="text-[1.2rem]">{project.title}</h3>
                <div className="text-[1.5rem] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <h2>{project.name}</h2>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[1rem] py-2 px-4 rounded-3xl border border-white-dove text-base"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center items-center py-8">
        <div className="relative">
          <button className="projects-btn text-white-dove px-4 py-2 rounded-full mx-2 hover:bg-white-dove hover:text-dark-black border border-dark-black transition-colors cursor-pointer relative">
            More Works
            <span className="absolute text-[10px] rounded-full leading-none">
              11
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
