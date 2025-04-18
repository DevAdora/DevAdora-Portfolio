"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main id="home" className="w-full">
      {/* === Desktop View (md and up) === */}
      <div className="hidden md:flex flex-col items-center justify-center text-center">
        <motion.div
          className="h-full text-dark-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex w-full text-center justify-center">
            <h1 className="font-bold flex-wrap text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem]">
              DEVADORA
            </h1>
            <span className="flex-wrap text-[4rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[7rem]">
              ©
            </span>
          </div>
        </motion.div>

        <div className="flex justify-between items-center h-full w-full mb-[7.5%]">
          {/* Quote Left */}
          <div className="flex items-right justify-end gap-[10px] w-1/3">
            <div className="w-4/5 items-center justify-center tracking-[1.4px] leading-[1.4]">
              <h3 className="text-dark-black text-right text-[1rem] xl:text-[1.2rem]">
                An aspiring freelance software developer & web designer from the
                Philippines. I help brands and startups build premium,
                results-driven websites.{" "}
              </h3>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[325px] ml-8">
            <Image
              src="/images/devadora-image.png"
              width={400}
              height={500}
              alt="DevAdora Portrait"
              className="w-full h-auto"
            />
          </div>

          {/* Contact Button Right */}
          <div className="flex justify-center items-center h-full w-1/3">
            <div>
              <Link
                href="#contact"
                className="hero-btn bg-dark-black text-white-dove text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] no-underline p-4 rounded-[45px]"
              >
                BOOK A CALL ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* === Mobile / Tablet View (<768px) === */}
      <div className="flex md:hidden flex-col items-start justify-start text-left px-6 py-8 min-h-screen relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-[3.5rem] leading-none sm:text-[6rem] tracking-tight flex-wrap">
            DEVADORA<span className="ml-2">©</span>
          </h1>
        </motion.div>

        <p className="text-[1rem] mt-6 max-w-md text-gray-600">
          An aspiring freelance software developer & web designer from the
          Philippines. I help brands and startups build premium, results-driven
          websites.
        </p>

        {/* Bottom-Left Image */}
        <div className="absolute bottom-6 left-6">
          <Image
            src="/images/devadora-image.png"
            width={250}
            height={250}
            alt="DevAdora"
            className="rounded-md"
          />
        </div>

        {/* Bottom-Right Info */}
        <div className="absolute bottom-6 right-6 text-right text-xs">
          <div className="mt-6">
            <Link
              href="#contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-medium tracking-wide"
            >
              BOOK A CALL ↗
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
