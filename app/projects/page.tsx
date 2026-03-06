import HeroIntro from "@/components/Animation/HeroIntro";
import Projects from "@/components/Projects";
import { createSEO } from "@/lib/seo";

export const metadata = createSEO({
  title: "Projects",
  description:
    "Explore projects built by Abhi Shobhashana using React, Vue, JavaScript, TypeScript, and other modern web technologies",
});

export default function page() {
  // type User = {
  //   id: number;
  //   name: string;
  //   description: string;
  //   year: number;
  // };

  // const users: User[] = [
  //   {
  //     id: 1,
  //     name: "Clock",
  //     description:
  //       "Location-aware clock application allowing users to search cities and view real-time time zones with dynamic clock and integrated map visualization.",
  //     year: 2025,
  //   },
  //   {
  //     id: 2,
  //     name: "Weather",
  //     description:
  //       "Weather application enabling users to search cities and view realtime weather data with location-specific forecasts.",
  //     year: 2025,
  //   },
  //   {
  //     id: 3,
  //     name: "Maps",
  //     description:
  //       "An interactive map project allowing users to search locations, view detailed information and switch between different map types for a personalized navigation experience.",
  //     year: 2024,
  //   },
  // ];

  // const columns: {
  //   key: keyof User;
  //   header: string;
  //   sortable?: boolean;
  // }[] = [
  //   { key: "name", header: "Name", sortable: true },
  //   { key: "description", header: "Description" },
  //   { key: "year", header: "Year", sortable: true },
  // ];

  const projects = [
    {
      title: "Electric Vehicle Dashboard",
      role: "Senior React.js Developer",
      descriprtion:
        "Developed role-based dashboard for 220+ cities and 78K+ users, delivering high performance application experience",
      descriprtion_sec:
        "Built real-time vehicle tracking, and an interactive chatbot using WebSocket with data visualization using Deck.gl layers",
      tech: "React.js, TypeScript, Redux, Jest, WebSocket, Stripe",
      showIcon: true,
    },
    {
      title: "Food Management System",
      role: "Senior React.js Developer",
      descriprtion:
        "Developed scalable platform from scratch used by 2.5K+ restaurant owners, enabling seamless onboarding, core operations, and analytics with insightful data visualizations by creating custom charts without relying on external library",
      descriprtion_sec:
        "Owned manual deployments initially, improved deployments by implementing automated CI/CD pipelines",
      tech: " Vue.js, Vuex, TypeScript, AWS, CI/CD",
      showIcon: true,
    },
    {
      title: "Food Ordering System",
      role: "Senior React.js Developer",
      descriprtion:
        "Designed engaging listing experience of 75+ restaurants, adding personalized recommendations based on user activity",
      descriprtion_sec:
        "Resolved billing failures by creating payment retries and initial card validations, resulting 98% successful payment rate",
      tech: "Vue.js, Vuex, TypeScript, Stripe, AWS, CI/CD",
      showIcon: true,
    },
    {
      title: "IoT Device Dashboard System",
      role: "React.js Developer",
      descriprtion:
        "Created custom chart components without relying on external libraries, achieving 20% faster data visualizations",
      descriprtion_sec:
        "Designed engaging 3D user experience of IoT device features and details using framer motion animations",
      tech: "React.js, TypeScript, Redux, React Testing Library, WebSocket, Stripe",
      showIcon: true,
    },
    {
      title: "Solar Monitoring System",
      role: "JavaScript Developer Intern",
      descriprtion:
        "Developed dynamic forms fully dependent on backend API response, accelerating development efficiency by 40%",
      descriprtion_sec:
        "Enhanced Lighthouse accessibility score from 64 to 88 by implementing semantic HTML and keyboard navigations",
      tech: "JavaScript, jQuery, HTML, CSS",
      showIcon: true,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <HeroIntro
        lines={[
          "Architected for scale.",
          "Optimized for speed.",
          "Built with modern stacks.",
          "Shipped with impact.",
        ]}
      />

      <div className="lg:p-16 md:p-16 py-8 px-4">
        {/* <Table data={users} columns={columns} /> */}

        <Projects projects={projects} />
      </div>
    </div>
  );
}
