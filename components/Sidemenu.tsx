"use client";

import { usePathname } from "next/navigation";
import { IoStarOutline } from "react-icons/io5";
import Nav from "./base/Nav";
import Profile from "./base/Profile";

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <nav className="lg:flex hidden md:w-[19.5%] w-full fixed lg:top-0 bottom-0 flex-col lg:justify-between justify-end gap-0.5 md:h-[calc(100dvh-1.5rem)] h-full lg:m-2.5 lg:mr-0 p-2.5 bg-gray-100 dark:lg:bg-secondary rounded-2xl shadow-md">
      <div>
        <IoStarOutline className="mb-8" />
        <Nav />
      </div>

      <Profile />
    </nav>
  );
}
