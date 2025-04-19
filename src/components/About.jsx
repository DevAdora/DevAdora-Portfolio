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
            <div className="sm:w-[100%] md:w-[100%] text-left text-light-dark">
              <span className="text-light-dark text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem]leading-relaxed sm:w-[50%] md:w-[50%]">
                Ar-ar Reyes, the mind behind DevAdora, is a multifaceted
                freelancer, developer, and designer devoted to transforming bold
                ideas into impactful digital realities. With a seamless
                end-to-end process and a sharp eye for detail, Ar-ar bridges
                imagination and innovation—crafting solutions that don’t just
                function, but resonate.
              </span>
            </div>
          </div>
          <div className="p-4 md:p-8 w-full">
            <div className="about-desc sm:w-[70%] md:w-[70%] text-left text-white-dove">
              <p className="text-left mb-4">(ABOUT ME)</p>
              <span className="text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] leading-relaxed sm:w-[50%] md:w-[50%]">
                Each project is more than a deliverable; it’s a statement,
                leaving a meaningful imprint on the tech world and your vision
                alike.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
