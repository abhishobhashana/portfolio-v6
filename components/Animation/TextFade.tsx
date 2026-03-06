"use client";

import { motion, useInView, Variants } from "framer-motion";
import * as React from "react";

export function TextFade({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
  delay = 0,
}: {
  direction: "up" | "down";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const FADE: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -18 : 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
