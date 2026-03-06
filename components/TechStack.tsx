"use client";

import { motion, Variants } from "framer-motion";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript, BiLogoRedux } from "react-icons/bi";
import {
  IoLogoReact,
  IoLogoVue,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io5";
import { SiStorybook, SiVite, SiWebpack } from "react-icons/si";

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function TechStack() {
  const icons = [
    <RiJavascriptFill
      className="lg:text-8xl md:text-6xl text-6xl"
      title="JavaScript"
    />,
    <BiLogoTypescript
      className="lg:text-8xl md:text-6xl text-6xl"
      title="TypeScript"
    />,
    <IoLogoReact
      className="lg:text-8xl md:text-6xl text-6xl"
      title="React.js"
    />,
    <IoLogoVue className="lg:text-7xl md:text-5xl text-5xl" title="Vue.js" />,
    <BiLogoRedux
      className="lg:text-8xl md:text-6xl text-6xl"
      title="Redux.js"
    />,
    <RiNextjsFill
      className="lg:text-7xl md:text-5xl text-6xl"
      title="Next.js"
    />,
    <IoLogoHtml5 className="lg:text-7xl md:text-5xl text-6xl" title="HTML5" />,
    <IoLogoCss3 className="lg:text-7xl md:text-5xl text-6xl" title="CSS3" />,
    <SiStorybook
      className="lg:text-7xl md:text-5xl text-6xl"
      title="Storybook"
    />,
    <RiTailwindCssFill
      className="lg:text-7xl md:text-5xl text-6xl"
      title="TailwindCSS"
    />,
    <SiVite className="lg:text-7xl md:text-5xl text-6xl" title="Vite" />,
    <SiWebpack className="lg:text-7xl md:text-5xl text-6xl" title="Webpack" />,
  ];

  return (
    <motion.div initial="hidden" animate="show" className="contents">
      {icons.map((icon, index) => (
        <motion.div key={index} variants={item}>
          {icon}
        </motion.div>
      ))}
    </motion.div>
  );
}
