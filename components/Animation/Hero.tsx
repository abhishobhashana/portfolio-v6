"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const scaleRaw = useTransform(scrollY, [0, 100], [1, 0.75]);
  const blurRaw = useTransform(scrollY, [100, 300], [0, 12]);
  const opacityRaw = useTransform(scrollY, [100, 300], [1, 0]);

  const scale = useSpring(scaleRaw, { stiffness: 120, damping: 30 });
  const filter = useMotionTemplate`blur(${blurRaw}px)`;
  const opacity = useSpring(opacityRaw, { stiffness: 120, damping: 30 });
  const bg = useTransform(scrollY, [0, 300], ["rgb(92, 184, 255)", "#000000"]);

  return (
    <>
      <motion.div
        className="fixed inset-0 top-11 h-[calc(100vh-2.75rem)] z-1 flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        <motion.div
          className="lg:max-w-3xl md:max-w-xl mx-auto flex flex-col justify-center gap-10 lg:p-20 p-10"
          style={{
            scale,
            filter,
            opacity,
          }}
        >
          <h3 className="lg:text-6xl md:text-5xl text-4xl font-semibold text-white">
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

          <ul className="flex justify-between text-xl font-semibold text-indigo-400">
            <li>
              <a
                href="tel:+919099259846"
                className="hover:text-white transition"
              >
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
          </ul>
        </motion.div>
      </motion.div>

      <div style={{ height: "100vh" }} />
    </>
  );
}
