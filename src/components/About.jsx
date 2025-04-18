import Image from "next/image";

const About = () => {
  return (
    <div className="about bg-dark-black text-white-dove min-h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center h-full px-4 md:px-8 py-8">
        {/* Mobile: Title on top */}
        <div className="block md:hidden w-full text-center mb-4">
          <h1 className="text-left text-[6rem] leading-24">
            FREELANCE, DEVELOPER
          </h1>
        </div>

        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <div className="w-full sm:w-[100%] md:w-[100%] h-auto">
            <Image
              src="/images/devadora-image.png"
              alt="About DevAdora"
              width={400}
              height={600}
              className="object-contain w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Desktop: Title on right */}
          <div className="hidden md:block w-90%] p-4 md:p-8  flex-wrap overflow-hidden">
            <h1 className="font-bold flex-wrap text-[1rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[6rem] ">
              FREELANCE, DEVELOPER
            </h1>
          </div>

          {/* Description */}
          <div className="about-header p-4 md:p-8 w-full">
            <div className="sm:w-[80%] md:w-[70%] text-left text-light-dark">
              <span className="text-light-dark text-lg sm:text-2xl md:text-2xl leading-relaxed sm:w-[50%] md:w-[50%]">
                Mostly of my side projects, I do the designing. UI/UX designing
                is not my forte, but you could trust to give you the best colors
                that are pleasing to the naked eye.
              </span>
            </div>
          </div>
          <div className="p-4 md:p-8 w-full">
            <div className="about-desc sm:w-[60%] md:w-[60%] text-left text-white-dove">
              <p className="text-left mb-4">(ABOUT ME)</p>
              <span className="text-lg sm:text-xl md:text-2xl leading-relaxed sm:w-[50%] md:w-[50%]">
                Mostly of my side projects, I do the designing. UI/UX designing
                is not my forte, but you could trust to give you the best colors
                that are pleasing to the naked eye.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
