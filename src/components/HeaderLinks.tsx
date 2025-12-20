"use client";
import { useState, useEffect, useRef } from "react";

export default function ScrambleText({
  label,
  variant = "default", 
}: {
  label: string;
  variant?: "default" | "light" | "dark";
}) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [textValue, setTextValue] = useState<string>(label);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerScramble = () => {
    if (intervalRef.current !== null) return;

    let progress = 0;
    const originalText = label;

    intervalRef.current = setInterval(() => {
      setTextValue((prevText: string) => {
        return prevText
          .split("")
          .map((_, index: number) => {
            if (index < progress) return originalText[index];
            return alphabet[Math.floor(Math.random() * alphabet.length)];
          })
          .join("");
      });

      progress += 0.5;

      if (progress >= originalText.length) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 40);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const variantClasses = {
    default: "hover:text-white after:bg-white after:bottom-[-10px]", // original hover
    light: "hover:text-white after:bg-white ", // white text hover
    dark: "hover:text-black after:bg-black", // black text + underline on hover
  }[variant];

  return (
    <span
      onMouseEnter={triggerScramble}
      className={`
      font-onest cursor-pointer transition-colors relative inline-block
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
      after:w-0 after:transition-all after:duration-300 hover:after:w-full pb-2
      ${variantClasses}
    `}
    >
      {textValue}
    </span>
  );
}