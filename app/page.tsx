// import { BlurIn } from "@/components/Animation/BlurIn";
// import { TextFade } from "@/components/Animation/TextFade";
// import { H1 } from "@/components/Title/H1";

import Hero from "@/components/Animation/Hero";
import ExpandableCard from "@/components/base/ExpandableCard";
import { IoSpeedometer } from "react-icons/io5";
import { LuNetwork, LuRefreshCcw } from "react-icons/lu";
import { MdErrorOutline } from "react-icons/md";

// export default function Home() {
//   return (
//     <main className="h-full w-fit min-h-[calc(100dvh-2.75rem)] flex flex-col justify-center gap-5 mx-auto mt-11 p-6 md:p-8 lg:p-34">
//       <div className="flex gap-4">
//         <BlurIn className="font-semibold">
//           <H1>Abhi</H1>
//         </BlurIn>
//         <BlurIn className="font-semibold" delay={0.5}>
//           <H1>Shobhashana</H1>
//         </BlurIn>
//       </div>

//       <TextFade direction="up" delay={1} className="max-w-4xl">
//         <h3 className="lg:text-3xl md:text-2xl text-xl font-medium">
//           React.js Developer
//         </h3>
//       </TextFade>

//       <TextFade direction="up" delay={1.2} className="max-w-4xl">
//         <h3 className="lg:text-xl md:text-lg text-md text-grey font-medium">
//           Experienced developer specializing in building fast, scalable, and
//           modern web applications.
//         </h3>
//       </TextFade>
//     </main>
//   );
// }

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="bg-white-200 dark:bg-black flex flex-col z-2">
        <div className="w-full mx-auto lg:py-20 md:py-20 p-4 py-12">
          <p className="lg:max-w-2xl md:max-w-sm max-w-80 mx-auto font-semibold lg:text-4xl text-2xl">
            Engineering Interfaces That Scale.
            <br />
            Built for resilience.
            <br />
            Ready for production.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 lg:p-20 md:p-16 p-4 lg:pt-0 md:pt-0 pt-0">
          <ExpandableCard
            icon={<IoSpeedometer />}
            title="Engineered High-Performance Experience."
            description={
              <>
                Engineered scalable frontend systems serving{" "}
                <span className="text-black dark:text-white">
                  78K+ active users
                </span>
                , optimizing load time, rendering efficiency, and real-time
                responsiveness.
              </>
            }
          />

          <ExpandableCard
            icon={<LuRefreshCcw />}
            title="35% Faster Development with Reusable Systems"
            description={
              <>
                Built a{" "}
                <span className="text-black dark:text-white">
                  scalable component architecture
                </span>{" "}
                and unified icon library, accelerating feature delivery and
                ensuring long-term UI consistency.
              </>
            }
          />

          <ExpandableCard
            icon={<LuNetwork />}
            title="Centralized API Architecture"
            description={
              <>
                Developed a{" "}
                <span className="text-black dark:text-white">
                  single API management layer
                </span>{" "}
                in <span className="text-black dark:text-white">Redux</span> to
                simplify complex data flows, reduce redundant calls, and
                maintain predictable state across modules.
              </>
            }
          />

          <ExpandableCard
            icon={<MdErrorOutline />}
            title="85% Reduction in UI Failures"
            description={
              <>
                Implemented{" "}
                <span className="text-black dark:text-white">
                  robust error boundaries
                </span>{" "}
                and fallback strategies to improve production stability and user
                trust.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
