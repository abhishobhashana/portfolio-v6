import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://abhishobhashana.vercel.app", priority: 1 },
    { url: "https://abhishobhashana.vercel.app/experience", priority: 0.5 },
    { url: "https://abhishobhashana.vercel.app/projects", priority: 0.5 },
    { url: "https://abhishobhashana.vercel.app/skills", priority: 0.5 },
    { url: "https://abhishobhashana.vercel.app/education", priority: 0.5 },
    { url: "https://abhishobhashana.vercel.app/resume.pdf", priority: 0.5 },
  ];
}
