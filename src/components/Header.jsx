"use client";
import Link from "next/link";
import AboutPage from "@/About/page";
const navItems = [
  { name: "Services,", path: "/Services" },
  { name: "About,", path: "/About" },
  { name: "Works,", path: "/Works" },
  { name: "Testimonials,", path: "/Testimonials" },
  { name: "Contact,", path: "/Contact" },comm
];

export default function Header() {
  return (
    <header>
      <nav>
        {/* === Desktop Nav (≥768px) === */}
        <div className="header hidden md:flex justify-between items-start p-7">
          <div className="text-[1.2rem] font-bold text-gray-950">
            <h1>DevAdora ©</h1>
          </div>

          <ul className="flex gap-[5px]">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className="text-light-dark text-[1.2rem] font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* === Mobile Nav (<768px) === */}
        <div className="header flex md:hidden justify-between items-start px-4 py-4">
          {/* Left side: Branding */}
          <div className="text-[18px] font-bold text-gray-950 ">
            <h1>DevAdora ©</h1>
          </div>

          {/* Right side: Vertical nav */}
          <ul className="flex gap-[5px]">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className="text-light-dark text-[1.2rem] font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Divider */}
      <div className="header-line w-full bg-light-dark"></div>
    </header>
  );
}
