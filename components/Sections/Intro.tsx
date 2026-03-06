"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const images = section.querySelectorAll(".img-box > div");

      gsap.set(section, { marginTop: "0vh" });

      const scrollIndicator = document.querySelector(".scroll-indicator");
      gsap.to(scrollIndicator, {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      const transitionImage = document.querySelector(".hero-transition-image");
      const transitionImg = document.querySelector(
        ".hero-transition-image img",
      );

      if (!sectionRef.current || !transitionImage || !transitionImg) return;

      gsap.set(transitionImg, { scale: 1.15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 2,
        },
      });

      tl.to(
        transitionImage,
        {
          opacity: 0,
          duration: 3,
          filter: "blur(8px)",
          ease: "power2.out",
        },
        "<",
      );

      tl.to(
        transitionImg,
        {
          scale: 1,
          duration: 5,
          ease: "power2.out",
        },
        "<",
      );

      images.forEach((img: any) => {
        gsap.to(img, {
          y: -300,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      tl.fromTo(
        ".edu-transition-image",
        {
          opacity: 0,
          duration: 1,
          filter: "blur(8px)",
          ease: "power2.out",
        },
        {
          opacity: 1,
          duration: 1.5,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        "<",
      );

      tl.to(
        ".edu-transition-image img",
        {
          scale: 1.1,
          duration: 3,
          ease: "power2.out",
        },
        "<",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="jason relative z-10 ps-55 pe-0 py-40 flex flex-col lg:flex-row justify-between gap-5 w-screen overflow-x-hidden min-h-[200vh]"
    >
      <div className="lg:max-w-lg max-w-sm">
        <h1 className="text-yellow font-medium uppercase text-5xl lg:text-6xl mb-14 pe-10">
          introduction
        </h1>
        <h2 className="text-pink font-medium text-3xl md:text-4xl mb-7 md:pe-20 pe-10">
          Abhi wanted to understand the world, but the puzzles kept getting
          bigger.
        </h2>
        <p className="text-white font-medium text-lg md:text-2xl md:pe-28 pe-14">
          Abhi grew up fascinated by technology. After diving into computers and
          gadgets as a kid, he chose Computer Engineering to turn curiosity into
          skill. He learned to solve problems, bring ideas to life - setting the
          stage for a career in modern web development.
        </p>

        <div className="jason-2 bg-yellow h-[90vh] w-auto mt-20 -translate-x-5">
          <img
            src="/char_4.png"
            alt="Jason 2"
            className="w-full h-full size-full object-cover object-[80%_center] hover:scale-x-[0.97] hover:scale-y-[0.98] transition duration-700 ease-in-out"
          />
        </div>
      </div>

      <div className="space-y-5 mt-48 flex flex-col items-center img-box">
        <div className="jason-1 bg-yellow lg:h-[80vh] w-auto -translate-x-5">
          <img
            src="/char_6.png"
            alt="Jason 1"
            className="w-full h-full object-cover size-full object-[5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
          />
        </div>

        <div className="jason-3 bg-yellow h-[50vh] w-auto -translate-x-5">
          <img
            src="/char_8.png"
            alt="Jason 3"
            className="w-full h-full object-cover size-full object-[5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
