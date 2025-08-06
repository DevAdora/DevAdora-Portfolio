"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function AboutPage() {
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

      <section className="min-h-screen px-[5%] py-12  text-black">
        <div className="flex flex-col md:flex-row gap-8">
          {/* === Sticky Left Section === */}
          <div className="md:w-1/3 md:sticky top-20 self-start">
            <Image
              src="/images/devadora-image.png"
              width={300}
              height={300}
              alt="DevAdora"
              className="rounded-full mx-auto md:mx-0"
            />
            <div className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] leading-7 sm:leading-10 md:leading-10 lg:leading-10 xl:leading-10 text-center md:text-left mt-4">
              <h1>DevAdora (Rai M. Reyes Jr.)</h1>
            </div>
            <div className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] leading-5 sm:leading-7 md:leading-7 lg:leading-7 xl:leading-7 text-center md:text-left mt-4">
              <h1>
                Aspiring Software Developer 👩🏻‍💻 and currently a freelancer{" "}
                {"</>"} based in Philippines 📍.
              </h1>
            </div>
            {/* === Social Icons === */}

            {/* === Resume / CV Buttons === */}
            <div className="mt-8 flex flex-col justify-center items-center md:justify-start md:items-start">
              <p className="text-md font-semibold mb-2">RESUME & CV</p>
              <div className="flex gap-4">
                <a
                  href="/Rai M. Reyes Jr - Resume.pdf"
                  target="_blank"
                  className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80"
                >
                  View
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="border px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* === Right Content Section === */}
          <div className="md:w-2/3">
            <div className="p-0 sm:p-0 md:p-8 w-full">
              <div className="text-left ">
                <span className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] leading-8">
                  Ar-ar Reyes, the mind behind DevAdora, is a multifaceted
                  freelancer, developer, and designer devoted to transforming
                  bold ideas into impactful digital realities.
                </span>
              </div>
            </div>
            <div className="py-4 sm:mt-5 sm:p-0 md:p-8 w-full">
              <div className="text-left ">
                <p className="mb-4">(ABOUT ME)</p>
                <span className="text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] leading-5">
                  With a seamless end-to-end process and a sharp eye for detail,
                  Ar-ar bridges imagination and innovation—crafting solutions
                  that don’t just function, but resonate. <br></br>
                  Each project is more than a deliverable; it’s a statement,
                  leaving a meaningful imprint on the tech world and your vision
                  alike.
                </span>
              </div>
            </div>
            <div className="py-4 sm:mt-5 sm:p-0 md:p-8 w-full">
              <div className="mt-6 flex flex-col gap-4">
                <p className="text-md font-semibold">SOCIALS</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[120px] h-[50px] border rounded-xl flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[120px] h-[50px] border rounded-xl flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <FaLinkedin size={24} color="#0077B5" />
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[120px] h-[50px] border rounded-xl flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <FaInstagram size={24} color="#E1306C" />
                  </a>
                  <a
                    href="https://medium.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[120px] h-[50px] border rounded-xl flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <SiMedium size={24} />
                  </a>
                </div>
              </div>
            </div>
            {/* === Latest Project Section === */}
            <div className="py-4 sm:mt-5 sm:p-0 md:p-8 w-full">
              <h2 className="text-xl font-semibold mb-4">LATEST PROJECT</h2>

              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow">
                  <Image
                    src="/images/freshinsights-logo.png"
                    alt="Project"
                    width={1000}
                    height={500}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">
                      Grocery & E-commerce
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Flask Python Application
                    </p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      <span className="border px-3 py-1 rounded-full text-sm">
                        2025
                      </span>
                      <span className="border px-3 py-1 rounded-full text-sm">
                        Design
                      </span>
                      <span className="border px-3 py-1 rounded-full text-sm">
                        Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
