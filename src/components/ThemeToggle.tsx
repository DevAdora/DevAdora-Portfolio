"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        relative flex items-center gap-2.5 px-4 py-2 rounded-full
        text-[11px] tracking-[0.18em] uppercase font-medium
        border transition-all duration-300 cursor-pointer
        ${
          isDark
            ? "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
            : "border-black/20 text-black/60 hover:border-black/50 hover:text-black"
        }
      `}
    >
      {/* Animated half-moon / sun icon */}
      <span
        className="inline-block w-3.5 h-3.5 relative shrink-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ transition: "transform 0.4s ease" }}
        >
          {isDark ? (
            // Moon icon
            <path
              d="M12.5 8.5A5.5 5.5 0 1 1 5.5 1.5a4.5 4.5 0 0 0 7 7z"
              fill="currentColor"
            />
          ) : (
            // Sun icon
            <g>
              <circle cx="7" cy="7" r="3" fill="currentColor" />
              <line x1="7" y1="1" x2="7" y2="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="7" y1="11.5" x2="7" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="1" y1="7" x2="2.5" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="11.5" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2.93" y1="2.93" x2="4" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="10" y1="10" x2="11.07" y2="11.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="11.07" y1="2.93" x2="10" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="4" y1="10" x2="2.93" y2="11.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          )}
        </svg>
      </span>

      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}