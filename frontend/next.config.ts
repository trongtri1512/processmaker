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
      // All API calls go to Go API
      {
        source: "/laravel/:path*",
        destination: `${process.env.GO_INTERNAL_URL || process.env.LARAVEL_INTERNAL_URL || "http://api-go:3000"}/:path*`,
      },
    ];
  },
};

export default nextConfig;
