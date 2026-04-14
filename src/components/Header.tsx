"use client";

import Link from "next/link";
import ScrambleText from "./HeaderLinks";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

type HeaderProps = {
  variant?: "light" | "dark";
};

const navItems = [
  { name: "Services", path: "/" },
  { name: "About ", path: "/About" },
  { name: "Works ", path: "/Projects" },
  { name: "Testimonials ", path: "/" },
];

export default function Header({ variant = "light" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.3);
    };

    checkMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactFormOpen(true);
    closeMobileMenu();
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    closeContactForm();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const textColorClass = variant === "dark" ? "text-black" : "text-white";

  return (
    <>
      {!isScrolled && (
        <header
          className={`absolute top-0 left-0 w-full z-[45] px-8 py-4 ${textColorClass}`}
        >
          <div className="flex flex-row justify-center items-center">
            <nav className="hidden md:block">
              <ul className="text-[1.4rem] text-[#f0ede4] text-end flex gap-10">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item.path}>
                      <ScrambleText label={item.name} variant={"default"} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      )}

      {/* ── Fixed top-right controls ── */}
      <div className="fixed top-6 right-3 flex items-center space-x-3 z-[50]">
        {/* Theme Toggle — always visible */}
        <ThemeToggle />

        <div
          className={`flex items-center space-x-3 transition-all duration-300 justify-center ${
            isScrolled || isMobile
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <button
            onClick={openContactForm}
            className="uppercase bg-[#f0ede4] text-[#0a0a09] border-[#0a0a09] border px-6 py-3 rounded-full text-sm sm:text-base font-medium tracking-wide hover:opacity-90 transition cursor-pointer dark:bg-[#f0ede4] dark:text-[#0a0a09]"
          >
            Get in Touch →
          </button>

          <button
            onClick={toggleMobileMenu}
            className="uppercase bg-[#323333] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium tracking-wide hover:opacity-90 transition cursor-pointer"
          >
            MENU
          </button>
        </div>
      </div>

      <>
        <div
          className={`fixed inset-0 bg-black/50 z-[55] transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMobileMenu}
        ></div>

        <div
          className={`fixed top-0 right-0 w-full h-full bg-[#0a0a09] dark-menu z-[60] transform transition-all duration-700 ease-in-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col p-8 space-y-8 h-full">
            <div className="flex justify-center items-center">
              <button
                onClick={closeMobileMenu}
                className="w-20 h-20 flex items-center justify-center relative rounded-full transition-all duration-300 text-white text-[1.6rem]"
                aria-label="Close menu"
              >
                <ScrambleText label="Close" variant="light"></ScrambleText>
              </button>
            </div>

            <nav className="flex flex-col space-y-6 flex-1 justify-center text-center ">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`text-[3rem] uppercase md:text-[4rem] text-[#f0ede4] transition-all duration-500 pb-2 ease-out leading-[20px] md:leading-[40px] transform ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <ScrambleText label={item.name} variant={"default"} />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </>

      <>
        <div
          className={`fixed inset-0 bg-[#0a0a09] backdrop-blur-sm z-[60] transition-all duration-500 ease-out ${
            isContactFormOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeContactForm}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full bg-[#0a0a09] z-[70] shadow-2xl transform transition-all duration-700 ease-in-out overflow-y-auto w-full sm:w-[85%] md:w-[65%] lg:w-[50%] xl:w-[40%] ${
            isContactFormOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="sticky top-0 bg-[#0a0a09] border-b border-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 z-10">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[-1px] text-white">
                    Get in Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-white mt-1">
                    Let's start a conversation
                  </p>
                </div>
                <button
                  onClick={closeContactForm}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors group"
                  aria-label="Close contact form"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
              <div className="space-y-4 sm:space-y-6">
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address *", type: "email", placeholder: "john@example.com" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000" },
                ].map(({ id, label, type, placeholder }, i) => (
                  <div
                    key={id}
                    className={`transform transition-all duration-500 ${
                      isContactFormOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  >
                    <label htmlFor={id} className="block text-xs sm:text-sm text-white mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09] text-white"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <label htmlFor="message" className="block text-xs sm:text-sm text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09] text-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-white text-[#080807] py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
                  >
                    Send Message →
                  </button>
                </div>
              </div>

              <div
                className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 space-y-4 sm:space-y-6 transform transition-all duration-500 ${
                  isContactFormOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                {[
                  { label: "EMAIL", value: "raireyesjr@gmail.com", href: "mailto:raireyesjr@gmail.com" },
                  { label: "PHONE", value: "+63 9 762 583 010", href: "tel:+639762583010" },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <h3 className="text-xs sm:text-sm text-white mb-2">{label}</h3>
                    <a href={href} className="text-sm sm:text-base text-white/80 hover:text-white transition-colors break-all">
                      {value}
                    </a>
                  </div>
                ))}

                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-2">BASED</h3>
                  <p className="text-sm sm:text-base text-white/80">
                    Negros Occidental<br />Kabankalan City, 6111
                  </p>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm text-white mb-2">SOCIALS</h3>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                      <a key={social} href="#" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}