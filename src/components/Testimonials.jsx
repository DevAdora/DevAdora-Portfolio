import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonials from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getPosition = (cardIndex) => {
    const diff =
      (cardIndex - index + testimonials.length) % testimonials.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden relative px-6">
      <div className="py-5 text-[4rem] sm:text-[7rem] md:text-[7rem] lg:text-[7rem] xl:text-[8rem]">
        <h1 className="pb-5 leading-15 sm:leading-24 md:leading-24 lg:leading-24 xl:leading-24 2xl:leading-24">
          WORDS FROM OTHERS.
        </h1>
      </div>
      <div className="flex gap-4 mb-8">
        <button
          onClick={prev}
          className="p-3 rounded-full border-black border text-black hover:bg-black hover:text-white cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full border-black border text-black hover:bg-black hover:text-white  cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative flex w-full h-[500px] justify-center items-center">
        {testimonials.map((testimonials, i) => {
          const position = getPosition(i);

          const variants = {
            center: {
              x: 0,
              scale: 1.1,
              zIndex: 20,
              opacity: 1,
            },
            left: {
              x: "-90%",
              scale: 0.9,
              zIndex: 10,
              opacity: 0.6,
            },
            right: {
              x: "90%",
              scale: 0.9,
              zIndex: 10,
              opacity: 0.6,
            },
          };

          return (
            <motion.div
              key={testimonials.id}
              variants={variants}
              animate={position}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-[350px] md:w-[600px] h-[450px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-between p-6"
            >
              <img
                src={testimonials.image}
                alt={testimonials.name}
                className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover mb-4"
              />
              <p className="text-black text-center flex-1 text-black text-[0.8rem] md:text-[1rem] ">
                {testimonials.feedback}
              </p>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-xl text-black">
                  {testimonials.name}
                </h3>
                <p className="text-gray-500 text-black">
                  {testimonials.role}
                </p>
                <p className="italic text-gray-500 text-black text-[0.8rem]">
                  {testimonials.skill}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
