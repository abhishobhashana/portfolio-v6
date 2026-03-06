"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function HeroScroll() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const x = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const smoothScale = useSpring(scale, {
    stiffness: 120,
    damping: 20,
  });
  const smoothX = useSpring(x, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <div ref={heroRef} className="relative h-[200vh]">
      <div className="sticky top-11 h-[calc(100vh-2.75rem)] flex items-center bg-indigo-200 overflow-hidden">
        <motion.div
          style={{ scale: smoothScale }}
          className="lg:max-w-3xl md:max-w-xl mx-auto flex flex-col justify-center gap-6 lg:p-20 p-10"
        >
          <h3 className="lg:text-6xl md:text-5xl text-4xl font-semibold text-indigo-900">
            Abhi Shobhashana
          </h3>

          <div>
            <p className="text-indigo-400 text-xl font-semibold">
              Senior Frontend Engineer with 5+ years of experience leading
              frontend architecture for large-scale React and Vue applications.
            </p>

            <p className="text-indigo-400 text-xl font-semibold mt-4">
              Proven track record of improving performance, building resilient
              UI systems, and delivering scalable real-time platforms.
            </p>
          </div>
        </motion.div>

        <motion.ul
          style={{ x: smoothX, opacity }}
          className="absolute right-0 top-0 h-full w-full md:w-1/5 flex flex-col justify-center gap-6 lg:p-20 md:p-5 p-10 lg:text-2xl md:text-2xl text-4xl font-semibold text-indigo-200 bg-indigo-400"
        >
          <li>
            <a href="tel:+1234567890" className="hover:text-white transition">
              Phone
            </a>
          </li>

          <li>
            <a
              href="mailto:abhiashobhashana@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/abhishobhashana"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://github.com/abhishobhashana"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </li>
        </motion.ul>
      </div>
    </div>
  );
}
