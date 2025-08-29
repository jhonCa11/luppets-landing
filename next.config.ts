import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [400, 600, 800, 1024, 1200],
    imageSizes: [400, 600, 800, 1024, 1200],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },
};

export default nextConfig;
