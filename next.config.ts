import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-sanity"],
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/fundacion",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/webp"],
    deviceSizes: [400, 600, 800, 1024, 1200],
    imageSizes: [400, 600, 800, 1024, 1200],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
