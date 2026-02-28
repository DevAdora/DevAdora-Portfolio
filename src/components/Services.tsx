"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const box2Y = useTransform(scrollYProgress, [0, 0.33], ["100%", "0%"]);
  const box3Y = useTransform(scrollYProgress, [0.33, 0.66], ["100%", "0%"]);

  return (
    <div className="services h-full bg-dark-black" ref={containerRef}>
      <div className="flex w-full flex-wrap justify-center items-center">
        <div className="text-center text-2xl p-8 mt-8">
          <h1 className="text-white-dove  text-[4rem] sm:text-[7rem] md:text-[7rem] lg:text-[8rem] xl:text-[8rem] sm:text-left leading-24 md:text-left">
            SERVICES I OFFER.
          </h1>
        </div>
        <div className="text-white-dove p-8 flex justify-end items-end w-full md:flex-col-reverse">
          <p>(Services)</p>
          <span className="text-right text-xl w-full sm:w-[70%] md:w-[70%]">
            "Turning complex challenges into elegant, scalable solutions — built
            to perform, designed to endure."
          </span>
        </div>
      </div>

      <motion.div className="box border-t border-white-dove sticky top-0 w-full h-screen flex flex-col bg-[#000000] z-[1]">
        <div className="mt-8 md:mt-4 p-8 md:p-8">
          <div className="flex md:flex-row md:justify-end items-center mb-5 p-4 md:p-2">
            <div className="w-[clamp(300px, 50vw, 700px)] justify-start items-start">
              <h1 className="text-left md:text-right text-[2.3rem] sm:text-[3rem] md:text-[3rem] lg:text-[3.5rem] text-white-dove tracking-tighter leading-snug sm:flex sm:w-[100%] sm:justify-start sm:items-center ">
                Systems Architecture & Product Design
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:justify-between items-center md:items-center w-full">
            <div className="pl-0 md:pl-8 w-[50%]">
              <h1 className="text-white-dove text-[2.3rem] sm:text-[3rem] md:text-[10rem] lg:text-[20rem] text-center hidden sm:hidden md:block">
                01
              </h1>
            </div>
            <div className="h-[100%] w-[90%] md:w-[70%] sm:w-[70%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-0 md:p-2 justify-start items-start">
              <p className="text-left text-[1.2rem] md:text-[1.5rem] text-white-dove leading-8 ">
                A strong product begins with a strong foundation. I architect
                end-to-end systems that are built for scale, maintainability,
                and performance — bridging the gap between technical structure
                and user experience. From defining information architecture to
                delivering high-fidelity prototypes, every decision is
                intentional and outcome-driven.
              </p>
              <div className="pt-4">
                <ol className="p-4 md:p-8 ml-1 list-decimal">
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    Full-Stack Development & System Design
                  </li>
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    Motion Design & Interaction Engineering
                  </li>
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    Scalable Application Architecture
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="box border-t border-white-dove sticky top-[25%] sm:top-[25%] md:top-[17.5%] lg:top-[17.5%] xl:top[20%] w-full h-screen flex flex-col z-[2]"
        style={{ y: box2Y }}
      >
        <div className="mt-4 p-8 md:p-8">
          <div className="flex md:flex-row md:justify-end items-center mb-5 p-4 md:p-2">
            <div className="w-[clamp(300px, 50vw, 700px)] justify-start items-start">
              <h1 className="text-left md:text-right text-[2.3rem] sm:text-[3rem] md:text-[3rem] lg:text-[3.5rem] text-white-dove tracking-tighter leading-snug sm:flex sm:w-[100%] sm:justify-start sm:items-center ">
                Software Engineering & Delivery
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:justify-between items-center md:items-center w-full">
            <div className="pl-0 md:pl-8 w-[50%]">
              <h1 className="text-white-dove text-[2.3rem] sm:text-[3rem] md:text-[10rem] lg:text-[20rem] text-center hidden sm:hidden md:block">
                02
              </h1>
            </div>
            <div className="h-[100%] w-[90%] md:w-[70%] sm:w-[70%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-0 md:p-2 justify-start items-start">
              <p className="text-left text-[1.2rem] md:text-[1.5rem] text-white-dove leading-8 ">
                I build production-ready web and mobile applications that
                prioritize reliability, speed, and clarity. Every line of code
                is written with purpose — delivering seamless experiences across
                platforms and devices, with clean codebases that are easy to
                maintain, extend, and hand off to growing teams.
              </p>
              <div className="pt-4">
                <ol className="p-4 md:p-8 ml-1 list-decimal">
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    Responsive & Cross-Platform Development
                  </li>
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    Performance Optimization & Code Quality
                  </li>
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    API Integration & Backend Services
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className=" box border-t border-white-dove sticky top-[27.5%] w-full h-screen sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen flex flex-col z-[3]"
        style={{ y: box3Y }}
      >
        <div className="mt-4 p-8 md:p-8">
          <div className="flex md:flex-row md:justify-end items-center mb-5 p-4 md:p-2">
            <div className="w-[clamp(300px, 50vw, 700px)] justify-start items-start">
              <h1 className="text-left md:text-right text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.5rem] text-white-dove tracking-tighter leading-snug sm:flex sm:w-[100%] sm:justify-start sm:items-center ">
                Strategy, UX & Concept Execution
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:justify-between items-center md:items-center w-full">
            <div className="pl-0 md:pl-8 w-[50%]">
              <h1 className="text-white-dove text-[2.3rem] sm:text-[3rem] md:text-[10rem] lg:text-[20rem] text-center hidden sm:hidden md:block">
                03
              </h1>
            </div>
            <div className="h-[100%] w-[90%] md:w-[70%] sm:w-[70%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-0 md:p-2 justify-start items-start">
              <p className="text-left text-[1.2rem] md:text-[1.5rem] text-white-dove leading-8 ">
                Great products don't start with code — they start with clarity.
                I work closely with clients to define the strategic vision of a
                project, translate it into structured UX flows, and execute it
                with precision. From early-stage ideation to documented case
                studies, I ensure every solution is grounded in purpose and
                validated by process.
              </p>
              <div className="pt-4">
                <ol className="p-4 md:p-8 ml-1 list-decimal">
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    Wireframing, Prototyping & User Testing
                  </li>
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    UX Writing, Flowcharts & Information Architecture
                  </li>
                  <li className="text-left leading-relaxed text-lg md:text-xl text-white-dove">
                    Product Case Studies & Technical Documentation
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
