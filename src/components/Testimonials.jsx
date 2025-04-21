import { useState } from "react";
import Image from "next/image";
import testimonialsData from "@/data/testimonials"; // this will hold your testimonials in a JS array

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = testimonialsData.length;

  const changeTestimonial = (direction) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return totalPages - 1;
      if (newIndex >= totalPages) return 0;
      return newIndex;
    });
  };

  const { image, text, name, role, skill } = testimonialsData[currentIndex];

  return (
    <div className="bg-white-dove w-full overflow-hidden mb-4">
      <div className="text-dark-black border-b border-dark-black  m-8">
        <div className="py-5 text-[4rem] sm:text-[7rem] md:text-[7rem] lg:text-[7rem] xl:text-[8rem]">
          <h1 className="pb-5 leading-15 sm:leading-24 md:leading-24 lg:leading-24 xl:leading-24 2xl:leading-24">
            WORDS FROM OTHERS.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row text-dark-black p-0 sm:p-0 w-full mb-8">
          <span className="text-left text-xl md:w-1/2 ">
            Here’s what my clients say about our collaboration. Their
            satisfaction and meeting expectations are my top priorities,
            ensuring the best experience possible.
          </span>
          <p className="pt-1 ml-0 sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10">
            (TESTIMONIALS)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-8 transition-all ease-in-out duration-500 min-h-[100%]">
        <div className="w-full h-[500px] flex justify-center items-center overflow-hidden">
          <Image
            src={image}
            alt="testimonial image"
            width={400}
            height={500}
            className="object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col justify-between md:px-4">
          <div className="text-dark-black text-[1.5rem] mt-10 sm:mt-10 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 leading-7 sm:leading-10 md:leading-10 lg:leading-10 xl:leading-10 2xl:leading-10 sm:text-[1.8rem] md:text-[1.8rem] lg:text-[3rem] xl:text-[3rem]   2xl:text-[3rem] text-right sm:text-center">
            <p>'{text}'</p>
          </div>

          <div className="justify-between items-center">
            <div className="mb-10 text-right">
              <p className="text-lg font-semibold">{name}</p>
              <div className="flex justify-end items-end gap-4 mt-4">
                <p className="border border-dark-black text-dark-black px-4 py-2 rounded-full text-sm">
                  {role}
                </p>
                <p className="border border-dark-black text-dark-black px-4 py-2 rounded-full text-sm">
                  {skill}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-dark-black text-lg">
                <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                <span className="mx-2">/</span>
                <span>{String(totalPages).padStart(2, "0")}</span>
              </div>
              <div>
                <button
                  className="white-btn text-white-dove px-4 py-2 rounded-full mx-2 hover:bg-white-dove hover:text-dark-black border border-dark-black transition-colors cursor-pointer"
                  onClick={() => changeTestimonial(-1)}
                >
                  Prev
                </button>
                <button
                  className="white-btn text-white-dove px-4 py-2 rounded-full mx-2 hover:bg-white-dove hover:text-dark-black border border-dark-black transition-colors cursor-pointer"
                  onClick={() => changeTestimonial(1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
