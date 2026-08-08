import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

/** Stable lastModified — avoid regenerating a new date on every build. */
const LAST_CONTENT_UPDATE = new Date("2026-08-08");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
