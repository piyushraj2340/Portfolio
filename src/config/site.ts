import { profile } from "@/content/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.NODE_ENV === "production"
    ? "https://www.piyushraj.me"
    : "http://localhost:3000");

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | ${profile.role}`,
  description:
    "Software Engineer with 2 years of experience specializing in C#, ASP.NET Core, React, and Azure. Building robust, scalable web applications and backend systems.",
  url: siteUrl,
  location: profile.location,
  email: "piyushraj2340@gmail.com",
  resumeUrl: "https://www.piyushraj.me/resume/piyush_raj_resume.pdf",
  // New filename busts LinkedIn's cached thumbnail. 2x 1200x627 for a sharper 160px shrink.
  ogImage: "/og-images/og-mark.jpg",
  ogImageWidth: 2400,
  ogImageHeight: 1254,
  locale: "en_US",
};

export const absoluteOgImage = new URL(siteConfig.ogImage, `${siteConfig.url}/`).href;
