"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CareerIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.set(section, { marginTop: "0vh" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top+=200", // extend scroll distance to slow animation
          scrub: 1.5, // smooth and slower scroll effect
        },
      });

      // Animate background gradient smoothly
      tl.fromTo(
        section,
        {
          backgroundImage: `radial-gradient(
            circle at 50% 200vh,
            rgba(255, 214, 135, 0) 0,
            rgba(157, 47, 106, 0.5) 90vh,
            rgba(157, 47, 106, 0.8) 120vh,
            rgba(32, 31, 66, 0) 150vh
          )`,
        },
        {
          backgroundImage: `radial-gradient(
            circle at 50% 3.9575vh,
            rgb(255, 213, 133) 0vh,
            rgb(247, 77, 82) 50.011vh,
            rgb(145, 42, 105) 90.0183vh,
            rgba(32, 31, 66, 0) 140.599vh
          )`,
        },
      );

      // Vertical movement only, no duration
      tl.to(section, {
        y: -200,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mt-60 mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 w-full max-w-4xl overflow-x-hidden min-h-screen text-transparent bg-clip-text [-webkit-text-fill-color:transparent]"
    >
      <h1 className="font-semibold text-5xl lg:text-8xl max-w-sm tracking-tight">
        Only in Career
      </h1>
      <h2 className="font-medium text-3xl md:text-4xl max-w-md tracking-tight">
        When the sun fades and the neon glows, everyone has something to gain
        <br />- and more to learn.
      </h2>
    </section>
  );
}
