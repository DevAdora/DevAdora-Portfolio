"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        {/* === Desktop Nav (≥768px) === */}
        <div className="header hidden md:flex justify-between items-start px-4 py-4">
          <div className="text-[18px] font-bold text-gray-950">
            <h1>DevAdora ©</h1>
          </div>

          <ul className="flex gap-[10px]">
            {["Services,", "About,", "Works,", "Testimonials,", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="text-light-dark text-[1.1rem] font-medium"
                >
                  {item}
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
          <ul className="flex flex-col items-start">
            {["Services,", "About,", "Works,", "Testimonials,", "Contact,"].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="text-light-dark text-[1rem] font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Divider */}
      <div className="header-line w-full h-[1px] bg-light-dark"></div>
    </header>
  );
}
