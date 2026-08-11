import { profile } from "@/content/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.piyushraj.me";

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | ${profile.role}`,
  description:
    "Software Engineer with 2 years of experience specializing in C#, ASP.NET Core, React, and Azure. Building robust, scalable web applications and backend systems.",
  url: siteUrl,
  location: profile.location,
  email: "piyushraj2340@gmail.com",
  resumeUrl: "https://www.piyushraj.me/resume/piyush_raj_resume.pdf",
  // JPEG first — LinkedIn / WhatsApp often skip WebP and then show text-only cards
  ogImage: "/og-images/og-image.jpg",
  ogImagePng: "/og-images/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  locale: "en_US",
};

export const absoluteOgImage = new URL(siteConfig.ogImage, `${siteConfig.url}/`).href;
export const absoluteOgImagePng = new URL(siteConfig.ogImagePng, `${siteConfig.url}/`).href;
