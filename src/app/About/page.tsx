"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />

          <section className=" h-full min-h-screen py-8 px-[5%] text-white-dove">
            <div className="flex gap-8">
              <div className="w-1/2">
                <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[325px] ">
                  <Image
                    src="/images/devadora-image.png"
                    width={400}
                    height={500}
                    alt="DevAdora Portrait"
                    className="w-full h-auto rounded-full"
                  />
                </div>
                <div className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] leading-7 sm:leading-10 md:leading-10 lg:leading-10 xl:leading-10 text-left ml-8 mt-4">
                  <h1>DevAdora (Rai M. Reyes Jr.)</h1>
                </div>
                <div className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] leading-5 sm:leading-7 md:leading-7 lg:leading-7 xl:leading-7 text-left ml-8 mt-4">
                  <h1>
                    Aspiring Software Developer 👩🏻‍💻 and currently a freelancer{" "}
                    {"</>"} based in Philippines 📍.
                  </h1>
                </div>
              </div>
              <div className="w-full">
                <div className="p-0 sm:p-0 md:p-8 w-full">
                  <div className="text-left ">
                    <span className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] leading-8">
                      Ar-ar Reyes, the mind behind DevAdora, is a multifaceted
                      freelancer, developer, and designer devoted to
                      transforming bold ideas into impactful digital realities.
                    </span>
                  </div>
                </div>
                <div className="py-4 sm:mt-5 sm:p-0 md:p-8 w-full">
                  <div className="text-left ">
                    <p className="mb-4">(ABOUT ME)</p>
                    <span className="text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] leading-5">
                      With a seamless end-to-end process and a sharp eye for
                      detail, Ar-ar bridges imagination and innovation—crafting
                      solutions that don’t just function, but resonate.{" "}
                      <br></br>
                      Each project is more than a deliverable; it’s a statement,
                      leaving a meaningful imprint on the tech world and your
                      vision alike.
                    </span>
                  </div>
                </div>
                <div className="py-4 sm:mt-5 sm:p-0 md:p-8 w-full">
                  <div className="text-left ">
                    <p className="mb-4">SOCIALS</p>
                    <div className="flex gap-4 mt-4">
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-[100px] h-[30px] bg-dark-black-color">
                          <FaGithub className="w-full h-full" />
                        </div>{" "}
                      </a>
                      <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-[100px] h-[30px] bg-dark-black-color">
                          <FaLinkedin className="w-full h-full" />
                        </div>{" "}
                      </a>
                      <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-[100px] h-[30px] bg-dark-black-color">
                          <FaInstagram className="w-full h-full" />
                        </div>{" "}
                      </a>
                      <a
                        href="https://medium.com/@yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-[100px] h-[30px] bg-dark-black-color">
                          <SiMedium className="w-full h-full" />
                        </div>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
