import { profile } from "@/content/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | ${profile.role}`,
  description:
    "Software Engineer with 2 years of experience specializing in C#, ASP.NET Core, React, and Azure. Building robust, scalable web applications and backend systems.",
  url: siteUrl,
  location: profile.location,
  email: "piyushraj2340@gmail.com",
  resumeUrl: "/resume/piyush_raj_resume.pdf",
  ogImage: "/og-images/og-image.webp",
  locale: "en_US",
};
