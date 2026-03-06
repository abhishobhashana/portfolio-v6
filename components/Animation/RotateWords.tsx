"use client";

import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";

type props = {
  text?: string;
  words: string[];
  interval?: number;
  delay?: number;
  className?: string;
};

export const RotateWords = ({
  text,
  words,
  interval = 4000,
  delay = 0,
  className = "",
}: props) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (words.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay,
        }}
        className={`inline-flex items-center gap-2 ${className}`}
      >
        {text && <span>{text}</span>}

        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay,
            }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </AnimatePresence>
  );
};
