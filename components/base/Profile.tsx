"use client";

import { IoPerson } from "react-icons/io5";

export default function Profile({ className = "", isMobile = false }) {
  return (
    <div className={`${className} flex gap-2 px-2.5`}>
      <div className="p-4 bg-secondary rounded-full">
        <IoPerson className="text-lg" />
      </div>
      {!isMobile && (
        <div className="flex flex-col">
          <p className="font-medium">Abhi Shobhashana</p>
          <p className="text-gray">Senior React.js Developer</p>
        </div>
      )}
    </div>
  );
}
