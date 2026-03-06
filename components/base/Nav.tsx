"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoStarOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    setIsMobile(media.matches);

    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobile;
}

export default function Nav({ className = "" }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const menuItems = [
    { name: "Summary", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
  ];

  return (
    <motion.div
      key={pathname}
      initial={false}
      animate={isMobile ? { scale: [1, 0.96, 1] } : { scale: 1 }}
      transition={isMobile ? { duration: 0.25, ease: "easeOut" } : {}}
      className={`${className}
        flex lg:flex-col w-full
        ${
          isMobile
            ? "bg-transparent backdrop-blur-xs rounded-full shadow-lg p-1 border border-gray"
            : ""
        }
      `}
    >
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link key={item.name} href={item.href} className={`relative flex-1`}>
            <div
              className={`relative flex lg:flex-row flex-col items-center lg:justify-start justify-center`}
            >
              {isMobile && isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/20 rounded-full border border-gray"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <motion.div
                whileTap={isMobile ? { scale: 0.85 } : {}}
                animate={isMobile ? { scale: isActive ? 1.1 : 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className={`relative z-10 w-full flex lg:flex-row flex-col items-center lg:gap-3 gap-1 px-3 py-2 lg:text-base text-xs font-medium
                  ${
                    isActive
                      ? "md:bg-gray/20 rounded-lg text-blue"
                      : "text-black dark:text-white"
                  }`}
              >
                <IoStarOutline className="text-lg" />
                <p>{item.name}</p>
              </motion.div>
            </div>
          </Link>
        );
      })}
    </motion.div>
  );
}
