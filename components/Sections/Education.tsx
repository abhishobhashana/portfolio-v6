"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Education() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Select elements relative to the ref
      const section = sectionRef.current;
      if (!section) return;

      const images = section.querySelectorAll(".img-box > div");

      // Optional: initial offset
      gsap.set(section, { marginTop: "0vh" });

      const scrollIndicator = document.querySelector(".scroll-indicator");
      gsap.to(scrollIndicator, {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      // Animate each image on scroll
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="jason relative z-10 mt-60 justify-between gap-5 w-screen overflow-x-hidden min-h-[200vh]"
    >
      <div className="edu-transition-image ps-0 pointer-events-none z-0">
        <img
          src="/poster_6.png"
          alt="transition"
          className="w-screen h-screen object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="space-y-5 flex flex-col items-center img-box">
          <div className="jason-1 bg-yellow lg:h-[80vh] w-auto -translate-x-5">
            <img
              src="/pc.png"
              alt="Jason 1"
              className="w-full h-full object-cover size-full object-[5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
            />
          </div>

          <div className="jason-3 max-w-2xl mt-20 pl-24 -translate-x-5 flex">
            <h1 className="text-yellow font-medium text-5xl lg:text-6xl">
              {`"`}
            </h1>
            <h1 className="text-yellow font-medium uppercase text-5xl lg:text-6xl">
              {`There are way too many birds flying around in perfect formation."`}
            </h1>
          </div>
        </div>

        <div className="lg:max-w-lg max-w-sm">
          <h1 className="text-yellow font-medium uppercase text-5xl lg:text-6xl mb-14 pe-10">
            Education
          </h1>
          <h2 className="text-pink font-medium text-3xl md:text-4xl mb-7 md:pe-20 pe-10">
            Learning was only the beginning, but it set the rules of the game.
          </h2>
          <p className="text-white font-medium text-lg md:text-2xl md:pe-28 pe-14">
            Abhi studied Computer Engineering, mastering the fundamentals of
            software, and problem-solving. Projects and challenging courses
            shaped the skills that would fuel a career in building scalable,
            high-performance web applications.
          </p>

          <div className="jason-2 bg-yellow h-[90vh] w-auto mt-20 -translate-x-5">
            <img
              src="/char_2.png"
              alt="Jason 2"
              className="w-full h-full size-full object-cover object-[80%_center] hover:scale-x-[0.97] hover:scale-y-[0.98] transition duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
