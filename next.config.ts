import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Image optimization — use unoptimized for static export or local dev without a custom loader.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
