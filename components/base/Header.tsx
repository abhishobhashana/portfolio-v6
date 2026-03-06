"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import New from "../Logo/New";
import { useRouter } from "next/navigation";

export default function Header() {
  const NAV_DATA = [
    { id: "experience", name: "Experience", href: "/experience" },
    { id: "projects", name: "Projects", href: "/projects" },
    { id: "skills", name: "Skills", href: "/skills" },
    { id: "education", name: "Education", href: "/education" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const routeBgClasses: any = {
    "/": "bg-white dark:bg-black",
    "/experience": "bg-white dark:bg-black",
    "/projects": "bg-white-200 dark:bg-secondary",
    "/skills": "bg-white dark:bg-black",
    "/education": "bg-white-200 dark:bg-secondary",
  };

  const bgClass = routeBgClasses[pathname] || "bg-white dark:bg-black";

  const handleMobileNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setMobileOpen(false);

      setTimeout(() => {
        router.push(href);
      }, 400);
    }
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xl"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <header className={`fixed top-0 z-50 w-full ${bgClass}`}>
        {/* Desktop */}
        <nav className="mx-auto hidden h-11 max-w-4xl items-center px-45 lg:flex">
          <div className=" w-full flex items-center justify-between">
            <Link href="/">
              <New />
            </Link>

            {NAV_DATA.map((item) => (
              <Link key={item.id} href={item.href}>
                <p className="cursor-pointer text-xs font-light">{item.name}</p>
              </Link>
            ))}

            <a
              className="cursor-pointer text-xs font-light"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile */}
        <nav className="flex h-11 w-full items-center justify-between pl-4 lg:hidden">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <New />
          </Link>

          {/* Hamburger */}
          <div
            className="menu-container relative p-6 cursor-pointer"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-200 ${
                mobileOpen ? "rotate-45" : ""
              }`}
              style={{ transitionDelay: mobileOpen ? "200ms" : "0ms" }}
            >
              <div
                className={`bg-black dark:bg-white rounded h-px w-4 transform transition-transform duration-200`}
                style={{
                  transform: mobileOpen ? "none" : "translateY(-4px)",
                  transitionDelay: mobileOpen ? "0ms" : "200ms",
                }}
              ></div>
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-200 ${
                mobileOpen ? "-rotate-45" : ""
              }`}
              style={{ transitionDelay: mobileOpen ? "200ms" : "0ms" }}
            >
              <div
                className={`bg-black dark:bg-white rounded h-px w-4 transform transition-transform duration-200`}
                style={{
                  transform: mobileOpen ? "none" : "translateY(4px)",
                  transitionDelay: mobileOpen ? "0ms" : "200ms",
                }}
              ></div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100dvh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`"overflow-hidden ${bgClass} lg:hidden"`}
            >
              <motion.div
                className="flex flex-col gap-6 px-12 py-10"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {NAV_DATA.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleMobileNav(e, item.href)}
                  >
                    <motion.p
                      variants={{
                        hidden: {
                          opacity: 0,
                          // y: 20,
                          filter: "blur(6px)",
                        },
                        show: {
                          opacity: 1,
                          // y: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.5,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        },
                      }}
                      className="text-[26px] font-medium"
                    >
                      {item.name}
                    </motion.p>
                  </Link>
                ))}

                <motion.a
                  variants={{
                    hidden: {
                      opacity: 0,
                      filter: "blur(6px)",
                    },
                    show: {
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                  className="text-[26px] font-medium"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
