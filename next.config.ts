import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Static Site Generation — produces a fully static export.
   * Optimized for SEO, fast loading, and high performance.
   * Disables server-side features (API routes, middleware, etc.)
   */
  output: "export",

  /**
   * Image optimization — use unoptimized for static export.
   * For production, consider using a CDN-based image loader.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
