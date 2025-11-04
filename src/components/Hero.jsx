"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NewArrivals() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* === DESKTOP VIEW (≥1024px) === */}
      <div className="hidden lg:flex relative w-full h-full items-center justify-center">
        {/* === Filled Text === */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {" "}
          <h1 className="font-semibold uppercase text-[#0a0a09] leading-none text-center text-[8rem] md:text[10rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[18rem]">
            {" "}
            DEV <br /> ADORA{" "}
          </h1>{" "}
        </div>{" "}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
          {" "}
          <h1
            className="font-semibold uppercase text-transparent leading-none text-center text-[8rem] md:text[10rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[18rem]"
            style={{ WebkitTextStroke: "2px #0a0a09" }}
          >
            {" "}
            DEV <br /> ADORA{" "}
          </h1>{" "}
        </div>
        {/* === Left Image === */}
        <div className="absolute top-[20%] left-[10%] rotate-[-10deg] z-30">
          <div className="relative">
            <img
              src="/images/devadora-image.png"
              alt="Model Left"
              className="object-cover rounded-lg w-[180px] lg:w-[220px] xl:w-[280px] 2xl:w-[350px]"
            />
            {/* Heart icon */}
            <div className="absolute top-2 left-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
              <span className="text-red-500 text-lg">♥</span>
            </div>
            {/* Gradient overlay outline */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                mixBlendMode: "multiply",
                background:
                  "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 70%)",
              }}
            />
          </div>
        </div>
        {/* === Right Image === */}
        <div className="absolute top-[30%] right-[10%] rotate-[8deg] z-30">
          <div className="relative">
            <img
              src="/images/devadora-image.png"
              alt="Model Right"
              className="object-cover rounded-lg w-[180px] lg:w-[220px] xl:w-[280px] 2xl:w-[350px]"
            />
            {/* Tag icon */}
            <div className="absolute -top-3 right-2 bg-[#FF5733] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white rotate-[10deg]">
              ♥
            </div>
            {/* Gradient overlay outline */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                mixBlendMode: "multiply",
                background:
                  "linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.2) 70%)",
              }}
            />
          </div>
        </div>
        {/* === Buttons === */}
        <div className="absolute top-[25%] right-[15%] z-40">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all border border-white">
            🔥 SOFTWARE DEVELOPER
          </button>
        </div>
        <div className="absolute top-[60%] left-[15%] z-40">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all border border-white">
            🔥 FREELANCER
          </button>
        </div>
        {/* === Description === */}
        <div className="absolute bottom-[8%] left-[10%] z-40 max-w-md">
          <p className="text-white text-sm lg:text-base leading-relaxed bg-black/40 p-4 rounded-lg backdrop-blur-sm border border-white/20">
            A software developer & freelancer from the Philippines. I help
            brands and startups build premium, results-driven websites.
          </p>
        </div>
      </div>

      {/* === MOBILE & TABLET (<1024px) === */}
      <div className="flex lg:hidden flex-col items-start justify-start text-left px-6 py-10 min-h-screen relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] leading-none tracking-tight">
            DEVADORA<span className="ml-2">©</span>
          </h1>
        </motion.div>

        <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] mt-6 max-w-md">
          An aspiring freelance software developer & web designer from the
          Philippines. I help brands and startups build premium, results-driven
          websites.
        </p>

        {/* === Mobile/Tablet Buttons === */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-5 py-3 rounded-full shadow-lg hover:scale-105 transition">
            🔥 SOFTWARE DEVELOPER
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-5 py-3 rounded-full shadow-lg hover:scale-105 transition">
            🔥 FREELANCER
          </button>
        </div>

        {/* === Mobile Image with outline === */}
        <div className="absolute bottom-8 left-6 sm:right-6 sm:left-auto">
          <div className="relative">
            <Image
              src="/images/devadora-image.png"
              width={200}
              height={200}
              alt="DevAdora"
              className="rounded-md shadow-lg"
            />
            <div
              className="absolute inset-0 rounded-md"
              style={{
                mixBlendMode: "multiply",
                background:
                  "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
