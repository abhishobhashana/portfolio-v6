import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  const lineAnimation = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5 },
    },
  };

  return (
    <svg
      width="100"
      height="150"
      viewBox="0 0 606 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="150" height="150" fill="white" />
      <motion.line
        x1="76"
        y1="100"
        x2="76"
        y2="150"
        stroke="black"
        strokeWidth="2"
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
      />

      <rect x="152" width="150" height="150" fill="white" />
      <motion.line
        x1="252"
        y1="51"
        x2="202"
        y2="51"
        stroke="black"
        strokeWidth="2"
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 1 }}
      />
      <motion.line
        x1="252"
        y1="101"
        x2="202"
        y2="101"
        stroke="black"
        strokeWidth="2"
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6, duration: 1 }}
      />

      <rect x="304" width="150" height="150" fill="white" />
      <motion.line
        x1="378"
        y1="150"
        x2="378"
        y2="100"
        stroke="black"
        strokeWidth="2"
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9, duration: 1 }}
      />
      <motion.line
        x1="378"
        y1="50"
        x2="378"
        y2="0"
        stroke="black"
        strokeWidth="2"
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, duration: 1 }}
      />

      <rect x="456" width="150" height="150" fill="white" />
      <motion.line
        x1="606"
        y1="76"
        x2="556"
        y2="76"
        stroke="black"
        strokeWidth="2"
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5, duration: 1 }}
      />
      <motion.line
        x1="506"
        y1="76"
        x2="456"
        y2="76"
        stroke="black"
        strokeWidth="2"
        variants={lineAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.8, duration: 1 }}
      />
    </svg>
  );
}
