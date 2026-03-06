"use client";

import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Modal from "./base/Modal";

export default function Projects({ projects }: any) {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <div className="lg:p-16 md:p-8 py-8 px-4 max-w-4xl mx-auto lg:h-[calc(100vh-22rem)] flex flex-col place-items-start place-content-center">
        {projects.map((project: any, idx: number) => (
          <div
            key={idx}
            className="w-full flex items-center cursor-pointer last:border-b-0 border-b-[0.1px] border-gray py-4"
          >
            <div className="w-full flex flex-col items-start justify-between">
              <h3 className="lg:text-2xl text-xl font-semibold">
                {project.title}
              </h3>
              <p className="lg:font-semibold font-medium text-gray">
                {project.role}
              </p>
            </div>

            {project.showIcon && (
              <BsFillPlusCircleFill
                onClick={() => setSelectedProject(project)}
                className="text-4xl text-gray"
              />
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="relative flex flex-col gap-4">
            <div className="sticky top-0 flex items-center justify-between bg-white-200 dark:bg-secondary pb-4">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <BsFillPlusCircleFill
                onClick={() => setSelectedProject(null)}
                className="cursor-pointer rotate-45 text-4xl text-gray"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-gray font-medium">
                  {selectedProject.descriprtion}
                </p>
                <p className="text-gray font-medium">
                  {selectedProject.descriprtion_sec}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-secondary dark:text-white/80 text-lg font-semibold">
                  Information
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col last:border-b-0">
                    <p className="font-semibold text-sm text-gray">Role</p>
                    <p className="font-semibold text-black/80 dark:text-white/60">
                      {selectedProject.role}
                    </p>
                  </div>
                  <div className="flex flex-col last:border-b-0">
                    <p className="font-semibold text-sm text-gray">
                      Technology
                    </p>
                    <p className="font-semibold text-black/80 dark:text-white/60">
                      {selectedProject.tech}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
