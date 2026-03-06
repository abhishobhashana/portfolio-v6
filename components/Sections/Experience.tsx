"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
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
      className="jason relative z-10 ps-55 pe-0 py-40 flex flex-col lg:flex-row justify-between gap-5 w-screen overflow-x-hidden min-h-[200vh] mt-60"
    >
      <div className="lg:max-w-lg max-w-sm">
        <h1 className="text-yellow font-medium uppercase text-5xl lg:text-6xl mb-14 pe-10">
          Experience
        </h1>
        <h2 className="text-pink font-medium text-3xl md:text-4xl mb-7 md:pe-20 pe-10">
          The real world was tougher, but it taught lessons no classroom ever
          could.
        </h2>
        <p className="text-white font-medium text-lg md:text-2xl md:pe-28 pe-14">
          After graduation, Abhi stepped into the fast-paced world of web
          development. From startups to large teams, he honed skills in React,
          TypeScript, and scalable front-end architecture, turning complex
          problems into smooth, user-friendly experiences. Each project added
          new tools, new challenges, and a sharper edge - preparing him to
          tackle bigger, bolder digital adventures.
        </p>

        <div className="jason-2 bg-yellow h-[90vh] w-auto mt-20 -translate-x-5">
          <img
            src="/char_11.png"
            alt="Jason 2"
            className="w-full h-full size-full object-cover object-[80%_center] hover:scale-x-[0.97] hover:scale-y-[0.98] transition duration-700 ease-in-out"
          />
        </div>
      </div>

      <div className="space-y-5 mt-48 flex flex-col items-center img-box">
        <div className="jason-1 bg-yellow lg:h-[80vh] w-auto -translate-x-5">
          <img
            src="/char_12.png"
            alt="Jason 1"
            className="w-full h-full object-cover size-full object-[5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
          />
        </div>

        <div className="jason-3 bg-yellow h-[50vh] w-auto -translate-x-5">
          <img
            src="/char_13.png"
            alt="Jason 3"
            className="w-full h-full object-cover size-full object-[5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
          />
        </div>

        <div className="jason-3 max-w-2xl pl-24 mt-20 -translate-x-5 flex">
          <h1 className="text-yellow font-medium text-5xl lg:text-6xl">
            {`"`}
          </h1>
          <h1 className="text-yellow font-medium uppercase text-5xl lg:text-6xl">
            {`Experience counts."`}
          </h1>
        </div>
      </div>
    </section>
  );
}
