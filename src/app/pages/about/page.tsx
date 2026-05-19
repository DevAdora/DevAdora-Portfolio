"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import { useState, useEffect } from "react";

/* ── Reusable Modal ── */
function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* about-modal picks up theme overrides from globals.css */}
      <div className="about-modal relative z-10 w-full max-w-4xl max-h-[85vh] bg-[#000000] border border-[#f0ede4]/10 rounded-2xl flex flex-col shadow-2xl">
        <div className="about-modal-header flex items-center justify-between px-6 py-5 border-b border-[#f0ede4]/10 shrink-0">
          <h2 className="about-modal-title text-sm font-semibold tracking-[0.2em] uppercase text-[#f0ede4]">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="about-modal-close text-[#f0ede4]/50 hover:text-[#f0ede4] transition-colors p-1"
            aria-label="Close modal"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-6 py-6">{children}</div>
      </div>
    </div>
  );
}

function parseYear(str: string): number {
  const matches = str.match(/\d{4}/g);
  if (!matches) return 0;
  return Math.max(...matches.map(Number));
}

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const education = [
    { level: "College",           school: "Southland College", years: "2021 - 2025", description: "Bachelor of Science in Information Technology" },
    { level: "Senior High School",school: "Southland College", years: "2019 - 2021", description: "STEM Strand" },
    { level: "Junior High School",school: "Southland College", years: "2015 - 2019", description: "Went to Southland College for Junior High School" },
    { level: "Elementary",        school: "Southland College", years: "2009 - 2015", description: "Went to Southland College for Elementary" },
  ];

  const achievementsRaw = [
    { title: "Latin Honors",                              year: "2025",      description: "Graduated with Cum Laude in Southland College, and achieved Top 3 Overall academic rankings.", place: "Southland College" },
    { title: "Dean's Lister",                            year: "2021 - 2024",description: "Consistently achieved Dean's List recognition.",                                               place: "Southland College" },
    { title: "Class Honor",                              year: "2021",      description: "Achieved class honor during freshman year.",                                                     place: "Southland College" },
    { title: "Department Honors",                        year: "2022 - 2024",description: "Achieved department honor during sophomore and junior year.",                                    place: "Southland College" },
    { title: "FBC Interschool Web Design Competition",   year: "2025",      description: "Won championship in the FBC Interschool Web Design Competition.",                               place: "Champion" },
    { title: "SECSA Week 2024 Web Design Competition",   year: "2024",      description: "Place 2nd in the SECSA Week 2024 Web Design Competition.",                                      place: "2nd Place" },
    { title: "SECSA Week 2025 Web Development Sprint",   year: "2025",      description: "Won 1st place in the SECSA Week 2025 Web Development Sprint.",                                  place: "1st Place and Best in Design" },
    { title: "SC IT Day 2024 Web Design Competition",    year: "2024",      description: "Won championship in the Southland College IT Day 2024 Web Design Competition.",                 place: "Champion" },
    { title: "WVSU Interschool Web Design Competition",  year: "2023",      description: "Won championship in the WVSU Interschool Web Design Competition.",                              place: "Champion" },
    { title: "PITCHUP: Social Solution Challenge",       year: "2025",      description: "Top 4 in the PITCHUP: Social Solution Challenge.",                                             place: "4th Place" },
    { title: "Exemplary Awards for Technology Innovation",year: "2025",     description: "Won Exemplary Awards for Technology Innovation during the commencement exercise.",              place: "Southland College" },
  ];

  const experienceRaw = [
    { position: "Software Developer",                   company: "Kabankalan Community Antenna Television System (K-CAT), Inc.", timeframe: "Oct 2025 - Present" },
    { position: "Freelance Full-Stack Developer",       company: "Cognito | Nechama",        timeframe: "Jun 2024 - Present" },
    { position: "Freelance Framer Developer",           company: "Nechama",                  timeframe: "Jan 2025 - Present" },
    { position: "Freelance Desktop App Developer",      company: "Cognito",                  timeframe: "Nov 2025 - Feb 2026" },
    { position: "Freelance Web App Developer",          company: "Cognito",                  timeframe: "May 2025 - Aug 2025" },
    { position: "Freelance Mobile App Developer",       company: "Cognito",                  timeframe: "Nov 2024 - Jan 2025" },
    { position: "Freelance WordPress Developer",        company: "Cognito",                  timeframe: "Nov 2024 - Jan 2025" },
    { position: "Full-stack Developer Intern",          company: "Spring Valley Tech Corp",  timeframe: "Apr 2025 - Jun 2025" },
    { position: "Frontend Developer Intern",            company: "Spring Valley Tech Corp",  timeframe: "Apr 2025 - Apr 2025" },
    { position: "Cloud Engineer Intern",                company: "Spring Valley Tech Corp",  timeframe: "Mar 2025 - Apr 2025" },
    { position: "Software Developer Intern",            company: "Spring Valley Tech Corp",  timeframe: "Feb 2025 - Mar 2025" },
  ];

  const achievements = [...achievementsRaw].sort((a, b) => parseYear(b.year) - parseYear(a.year));
  const experience   = [...experienceRaw].sort((a, b) => parseYear(b.timeframe) - parseYear(a.timeframe));

  const PREVIEW_COUNT      = 4;
  const achievementsPreview = achievements.slice(0, PREVIEW_COUNT);
  const experiencePreview   = experience.slice(0, PREVIEW_COUNT);
  const remainingAchievements = achievements.length - PREVIEW_COUNT;
  const remainingExperience   = experience.length - PREVIEW_COUNT;

  /* ── Cards — add about-card class for theme targeting ── */
  const AchievementCard = ({ item }: { item: (typeof achievements)[0] }) => (
    <div className="about-card flex flex-col gap-1 p-4 border border-[#f0ede4]/10 rounded-xl hover:border-[#f0ede4]/25 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <h3 className="about-card-title text-sm font-semibold leading-snug text-[#f0ede4]">{item.title}</h3>
        <span className="about-card-muted text-[10px] text-[#f0ede4]/40 tracking-widest shrink-0 mt-0.5 uppercase">{item.year}</span>
      </div>
      <span className="about-card-sub text-[11px] font-medium text-[#f0ede4]/50 tracking-wide uppercase">{item.place}</span>
      <p className="about-card-body text-xs text-[#f0ede4]/60 leading-relaxed mt-1">{item.description}</p>
    </div>
  );

  const ExperienceCard = ({ item }: { item: (typeof experience)[0] }) => (
    <div className="about-card flex flex-col gap-1 p-4 border border-[#f0ede4]/10 rounded-xl hover:border-[#f0ede4]/25 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <h3 className="about-card-title text-sm font-semibold leading-snug text-[#f0ede4]">{item.position}</h3>
        <span className="about-card-muted text-[10px] text-[#f0ede4]/40 tracking-wide shrink-0 mt-0.5 whitespace-nowrap">{item.timeframe}</span>
      </div>
      <p className="about-card-body text-xs text-[#f0ede4]/60 leading-relaxed">{item.company}</p>
    </div>
  );

  const ViewAllButton = ({ count, onClick }: { count: number; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="about-view-all w-full mt-4 py-3 rounded-xl border border-[#f0ede4]/15 text-[#f0ede4]/60 text-xs tracking-widest uppercase hover:border-[#f0ede4]/35 hover:text-[#f0ede4] transition-all duration-200 flex items-center justify-center gap-2"
    >
      <span>View {count} more</span>
      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Header overlayHero={false} />

      {/* about-page-section = CSS hook for theme overrides in globals.css */}
      <section className="about-page-section min-h-screen px-[5%] py-12 bg-[#000000] text-[#f0ede4]">
        <div className="flex flex-col md:flex-row gap-8">

          {/* ── Sticky sidebar ── */}
          <div className="md:w-1/3 md:sticky top-20 self-start">
            <Image
              src="/images/me-1.jpg"
              width={300}
              height={300}
              alt="DevAdora"
              className="rounded-[10%] mx-auto md:mx-0"
              style={{ filter: "grayscale(60%) brightness(1) contrast(1.1)" }}
            />
            <div className="about-name text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] leading-7 sm:leading-10 text-center md:text-left mt-4">
              <h1>DevAdora (Rai M. Reyes Jr.)</h1>
            </div>
            <div className="about-bio text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] leading-5 sm:leading-7 text-center md:text-left mt-4">
              <h1>
                Aspiring Software Developer 👩🏻‍💻 and currently a freelancer{" "}
                {"</>"} based in Philippines 📍.
              </h1>
            </div>

            <div className="mt-8 flex flex-col justify-center items-center md:justify-start md:items-start">
              <p className="about-label text-md font-semibold mb-2">RESUME & CV</p>
              <div className="flex gap-4">
                <a
                  href="/Rai M. Reyes Jr. - Resume.pdf"
                  target="_blank"
                  className="about-resume-view bg-[#f0ede4] text-black px-4 py-2 rounded-md hover:opacity-80 transition-opacity"
                >
                  View
                </a>
                <a
                  href="/Rai M. Reyes Jr. - Resume.pdf"
                  download
                  className="about-resume-dl border border-[#f0ede4]/30 px-4 py-2 rounded-md hover:bg-[#f0ede4] hover:text-black transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* ── Main content ── */}
          <div className="md:w-2/3">
            <div className="p-0 sm:p-0 md:p-8 w-full">
              <span className="about-intro text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] leading-8">
                Ar-ar Reyes, the mind behind DevAdora, is a multifaceted
                freelancer, developer, and designer devoted to transforming bold
                ideas into impactful digital realities.
              </span>
            </div>

            <div className="py-4 sm:mt-5 sm:p-0 md:p-8 w-full">
              <p className="about-label mb-4">(ABOUT ME)</p>
              <span className="about-body text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] leading-5">
                With a seamless end-to-end process and a sharp eye for detail,
                Ar-ar bridges imagination and innovation—crafting solutions that
                don't just function, but resonate. Each project is more than a
                deliverable; it's a statement, leaving a meaningful imprint on
                the tech world and your vision alike.
              </span>
            </div>

            {/* Education */}
            <div className="p-0 sm:p-0 md:p-8 w-full">
              <h2 className="about-section-heading text-xl font-semibold mb-6">EDUCATION</h2>
              <div className="about-timeline relative border-l-2 border-gray-400">
                {education.map((item, index) => (
                  <div key={index} className="mb-10 ml-6 relative">
                    <div className="about-timeline-dot absolute -left-[34px] w-6 h-6 bg-[#f0ede4] rounded-full border-2" />
                    <h3 className="about-card-title text-lg font-semibold">{item.level}</h3>
                    <p className="about-card-sub text-sm text-[#f0ede4]/70">{item.school}</p>
                    <p className="about-card-muted text-sm text-[#f0ede4]/50">{item.years}</p>
                    {item.description && (
                      <p className="about-card-body text-sm text-[#f0ede4]/60 mt-1">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="p-0 sm:p-0 md:p-8 w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="about-section-heading text-xl font-semibold">ACHIEVEMENTS</h2>
                <span className="about-card-muted text-xs text-[#f0ede4]/40 tracking-widest uppercase">
                  {achievements.length} total
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievementsPreview.map((item, index) => (
                  <AchievementCard key={index} item={item} />
                ))}
              </div>
              {remainingAchievements > 0 && (
                <ViewAllButton count={remainingAchievements} onClick={() => setAchievementsOpen(true)} />
              )}
            </div>

            {/* Experience */}
            <div className="p-0 sm:p-0 md:p-8 w-full mt-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="about-section-heading text-xl font-semibold">WORK EXPERIENCE</h2>
                <span className="about-card-muted text-xs text-[#f0ede4]/40 tracking-widest uppercase">
                  {experience.length} total
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experiencePreview.map((item, index) => (
                  <ExperienceCard key={index} item={item} />
                ))}
              </div>
              {remainingExperience > 0 && (
                <ViewAllButton count={remainingExperience} onClick={() => setExperienceOpen(true)} />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingControls />

      {/* Modals */}
      <Modal isOpen={achievementsOpen} onClose={() => setAchievementsOpen(false)} title={`All Achievements (${achievements.length})`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {achievements.map((item, index) => <AchievementCard key={index} item={item} />)}
        </div>
      </Modal>

      <Modal isOpen={experienceOpen} onClose={() => setExperienceOpen(false)} title={`All Work Experience (${experience.length})`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {experience.map((item, index) => <ExperienceCard key={index} item={item} />)}
        </div>
      </Modal>
    </>
  );
}