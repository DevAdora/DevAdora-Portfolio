import Image from 'next/image';

const About = () => {
  return (
    <div className="about bg-dark-black text-white-dove h-screen">
      <div className="flex justify-center items-center h-full px-8">
        {/* Left Image Section */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-[400px] h-[600px] flex justify-center items-center">
            <Image
              src="/images/DevAdora.png"
              alt="About DevAdora"
              width={400}
              height={600}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-1/2 h-full flex flex-col justify-center">
          <div className="p-8">
          <h1 className="font-bold flex-wrap text-[1rem] sm:text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem]">
              FREELANCE, DEVELOPER
            </h1>
          </div>
          <div className="flex justify-end items-end text-white-dove p-8 w-full">
            <div className="flex w-full md:w-[100%] text-right">
              <p className="p-1 w-[100%]">(ABOUT ME)</p>
              <span className="text-2xl">
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
