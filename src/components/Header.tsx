import Link from "next/link"; // ← Changed from react-router-dom
import ScrambleText from "./HeaderLinks";
import { useEffect, useState } from "react";

type HeaderProps = {
  variant?: "light" | "dark";
};

const navItems = [
  { name: "Services, ", path: "/" },
  { name: "About, ", path: "/About" },
  { name: "Works, ", path: "/Projects" },
  { name: "Testimonials, ", path: "/" },
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          className={`absolute top-0 left-0 w-full z-55 px-8 py-4  ${textColorClass}`}
        >
          <div className="flex justify-end items-center">
            <nav className=" hidden md:block">
              <ul className="space-x-6 text-[1.4rem] text-black text-right">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item.path}>
                      <ScrambleText label={item.name} variant={"dark"} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      )}

      <div className="fixed top-6 right-3 flex items-center space-x-4 z-50">
        <div
          className={`flex items-center space-x-4 transition-all duration-300 justify-center ${
            isScrolled || isMobile
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <button
            onClick={openContactForm}
            className="uppercase bg-[#323333] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium tracking-wide hover:opacity-90 transition "
          >
            Get in Touch →
          </button>

          <button
            onClick={toggleMobileMenu}
            className="uppercase bg-[#323333] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium tracking-wide hover:opacity-90 transition "
          >
            MENU
          </button>
        </div>
      </div>

      <>
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMobileMenu}
        ></div>

        <div
          className={`fixed top-0 right-0 w-full h-full bg-[#0a0a09] z-70 transform transition-all duration-700 ease-in-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col p-8 space-y-8 h-full">
            <div className="flex justify-center items-center ">
              <button
                onClick={closeMobileMenu}
                className="w-20 h-20 flex items-center justify-center relative rounded-full transition-all duration-300 text-white text-[1.6rem]"
                aria-label="Close menu"
              >
                <ScrambleText label="Close" variant="light"></ScrambleText>
              </button>
            </div>

            <nav className="flex flex-col space-y-6 flex-1 justify-center text-center">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`text-[3rem] uppercase md:text-[5rem] text-[#f0ede4] transition-all duration-500 pb-2 ease-out leading-[20px] md:leading-[40px] transform ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <ScrambleText label={item.name} />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </>

      <>
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-500 ease-out ${
            isContactFormOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeContactForm}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full bg-[#0a0a09] z-[70] shadow-2xl transform transition-all duration-700 ease-in-out overflow-y-auto ${
            isMobile ? "w-full" : "w-full md:w-[40%]"
          } ${
            isContactFormOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="sticky top-0 bg-[#0a0a09] border-b border-white px-6 md:px-10 py-6 z-10">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl tracking-[-1px] text-white">
                    Get in Touch
                  </h2>
                  <p className="text-sm text-black/60 mt-1  text-white">
                    Let's start a conversation
                  </p>
                </div>
                <button
                  onClick={closeContactForm}
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors group"
                  aria-label="Close contact form"
                >
                  <svg
                    className="w-6 h-6 text-white hover:w-8 hover:h-8 cursor-pointer transition-colors"
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

            <div className="flex-1 px-6 md:px-10 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm text-white mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09] text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm text-white mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09] text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm text-white mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09] text-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm text-white mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all bg-[#0a0a09] text-white"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div
                  className={`transform transition-all duration-500 ${
                    isContactFormOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <button
                    type="submit"
                    className="w-full bg-white text-[#080807] py-4 rounded-lg text-base transition-all duration-300 hover:shadow-lg"
                  >
                    Send Message →
                  </button>
                </div>
              </form>

              <div
                className={`mt-12 pt-8 border-t border-white/10 space-y-6 transform transition-all duration-500 ${
                  isContactFormOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div>
                  <h3 className="text-sm text-white mb-2">EMAIL</h3>
                  <a
                    href="mailto:hello@arctech.com"
                    className="text-base  text-white/80 hover:text-white transition-colors"
                  >
                    raireyesjr@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm text-white mb-2">PHONE</h3>
                  <a
                    href="tel:+15550000000"
                    className="text-base  text-white/80 hover:text-white transition-colors"
                  >
                    +63 76 258 3010
                  </a>
                </div>

                <div>
                  <h3 className="text-sm text-white mb-3">FOLLOW ME</h3>
                  <div className="flex gap-4">
                    {["Instagram", "LinkedIn", "GitHub"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-sm  text-white/80 hover:text-white transition-colors"
                      >
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
