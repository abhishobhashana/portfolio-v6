"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const title = section.querySelector(".skills-title");
      const content = section.querySelector(".content-wrapper");
      const bg = section.querySelector("img"); // select the background

      if (!title || !content || !bg) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          scrub: 1.2,
          pin: true,
        },
      });

      // 1️⃣ Fade in title
      tl.fromTo(title, { opacity: 0 }, { opacity: 1 });

      // 2️⃣ Fade out background as soon as title scroll starts
      tl.to(bg, { opacity: 0, ease: "none", filter: "blur(8px)" }, "<"); // "<" starts at same time as previous

      // 3️⃣ Move content (title + images) up
      tl.to(content, { y: -200 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end justify-center overflow-hidden"
    >
      <img
        src="/main_2.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        draggable="false"
      />

      <div className="content-wrapper mb-[-180]">
        <div className="skills-title w-full px-60 pb-20 flex">
          <h1 className="text-yellow font-medium text-5xl lg:text-6xl">{`"`}</h1>
          <h1 className="text-yellow font-medium uppercase text-5xl lg:text-6xl tracking-tight">
            {`The only thing that matters is what you know."`}
          </h1>
        </div>

        <div className="space-y-5 flex flex-col items-center img-box">
          <div className="jason-1 bg-yellow w-auto -translate-x-5">
            <img
              src="/bg.jpg"
              alt="Jason 1"
              className="w-full h-20 object-cover size-full object-[5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
            />
          </div>

          <div className="jason-3 bg-yellow w-auto -translate-x-5">
            <img
              src="/bg.jpg"
              alt="Jason 3"
              className="w-full h-20 object-cover size-full object-[5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
