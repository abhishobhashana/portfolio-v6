import HeroIntro from "@/components/Animation/HeroIntro";
import ExpandableJobsCard from "@/components/base/ExpandableJobsCard";
import { createSEO } from "@/lib/seo";
import { IoLogoReact } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";

export const metadata = createSEO({
  title: "Experience",
  description: "Learn more about my experience, skills, and background.",
});

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <HeroIntro
        lines={[
          "Built across teams.",
          "Scaled across products.",
          "Optimized for performance.",
          "Designed for impact.",
        ]}
      />

      <div className="w-full h-full bg-white dark:bg-black">
        <div className="w-full lg:max-w-4xl md:max-w-2xl grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto gap-6 lg:pt-20 md:pt-20 py-12 px-4">
          <div className="lg:col-span-2 md:col-span-2">
            <ExpandableJobsCard
              heightClass="lg:h-86 md:h-86 h-124"
              bgClass="bg-blue"
              durationClass="text-secondary"
              subtitleClass="text-secondary"
              iconClass="text-white dark:text-secondary"
              duration="2022 - Present"
              icon={<IoLogoReact />}
              title="Techflitter"
              link="https://thetfpl.com"
              subTitle="Senior React.js Developer"
              description={
                <>
                  Led a team of 5 engineers, defining{" "}
                  <span className="text-white">
                    React architecture standards
                  </span>{" "}
                  and structured code review practices - delivering{" "}
                  <span className="text-white">
                    99% on-time feature releases
                  </span>{" "}
                  while improving cross-team code quality.
                  <br />
                  <br />
                  Architected{" "}
                  <span className="text-white">
                    reusable component libraries
                  </span>{" "}
                  and performance optimizations (lazy loading, code splitting,
                  memoization), reducing UI duplication by{" "}
                  <span className="text-white">35%</span> and improving bundle
                  performance by <span className="text-white">40%</span>.
                </>
              }
            />
          </div>

          <ExpandableJobsCard
            heightClass="lg:h-140 md:h-124 h-130"
            bgClass="bg-blue"
            durationClass="text-secondary"
            subtitleClass="text-secondary"
            iconClass="text-white dark:text-secondary"
            duration="2021 - 2022"
            icon={<IoLogoReact />}
            title="Rex Innovation"
            link="https://rexinnovation.in"
            subTitle="React.js Developer"
            description={
              <>
                Contributed across the{" "}
                <span className="text-white">full SDLC</span> in an Agile
                environment - translating client requirements into{" "}
                <span className="text-white">scalable frontend solutions</span>{" "}
                and accelerating delivery through structured biweekly demos and
                iterative releases.
                <br />
                <br />{" "}
                <span className="text-white">
                  reusable React component systems
                </span>{" "}
                using modern patterns (hooks, context, state management) and
                implemented{" "}
                <span className="text-white">robust error boundaries</span>,
                reducing application crashes by{" "}
                <span className="text-white">85%</span> and improving production
                stability.
              </>
            }
          />

          <ExpandableJobsCard
            heightClass="lg:h-140 md:h-124 h-120"
            bgClass="bg-yellow-light dark:bg-yellow-dark"
            durationClass="text-secondary"
            subtitleClass="text-secondary"
            iconClass="text-white dark:text-secondary"
            duration="2019 - 2021"
            icon={<RiJavascriptFill />}
            title="Novatrice"
            subTitle="Javascript Developer Intern"
            description={
              <>
                Developed{" "}
                <span className="text-white">dynamic web applications</span>{" "}
                using JavaScript, DOM manipulation, jQuery, and AJAX -
                structuring code with modular patterns for maintainability and
                scalability.
                <br />
                <br />
                Delivered{" "}
                <span className="text-white">
                  responsive, cross-browser compatible interfaces
                </span>{" "}
                using CSS Grid, Flexbox, and media queries, ensuring consistent
                user experience across devices and environments.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
