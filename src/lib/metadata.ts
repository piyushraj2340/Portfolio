import type { Metadata } from "next";
import {
  absoluteOgImage,
  absoluteOgImagePng,
  siteConfig,
} from "@/config/site";
import { seoContent } from "@/content/seo";
import { profile } from "@/content/profile";

const ogAlt = `${profile.name} — ${profile.role}. C#, ASP.NET Core, React, and Azure.`;

const ogImages: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: absoluteOgImage,
    secureUrl: absoluteOgImage,
    type: "image/jpeg",
    width: siteConfig.ogImageWidth,
    height: siteConfig.ogImageHeight,
    alt: ogAlt,
  },
  {
    url: absoluteOgImagePng,
    secureUrl: absoluteOgImagePng,
    type: "image/png",
    width: siteConfig.ogImageWidth,
    height: siteConfig.ogImageHeight,
    alt: ogAlt,
  },
];

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoContent.keywords,
  authors: [{ name: profile.name, url: siteConfig.url }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  // Manifest is injected after idle via DeferredManifest (keeps it off the critical path)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteOgImage],
    creator: "@piyushraj2340",
  },
  category: "technology",
};
