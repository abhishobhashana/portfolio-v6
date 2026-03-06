"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeroIntro({ lines = [""], className = "" }) {
  const [shrink, setShrink] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrink(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const routeBgClasses: any = {
    "/": "bg-white-200 dark:bg-secondary",
    "/experience": "bg-white dark:bg-black",
    "/projects": "bg-white-200 dark:bg-secondary",
    "/skills": "bg-white dark:bg-black",
    "/education": "bg-white-200 dark:bg-secondary",
  };

  const bgClass = routeBgClasses[pathname] || "bg-secondary text-white";

  return (
    <motion.div
      initial={{ y: "-100%", height: "100vh" }}
      animate={shrink ? { y: 0, height: "auto" } : { y: 0, height: "100vh" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      className={`w-full flex items-center justify-center overflow-hidden transition-colors duration-500 ${bgClass} ${className}`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
              delayChildren: 1,
            },
          },
        }}
        className="lg:max-w-xl md:max-w-sm max-w-80 mx-auto font-semibold lg:text-4xl text-2xl lg:py-20 md:py-20 p-4 py-12"
      >
        {lines.map((line, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
