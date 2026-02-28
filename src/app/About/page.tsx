"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const education = [
    {
      level: "College",
      school: "Southland College",
      years: "2021 - 2025",
      description: "Bachelor of Science in Information Technology",
    },
    {
      level: "Senior High School",
      school: "Southland College",
      years: "2019 - 2021",
      description: "STEM Strand",
    },
    {
      level: "Junior High School",
      school: "Southland College",
      years: "2015 - 2019",
      description: "Went to Southland College for Junior High School",
    },
    {
      level: "Elementary",
      school: "Southland College",
      years: "2009 - 2015",
      description: "Went to Southland College for Elementary",
    },
  ];

  const experience = [
    {
      position: "Freelance Full-Stack Developer",
      company: "Cognito | Nechama",
      timeframe: "Jun 2024 - Present",
    },
    {
      position: "Freelance Web Application Developer",
      company: "Cognito",
      timeframe: "May 2025 - Aug 2025",
    },
    {
      position: "Freelance Mobile Application Developer",
      company: "Cognito",
      timeframe: "Nov 2024 - Jan 2025",
    },
    {
      position: "Freelance WordPress Developer",
      company: "Cognito",
      timeframe: "Nov 2024 - Jan 2025",
    },
    {
      position: "Full-stack Developer Intern",
      company: "Spring Valley Tech Corp",
      timeframe: "Apr 2025 - Jun 2025",
    },
    {
      position: "Frontend Developer Intern",
      company: "Spring Valley Tech Corp",
      timeframe: "Apr 2025 - Apr 2025",
    },
    {
      position: "Cloud Engineer Intern",
      company: "Spring Valley Tech Corp",
      timeframe: "Mar 2025 - Apr 2025",
    },
    {
      position: "Software Developer Intern",
      company: "Spring Valley Tech Corp",
      timeframe: "Feb 2025 - Mar 2025",
    },
    {
      position: "Software Developer",
      company: "Kabankalan Community Antenna Television System (K-CAT), Inc.",
      timeframe: "Oct 2025 - Present",
    },
  ];

  const achievements = [
    {
      title: "Latin Honors",
      year: "2025",
      description: "Graduate with Cum Laude in Southland College.",
      place: "Southland College",
    },
    {
      title: "Dean's Lister",
      year: "2021 - 2024",
      description: "Consistently achieved Dean's List recognition.",
      place: "Southland College",
    },
    {
      title: "Class Honor",
      year: "2021",
      description: "Achieved class honor during freshman year.",
      place: "Southland College",
    },
    {
      title: "Deparment Honors",
      year: "2022 - 2024",
      description:
        "Achieved department honor during sophomore and junior year.",
      place: "Southland College",
    },

    {
      title: "FBC Interschool Web Design Competition",
      year: "2025",
      description:
        "Won championship in the FBC Interschool Web Design Competition.",
      place: "Champion",
    },

    {
      title: "SECSA Week 2024 Web Design Competition",
      year: "2024",
      description: "Place 2nd in the SECSA Week 2024 Web Design Competition.",
      place: "2nd Place",
    },

    {
      title: "SECSA Week 2025 Web Development Sprint",
      year: "2025",
      description:
        "Won 1st place in the SECSA Week 2025 Web Development Sprint.",
      place: "1st Place and Best in Design",
    },

    {
      title: "Southland College IT Day 2024 Web Design Competition",
      year: "2024",
      description:
        "Won championship in the Southland College IT Day 2024 Web Design Competition.",
      place: "Champion",
    },
    {
      title: "WVSU Interschool Web Design Competition",
      year: "2023",
      description:
        "Won championship in the WVSU Interschool Web Design Competition.",
      place: "Champion",
    },
    {
      title: "PITCHUP: Social Solution Challenge",
      year: "2025",
      description: "Top 4 in the PITCHUP: Social Solution Challenge.",
      place: "4th Place",
    },
    {
      title: "Exemplary Awards for Technology Innovation",
      year: "2025",
      description:
        "Won Exemplary Awards for Technology Innovation during the commencement exercise of Southland College",
      place: "Southland College",
    },
  ];

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Header />

      <section className="min-h-screen px-[5%] py-12 bg-[#000000] text-[#f0ede4]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 md:sticky top-20 self-start">
            <Image
              src="/images/me-1.jpg"
              width={300}
              height={300}
              alt="DevAdora"
              className="rounded-[10%] mx-auto md:mx-0"
              style={{
              filter: "grayscale(60%) brightness(1) contrast(1.1)",
            }}
            />
            <div className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] leading-7 sm:leading-10 md:leading-10 lg:leading-10 xl:leading-10 text-center md:text-left mt-4">
              <h1>DevAdora (Rai M. Reyes Jr.)</h1>
            </div>
            <div className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] leading-5 sm:leading-7 md:leading-7 lg:leading-7 xl:leading-7 text-center md:text-left mt-4">
              <h1>
                Aspiring Software Developer 👩🏻‍💻 and currently a freelancer{" "}
                {"</>"} based in Philippines 📍.
              </h1>
            </div>
            <div className="mt-8 flex flex-col justify-center items-center md:justify-start md:items-start">
              <p className="text-md font-semibold mb-2">RESUME & CV</p>
              <div className="flex gap-4">
                <a
                  href="/Rai M. Reyes Jr - Resume.pdf"
                  target="_blank"
                  className="bg-[#f0ede4] text-black px-4 py-2 rounded-md hover:opacity-80"
                >
                  View
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="border px-4 py-2 rounded-md hover:bg-gray-100 hover:text-black"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="p-0 sm:p-0 md:p-8 w-full">
              <div className="text-left ">
                <span className="text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] leading-8">
                  Ar-ar Reyes, the mind behind DevAdora, is a multifaceted
                  freelancer, developer, and designer devoted to transforming
                  bold ideas into impactful digital realities.
                </span>
              </div>
            </div>
            <div className="py-4 sm:mt-5 sm:p-0 md:p-8 w-full">
              <div className="text-left ">
                <p className="mb-4">(ABOUT ME)</p>
                <span className="text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] leading-5">
                  With a seamless end-to-end process and a sharp eye for detail,
                  Ar-ar bridges imagination and innovation—crafting solutions
                  that don’t just function, but resonate. <br></br>
                  Each project is more than a deliverable; it’s a statement,
                  leaving a meaningful imprint on the tech world and your vision
                  alike.
                </span>
              </div>
            </div>
            <div className="p-0 sm:p-0 md:p-8 w-full ">
              <div>
                <h2 className="text-xl font-semibold mb-6">EDUCATION</h2>

                <div className="relative border-l-2 border-gray-400">
                  {education.map((item, index) => (
                    <div key={index} className="mb-10 ml-6">
                      <div className="absolute -left-3.5 w-6 h-6 bg-[#f0ede4] rounded-full border-2 "></div>
                      <h3 className="text-lg font-semibold">{item.level}</h3>
                      <p className="text-sm text-white-600">{item.school}</p>
                      <p className="text-sm text-white-500">{item.years}</p>
                      {item.description && (
                        <p className="text-sm text-white-700 mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-0 sm:p-0 md:p-8 w-full ">
              <h2 className="text-xl font-semibold mb-6">ACHIEVEMENTS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                  <div key={index} className="">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-white-600">{item.year}</p>
                    <p className="text-sm text-white-500">{item.place}</p>
                    {item.description && (
                      <p className="text-sm text-white-700 mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-0 sm:p-0 md:p-8 w-full ">
              <h2 className="text-xl font-semibold mb-6">WORK EXPERIENCES</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {experience.map((item, index) => (
                  <div key={index} className="">
                    <h3 className="text-lg font-semibold">{item.position}</h3>
                    <p className="text-sm text-white-600">{item.company}</p>
                    <p className="text-sm text-white-500">{item.timeframe}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
