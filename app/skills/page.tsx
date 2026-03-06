import HeroIntro from "@/components/Animation/HeroIntro";
import TechStack from "@/components/TechStack";
import { createSEO } from "@/lib/seo";

export const metadata = createSEO({
  title: "Skills",
  description: "Learn more about my experience, skills, and background.",
});

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <HeroIntro
        lines={[
          "Designed with intention.",
          "Structured with discipline.",
          "Built with precision.",
          "Delivered with confidence.",
        ]}
      />

      <div className="lg:p-16 md:p-16 py-8 px-4 w-full h-[74vh] grid grid-cols-4 gap-y-6 text-indigo-200 bg-indigo-400 place-items-center place-content-center">
        <TechStack />
      </div>
    </div>
  );
}
