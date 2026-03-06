"use client";

import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpandableCard({
  icon = <></>,
  title = "",
  description = <></>,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative w-full lg:h-68 h-50 flex flex-col justify-between lg:p-8 p-6 bg-white dark:bg-secondary rounded-2xl overflow-hidden"
    >
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
            <div className="lg:text-7xl text-5xl text-gray">{icon}</div>
            <h3 className="font-semibold lg:text-2xl text-xl">{title}</h3>
          </motion.div>
        ) : (
          <motion.div
            key="description"
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            transition={{ duration: 0.35 }}
            className="flex items-center h-full"
          >
            <p className="text-gray font-semibold text-xl">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-4 right-4 cursor-pointer z-20"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <BsFillPlusCircleFill className="text-4xl text-gray" />
      </motion.div>
    </motion.div>
  );
}
