import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden relative px-6 ">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="relative flex flex-col items-center justify-center text-center">
          <h1 className="font-serif italic text-[2.5rem] sm:text-[2.5rem] md:text-[5rem] lg:text-[6rem] leading-12 md:leading-20 lg:leading-20">
            “Here are <span className="font-semibold">some</span>
            <InlineImage
              src="/images/Goranow Designs.svg"
              alt="Goranow Designs"
              className="h-[100%] w-[100%]"
            />
            &nbsp;statements from clients, or{" "}
            <span className="font-semibold">other</span>
            <InlineImage src="/images/Siren.png" alt="Siren" />
            &nbsp;individuals that describe their good experiences with{" "}
            <span className="font-semibold">me</span>
            <InlineImage src="/images/hr-image.png" alt="HR" />”
          </h1>
        </div>

        <p className="mt-4 text-gray-500 text-center italic text-sm sm:text-base">
          Insights and reflections from those who’ve experienced our work.
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          onClick={prev}
          className="p-3 rounded-full border-gray-400 border text-gray-700 hover:bg-gray-800 hover:text-white cursor-pointer transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full border-gray-400 border text-gray-700 hover:bg-gray-800 hover:text-white cursor-pointer transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative flex w-full h-[500px] justify-center items-center">
        {testimonials.map((testimonial, i) => {
          const position = getPosition(i);

          const variants = {
            center: {
              x: 0,
              scale: 1.05,
              zIndex: 20,
              opacity: 1,
            },
            left: {
              x: "-90%",
              scale: 0.9,
              zIndex: 10,
              opacity: 0.5,
            },
            right: {
              x: "90%",
              scale: 0.9,
              zIndex: 10,
              opacity: 0.5,
            },
          };

          return (
            <motion.div
              key={testimonial.id}
              variants={variants}
              animate={position}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-[350px] md:w-[600px] h-[450px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-between p-8"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border border-gray-200 shadow-sm"
              />
              <p className="text-gray-700 text-center italic flex-1 text-[0.9rem] md:text-[1.1rem] leading-relaxed">
                “{testimonial.feedback}”
              </p>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                <p className="italic text-gray-400 text-[0.8rem]">
                  {testimonial.skill}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function InlineImage({ src, alt }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-flex items-baseline align-middle mx-2 relative xl:h[80%] xl:w-[80%]"
      style={{
        height: "1em",
        width: "2em", 
        verticalAlign: "text-bottom",
        cursor: hovered ? `url(${src}) 16 16, auto` : "auto",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          opacity: hovered ? 1 : 0.85, 
          transition: "opacity 0.2s ease-in-out",
        }}
      />
    </span>
  );
}
