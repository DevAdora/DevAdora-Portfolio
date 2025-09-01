"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const projects = [
    {
      number: "01.",
      image: "/images/arc-tech.png",
      title: "Architectural Showcase & E-commerce",
      name: "ARC-TECH",
      tags: ["2025", "Design", "Development", "Web Application"],
    },
    {
      number: "02.",
      image: "/images/PF Background.png",
      title: "Apparel/Clothing E-commerce",
      name: "Passion meets Fashion",
      tags: ["2025", "Design", "Development", "Web Application"],
    },
    {
      number: "03.",
      image: "/images/transcare-image.png",
      title: "Healthcare Services ",
      name: "Transcare EMS",
      tags: ["2025", "Design", "Development", "Web Application"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // store refs for each project
  const projectRefs = projects.map(() =>
    useInView({
      threshold: 0.5,
      triggerOnce: false,
    })
  );

  // update activeIndex when scroll changes
  useEffect(() => {
    projectRefs.forEach(({ inView }, index) => {
      if (inView) {
        setActiveIndex(index);
      }
    });
  }, [projectRefs.map((ref) => ref.inView).join(",")]);

  return (
    <section className="projects h-full py-8 px-[5%] bg-dark-black text-white-dove relative">
      {/* Section Title */}
      <div className="text-center py-8">
        <h1 className="text-[4rem] sm:text-[7rem] xl:text-[8rem] leading-none text-left lg:text-center">
          SELECTED WORKS
        </h1>
      </div>

      {/* Subheading */}
      <div className="text-white-dove py-8 flex justify-end items-end w-full md:flex-col-reverse">
        <p>(Projects)</p>
        <span className="text-right text-xl w-full sm:w-[70%] md:w-[70%]">
          "I am here to help you transform your tech aspirations into a
          remarkable reality."
        </span>
      </div>

      {/* Main Layout: Number (left) + Projects (right) */}
      {/* Main Layout: Grid with 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 relative z-10">
        {/* Sticky Number Column */}
        <div className="hidden md:block">
          <div className="sticky top-40">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10rem] md:text-[10rem] lg:text-[15rem] font-bold text-white-dove"
            >
              {projects[activeIndex].number}
            </motion.span>
          </div>
        </div>

        {/* Projects Column */}
        <div className="flex flex-col gap-40">
          {projects.map((project, index) => {
            const { ref } = projectRefs[index];
            return (
              <div
                key={index}
                ref={ref}
                className="flex flex-col relative min-h-[60vh]"
              >
                {/* Image */}
                <div className="w-full h-auto sm:h-[60vh] md:h-[30vh] mb-4  overflow-hidden">
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
                  <div className="text-[1.5rem] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 md:flex-col md:items-start md:justify-start">
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
            );
          })}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center py-8 min-h-[30vh]">
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
