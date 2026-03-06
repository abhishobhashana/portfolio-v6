"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Outro() {
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
      className="jason relative z-10 py-40 mt-60 flex flex-col gap-5 w-screen overflow-x-hidden min-h-screen px-28"
    >
      <div className="mt-20 -translate-x-5 flex flex-col justify-center gap-10">
        <div className="flex justify-center">
          <h1 className="text-yellow font-medium text-5xl lg:text-6xl tracking-tight">{`"`}</h1>
          <h1 className="text-yellow font-medium uppercase text-5xl lg:text-6xl tracking-tight">
            {`The streets of code are endless. But the right team changes everything."`}
          </h1>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-pink font-medium text-3xl md:text-4xl mb-7 md:pe-20 pe-10 tracking-tight">
            Every project is a mission. Every connection is an ally.
          </h2>
          <ul className="flex justify-center gap-8 font-medium tracking-tight text-pink pt-20">
            <li>
              <a href="mailto:abhiashobhashana@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/abhishobhashana" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/abhishobhashana" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
