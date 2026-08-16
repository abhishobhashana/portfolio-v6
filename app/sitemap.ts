import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://abhishobhashanav6.vercel.app", priority: 1 },
    { url: "https://abhishobhashanav6.vercel.app/experience", priority: 0.5 },
    { url: "https://abhishobhashanav6.vercel.app/projects", priority: 0.5 },
    { url: "https://abhishobhashanav6.vercel.app/skills", priority: 0.5 },
    { url: "https://abhishobhashanav6.vercel.app/education", priority: 0.5 },
    { url: "https://abhishobhashanav6.vercel.app/resume.pdf", priority: 0.5 },
  ];
}
