import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1000);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about bg-dark-black text-white-dove min-h-screen p-8">
      {/* Title Section */}
      <div
        className={`w-full ${isMobileView ? "text-left mb-8" : "hidden"} px-2`}
      >
        <h1 className="text-[3.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[6rem] xl:text-[6rem] leading-none">
          FREELANCE, DEVELOPER
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center h-full px-0">
        {/* Image Section - 35% */}
        <div className="w-full md:w-[35%] flex justify-center items-center mb-8 md:mb-0 ">
          <div className="w-full h-auto">
            <Image
              src="/images/devadora-image.png"
              alt="About DevAdora"
              width={400}
              height={600}
              className="object-contain w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Text Section - 65% */}
        <div className="w-full md:w-[65%] flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Desktop Title (on right side) */}
          {!isMobileView && (
            <div className="w-full p-4 md:p-8">
              <h1 className="font-bold text-[3.5rem] sm:text-[6rem] md:text-[6rem] lg:text-[6rem] xl:text-[6rem] leading-none">
                FREELANCE, DEVELOPER
              </h1>
            </div>
          )}

          {/* Description */}
          <div className="about-header p-0 sm:p-0 md:p-8 w-full">
            <div className="text-left text-light-dark">
              <span className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] leading-8">
                Ar-ar Reyes, the mind behind DevAdora, is a multifaceted
                freelancer, developer, and designer devoted to transforming bold
                ideas into impactful digital realities.
              </span>
            </div>
          </div>

          <div className="py-4 sm:mt-5 sm:p-0 md:p-8 w-full">
            <div className="about-desc text-left text-white-dove">
              <p className="mb-4">(ABOUT ME)</p>
              <span className="text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] leading-5">
                With a seamless end-to-end process and a sharp eye for detail,
                Ar-ar bridges imagination and innovation—crafting solutions that
                don’t just function, but resonate. <br></br>
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
