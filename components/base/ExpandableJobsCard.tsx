"use client";

import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpandableJobsCard({
  heightClass = "",
  bgClass = "",
  durationClass = "",
  subtitleClass = "",
  iconClass = "",
  icon = <></>,
  duration = "",
  title = "",
  link = "",
  subTitle = "",
  description = <></>,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`relative w-full ${heightClass} flex flex-col justify-between lg:p-8 p-6 ${bgClass ? bgClass : "bg-white dark:bg-black"} rounded-2xl overflow-hidden`}
    >
      <div className="absolute top-[-20] right-[-20] lg:p-6 lg:pt-8 lg:pr-8 p-4 pt-6 pr-6 text-8xl text-gray border-8 border-white dark:border-black rounded-3xl">
        <div className={`${iconClass} text-4xl text-gray`}>{icon}</div>
      </div>
      <h6
        className={`${durationClass} uppercase font-medium text-sm text-gray`}
      >
        {duration}
      </h6>
      {/* Prevent initial animation */}
      <AnimatePresence mode="wait" initial={false}>
        {!isOpen ? (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.35 }}
            className="flex flex-col justify-between h-full"
          >
            <h3
              className={`${subtitleClass} pt-4 max-w-4 font-semibold text-3xl`}
            >
              {subTitle}
            </h3>
            <a
              href={link}
              target="_blank"
              className="font-semibold text-3xl text-white/90 hover:text-white transition"
            >
              {title}
            </a>
            {/* <h3 className="font-semibold text-3xl">{title}</h3> */}
          </motion.div>
        ) : (
          <motion.div
            key="description"
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            transition={{ duration: 0.35 }}
            className="h-full overflow-y-auto hide-scrollbar mt-12 pr-2 flex flex-col justify-start"
          >
            <p className="text-black font-semibold text-xl">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-4 right-4 cursor-pointer z-20"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <BsFillPlusCircleFill className="text-4xl text-white dark:text-black" />
      </motion.div>
    </motion.div>
  );
}
