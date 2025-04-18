"use client";

import { useEffect, useState, useRef } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { gsap } from "gsap";
import { useAnimation, useInView } from "framer-motion";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Services from "../components/Services";
import Projects from "../components/Projects";
// import ProjectsGallery from "../components/ProjectsGallery";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);


  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  const box1InView = useInView(box1Ref, { once: false, amount: 0.3 });
  const box2InView = useInView(box2Ref, { once: false, amount: 0.3 });
  const box3InView = useInView(box3Ref, { once: false, amount: 0.3 });

  const box1Controls = useAnimation();
  const box2Controls = useAnimation();
  const box3Controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (box1InView) {
      box1Controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      box1Controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }

    if (box2InView) {
      box2Controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      });
    } else {
      box2Controls.start({
        y: 100,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }

    if (box3InView) {
      box3Controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.9, ease: "easeOut" },
      });
    } else {
      box3Controls.start({
        y: 200,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [
    box1InView,
    box2InView,
    box3InView,
    box1Controls,
    box2Controls,
    box3Controls,
  ]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Hero />
          <Services />
          <Projects />
          {/* <ProjectsGallery /> */}
          <About />
          <Testimonials />
          <Footer />
        </>
      )}
    </>
  );
}
