import { createSEO } from "@/lib/seo";
import HeroIntro from "@/components/Animation/HeroIntro";

export const metadata = createSEO({
  title: "Education",
  description: "Learn more about my experience, skills, and background.",
});

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <HeroIntro
        lines={[
          "Learn with purpose.",
          "Build with discipline.",
          "Grow with clarity.",
          "Graduate with confidence.",
        ]}
      />
      <div className="lg:p-16 md:p-16 py-8 px-4 max-w-4xl mx-auto lg:h-[calc(100vh-22rem)] flex flex-col place-items-start place-content-center">
        <div className="flex flex-col">
          <div className="grid lg:grid-cols-4 lg:py-10 py-6 border-b-[0.1px] border-gray">
            <p className="col-span-1 font-semibold text-2xl">BTech.</p>
            <div className="col-span-3 flex flex-col lg:mt-0 mt-2">
              <p className="font-semibold text-gray">Computer Engineering</p>
              <a
                href="https://charusat.ac.in"
                target="_blank"
                className="font-semibold lg:text-2xl text-xl text-secondary dark:text-white-200 hover:text-blue dark:hover:text-white transition"
              >
                Charotar University of Science and Technology
              </a>
              <p className="uppercase font-semibold text-gray">2017 - 2020</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 lg:py-10 py-6">
            <p className="col-span-1 font-semibold text-2xl">Diploma</p>
            <div className="col-span-3 flex flex-col lg:mt-0 mt-2">
              <p className="font-semibold text-gray">Computer Engineering</p>
              <a
                href="https://nobleuniversity.ac.in/"
                target="_blank"
                className="font-semibold lg:text-2xl text-xl text-secondary dark:text-white-200 hover:text-blue dark:hover:text-white transition"
              >
                Noble University
              </a>
              <p className="uppercase font-semibold text-gray">2014 - 2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
