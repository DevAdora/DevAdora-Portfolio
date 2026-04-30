export interface Project {
  image: string;
  title: string;
  name: string;
  timeline: string;
  tags: string[];
  tech: string;
  github: string;
  live: string;
  desc: string;
}

export const ALL_PROJECTS: Project[] = [
  {
    image: "/images/betterkabankalan.png",
    title: "Community Driven Website",
    name: "BetterKabankalan",
    timeline: "2026",
    tags: ["2026", "Development", "Website Application"],
    desc: "A community-driven, open-source web portal designed to improve access to public information, services, and transparency-related resources for Kabankalan City.",
    tech: "React, Tailwind CSS, Typescript, Vercel",
    github: "https://github.com/betterkabankalan/betterkabankalan",
    live: "https://betterkabankalan.vercel.app/",
  },
  {
    image: "/images/rackmaster.png",
    title: "Billiard Management System",
    name: "Rackmaster",
    timeline: "2026",
    tags: ["2026", "Development", "Desktop Application"],
    desc: "A billiard management system designed to streamline operations for billiard halls. Rackmaster offers features such as table reservations, billing, and management.",
    tech: "Electron Vite, SQLite, React, Typescript, Vite",
    github: "#",
    live: "#",
  },
  {
    image: "/images/sml.png",
    title: "Book Platform",
    name: "Scriptum, Mens, Lumen",
    timeline: "2025 - Present",
    tags: ["2025", "Design", "Development", "Web Application"],
    desc: "A social media platform designed for bookworms. Inspired by Medium, SML lets users share book reviews, reading lists, and literary insights.",
    tech: "NextJS, Supabase, Tailwind CSS",
    github: "https://github.com/DevAdora/sml-web",
    live: "https://scriptummenslumen.vercel.app/",
  },
  {
    image: "/images/analytique.png",
    title: "Data Analytics",
    name: "Analytique",
    timeline: "2025 - Present",
    tags: ["2025", "Design", "Development", "Web Application"],
    desc: "An open source platform that scrapes live data for analytics of your deployed web application online.",
    tech: "NextJS, Supabase, Tailwind CSS",
    github: "https://github.com/DevAdora/web-analytics",
    live: "https://web-analytics-tan.vercel.app/",
  },
  {
    image: "/images/arc-tech (2).png",
    title: "Architecture",
    name: "ARC-TECH",
    timeline: "2025",
    tags: ["2025", "Design", "Development", "Web Application"],
    desc: "An architectural showcase and e-commerce web application featuring a modern design and seamless user experience.",
    tech: "React, Vite, GSAP/Frame Motion, Tailwind CSS",
    github: "https://github.com/DevAdora/ARC-TECH",
    live: "https://arkitech.vercel.app/",
  },
  {
    image: "/images/PF Background.png",
    title: "Fashion",
    name: "Passion meets Fashion",
    timeline: "2025",
    tags: ["2025", "Design", "Development", "Web Application"],
    desc: "A modern e-commerce web application for apparel and clothing with a seamless shopping experience.",
    tech: "React, NextJS, Supabase, ShadCN UI, Tailwind CSS",
    github: "https://github.com/DevAdora/Passionmeetsfashion",
    live: "#",
  },
  {
    image: "/images/transcare-image.png",
    title: "Healthcare Services",
    name: "Transcare EMS",
    timeline: "2025",
    tags: ["2025", "Design", "Development", "Web Application"],
    desc: "A comprehensive web application for health care services, providing a platform for patients and providers to connect.",
    tech: "React, NextJS, Supabase, ShadCN UI, Tailwind CSS",
    github: "https://github.com/Vhyron/transcare-ems-digital-ops",
    live: "#",
  },
  {
    image: "/images/ugyon.png",
    title: "Voucher Reward & Point System",
    name: "Ugyon Mobile Application",
    timeline: "2024 - 2025",
    tags: ["Flutter", "Mobile Application", "Development", "24-25"],
    desc: "A mobile application to manage voucher rewards and point systems, enhancing customer engagement.",
    tech: "Flutter, Dart, Firebase",
    github: "https://github.com/DevAdora/UgyonConnectApp",
    live: "#",
  },
  {
    image: "/images/siren-app.png",
    title: "Emergency & Response Mobile App",
    name: "Siren App",
    timeline: "2024",
    tags: ["React Native", "Mobile Application", "Development", "2024"],
    desc: "A mobile application for emergency response, providing quick access to services during critical situations.",
    tech: "React Native, Expo, Firebase",
    github: "https://github.com/Oniely/siren-app",
    live: "#",
  },
  {
    image: "/images/goranow.png",
    title: "Travel Agency & Tourist Website",
    name: "GORANOW",
    timeline: "2024",
    tags: ["2024", "WordPress", "Development", "Website"],
    desc: "A WordPress website for a travel agency, offering services and information for tourists.",
    tech: "WordPress, Elementor",
    github: "#",
    live: "#",
  },
  {
    image: "/images/hr-image.png",
    title: "Management & Education System",
    name: "Southland College HRMS",
    timeline: "2023",
    tags: ["2023", "Design", "Development", "Website"],
    desc: "An HRMS website designed to streamline HR processes and enhance employee management.",
    tech: "PHP, CSS, JavaScript, Tailwind CSS, MySQL",
    github: "https://github.com/Oniely/HRMS",
    live: "#",
  },
];

export const HOMEPAGE_PREVIEW_COUNT = 5;

export const REMAINING_COUNT = ALL_PROJECTS.length - HOMEPAGE_PREVIEW_COUNT;