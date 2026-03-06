import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/base/Header";
import SmoothScroll from "@/components/Animation/SmoothScroll";
import ScrollToTop from "@/components/base/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Abhi Shobhashana",
    template: "%s",
  },
  description:
    "I build modern, fast web applications using Next.js and Tailwind.",
  keywords: [
    "portfolio",
    "frontend developer",
    "next.js",
    "react",
    "web development",
  ],
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Abhi Shobhashana",
    description: "Projects, blog posts, and contact info",
    url: "https://yourdomain.com",
    siteName: "Abhi Shobhashana",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhi Shobhashana",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhi Shobhashana",
    description: "Projects, blog posts, and contact info",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased tracking-tight`}>
        <SmoothScroll />
        <ScrollToTop />
        <Header />
        <div className="mt-10">{children}</div>
      </body>
    </html>
  );
}
