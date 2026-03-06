"use client";

import { motion, useInView } from "framer-motion";
import * as React from "react";

type BlurInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export const BlurIn = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
}: BlurInProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(4px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration, delay }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
