import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  async rewrites() {
    return [
      // Proxy API calls to Laravel backend (server-side only)
      {
        source: "/laravel/:path*",
        destination: `${process.env.LARAVEL_INTERNAL_URL || "http://api:80"}/:path*`,
      },
    ];
  },
};

export default nextConfig;
