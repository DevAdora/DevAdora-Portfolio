import { useState } from 'react';
import Image from 'next/image';
import testimonialsData from '@/data/testimonials'; // this will hold your testimonials in a JS array

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
    <div className="bg-white-dove w-full overflow-hidden">
      <div className="text-dark-black border-b border-dark-black m-8">
        <div className="py-5 text-[7rem]">
          <h1 className="pb-5">WORDS FROM OTHERS.</h1>
        </div>
        <div className="flex flex-col md:flex-row text-dark-black p-8 w-full">
          <span className="text-left text-xl md:w-1/2">
            Here’s what my clients say about our collaboration. Their
            satisfaction and meeting expectations are my top priorities,
            ensuring the best experience possible.
          </span>
          <p className="pt-2">(TESTIMONIALS)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-8 transition-all ease-in-out duration-500 min-h-[600px]">
      <div className="w-full h-[500px] flex justify-center items-center overflow-hidden">
  <Image
    src={image}
    alt="testimonial image"
    width={400}
    height={500}
    className="object-contain hover:scale-110 transition-transform duration-300"
  />
</div>

        <div className="flex flex-col justify-between ">
          <div className="text-dark-black text-xl leading-relaxed text-justify">
            <p>'{text}'</p>
          </div>

          <div className="mt-10 text-right">
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

          <div className="flex justify-between items-center mt-8">
            <div className="text-dark-black text-lg">
              <span>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">---------</span>
              <span>{String(totalPages).padStart(2, '0')}</span>
            </div>
            <div>
              <button
                className="bg-dark-black text-white-dove px-4 py-2 rounded-full mx-2 hover:bg-white-dove hover:text-dark-black border border-dark-black transition-colors cursor-pointer"
                onClick={() => changeTestimonial(-1)}
              >
                Prev
              </button>
              <button
                className="bg-dark-black text-white-dove px-4 py-2 rounded-full mx-2 hover:bg-white-dove hover:text-dark-black border border-dark-black transition-colors cursor-pointer"
                onClick={() => changeTestimonial(1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
