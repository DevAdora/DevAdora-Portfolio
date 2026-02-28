import Image from "next/image";

const facts = [
  {
    label: "BASED IN",
    value: "Kabankalan City, Negros Occidental, Philippines — open to remote",
  },
  {
    label: "LANGUAGES",
    value: "Filipino (native), Hiligaynon (native), English (fluent)",
  },
  {
    label: "STUDIES",
    value:
      "Bachelor of Science in Information Technology, Software Developer/Freelance, Continuous self-learning in modern  technologies",
  },
  {
    label: "OFF THE CLOCK",
    value:
      "Gaming, Drawing, Reading Books, Cafe Hunts, Sipping Coffee, One with nature, Exercising",
  },
  {
    label: "ALSO ME",
    value:
      "I debug my own life decisions as carefully as I debug my code — sometimes with console logs",
  },
  {
    label: "CURRENT OBSESSION",
    value:
      "Books, Coffee and Someone's Daughter",
  },
];

const tags = [
  "Detail-oriented",
  "Collaborative",
  "Fast learner",
  "Calm under pressure",
  "Curious by default",
  "Ships clean code",
  "Overthinks sometimes",
  "Too honest",
];

const About = () => {
  return (
    <section className="about bg-dark-black text-white-dove min-h-screen px-6 sm:px-10 md:px-14 lg:px-20 py-16 md:py-24">
      <p className="text-xs tracking-[0.25em] uppercase text-white-dove/40 mb-6 flex items-center gap-3">
        <span className="inline-block w-6 h-px bg-white-dove/30" />
        Nice to meet you
      </p>

      <h1
        className="font-black leading-none tracking-tighter mb-14 md:mb-20"
        style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
      >
        Beyond the <span className="text-[#78726a]">portfolio</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
        <div className="w-full lg:w-[42%] shrink-0 flex flex-col gap-8">
          <div className="w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/me-1.jpg"
              alt="Ar-ar Reyes — DevAdora"
              width={700}
              height={520}
              className="w-full h-auto object-cover object-center"
              style={{
                maxHeight: "520px",
                objectPosition: "center",
                filter: "grayscale(60%) brightness(1) contrast(1.1)",
              }}
            />
          </div>

          <div className="flex flex-col gap-5 text-white-dove/70 leading-relaxed text-[1rem] md:text-[1.1rem]">
            <p>
              I'm endlessly curious about how things work — products, systems,
              teams, and the people who use them. That curiosity is probably
              what led me to software development in the first place, and why I
              keep pushing to build things that genuinely solve problems.
            </p>
            <p>
              Outside of code, I recharge through design exploration and
              creative side projects. And yes — I genuinely enjoy refactoring
              old codebases. Some people meditate. I clean up legacy JavaScript.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[58%] flex flex-col gap-0">
          {facts.map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex flex-col sm:flex-row gap-2 sm:gap-8 py-6 ${
                i < facts.length - 1 ? "border-b border-white-dove/10" : ""
              }`}
            >
              <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white-dove/35 shrink-0 sm:w-36 pt-0.5">
                {label}
              </span>
              <span className="text-[0.95rem] md:text-[1.05rem] text-white-dove/85 leading-snug">
                {value}
              </span>
            </div>
          ))}

          <div className="mt-10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white-dove/35 mb-5">
              How colleagues describe me
            </p>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white-dove/70 border border-white-dove/20 rounded-full px-4 py-1.5 tracking-wide hover:border-[#2DD4BF]/50 hover:text-[#2DD4BF] transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
