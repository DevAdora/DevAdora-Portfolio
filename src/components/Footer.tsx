"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

// Menu items — anchor links stay on the home page,
// About and Works navigate to their own pages under (pages)/
const menuItems = [
  { label: "Home",         href: "/" },
  { label: "Services",     href: "/#services" },
  { label: "Works",        href: "/pages/projects" },
  { label: "About",        href: "/pages/about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact",      href: "/#contact" },
];

// Reusable underline link — colour follows the theme via CSS var
function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "relative inline-block " +
    "after:content-[''] after:absolute after:left-0 after:bottom-0 " +
    "after:h-[1.5px] after:w-0 after:bg-[var(--fg-primary)] " +
    "after:transition-all after:duration-300 hover:after:w-full " +
    "transition-opacity duration-200 hover:opacity-100 opacity-80";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-PH", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setLocalTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const colHeadingCls =
    "font-semibold mb-4 border-b border-[var(--border-subtle)] pb-2 " +
    "text-[0.8rem] sm:text-[1rem] md:text-[1.2rem]";

  const colListCls =
    "space-y-2 text-[0.8rem] sm:text-[1rem] md:text-[1.2rem]";

  return (
    <footer className="py-12 px-8 md:px-16 text-sm font-light relative">
      {/* ── Three-column grid ── */}
      <div className="grid grid-cols-3 gap-8 md:gap-12 border-b border-[var(--border-subtle)] pb-8">

        {/* Menu */}
        <div>
          <h3 className={colHeadingCls}>Menu</h3>
          <ul className={colListCls}>
            {menuItems.map(({ label, href }) => (
              <li key={label}>
                <FooterLink href={href}>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className={colHeadingCls}>Socials</h3>
          <ul className={colListCls}>
            {[
              { label: "LinkedIn",  href: "https://www.linkedin.com/in/rai-reyes-jr-6bb906272/" },
              { label: "Instagram", href: "https://www.instagram.com/soullessr4i/" },
              { label: "Bento",     href: "https://bento.me/devadora" },
              { label: "GitHub",    href: "https://github.com/DevAdora" },
            ].map(({ label, href }) => (
              <li key={label}>
                <FooterLink href={href} external>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className={colHeadingCls}>Contacts</h3>
          <ul className={colListCls}>
            {[
              { label: "Gmail",    href: "mailto:raireyesjr@gmail.com?subject=Hello&body=I want to contact you" },
              { label: "Viber",    href: "viber://chat?number=%2B639762583010" },
              { label: "Telegram", href: "https://t.me/yourusername" },
            ].map(({ label, href }) => (
              <li key={label}>
                <FooterLink href={href} external>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-row justify-between items-center mt-8 relative">
        <div className="text-xl md:text-2xl xl:text-[3rem] font-bold w-[40%]">
          © 2026 ByRai
          <span className="font-semibold block md:inline md:ml-2">
            All rights reserved.
          </span>
        </div>

        <div className="mt-4 md:mt-0 text-right text-xs">
          <p className="font-semibold tracking-widest uppercase text-[10px] opacity-50 mb-1">
            Local Time
          </p>
          <p className="opacity-80">
            {localTime}{" "}
            <span className="text-[10px] opacity-60">, PHI</span>
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="absolute bottom-0 right-0 rounded-full p-2 md:p-3 transition-all duration-200 cursor-pointer hover:opacity-70"
          style={{
            backgroundColor: "var(--fg-primary)",
            color: "var(--bg-base)",
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}