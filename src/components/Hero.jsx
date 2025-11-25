"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-auto min-h-screen overflow-hidden flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
        {/* LEFT IMAGE */}
        <div className="w-full h-full flex justify-center items-center md:p-5 md:p-0">
          <Image
            src="/images/devadora-image.png"
            width={600}
            height={600}
            alt="DevAdora"
            className="w-[100%] md:w-[90%] h-[80%] md:h-[100%] max-w-[700px] md:max-w-[700px] lg:max-w-[650px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full h-full flex justify-center md:justify-start items-center">
          <div className="p-6 md:p-10 lg:p-16">
            {/* TITLE */}
            <h1
              className="font-bold text-[2.8rem] leading-tight 
                           md:text-[4rem] lg:text-[5rem]"
            >
              Software Developer
            </h1>

            {/* SUBTEXT */}
            <div className="py-5">
              <span className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem] text-[#686662] leading-relaxed">
                Rai Here! <br />
                The one who bridges imagination and innovation—crafting
                solutions that don’t just function, but resonate.
              </span>
            </div>

            {/* UNDERLINE ANIMATION */}
            <span
              className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] cursor-pointer font-medium
                         transition-all duration-300 ease-in-out
                         relative inline-block
                         after:content-[''] after:absolute after:left-0 after:bottom-0
                         after:h-[2px] after:w-full after:bg-black
                         after:transition-all after:duration-300
                         hover:after:w-0 hover:font-semibold"
            >
              Get in touch ↘
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
