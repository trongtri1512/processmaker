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
      // Proxy Read-Heavy API calls to Go backends
      {
        source: "/laravel/api/1.0/tasks/:path*",
        destination: `${process.env.GO_INTERNAL_URL || "http://api-go:3000"}/api/1.0/tasks/:path*`,
      },
      {
        source: "/laravel/api/1.0/requests/:path*",
        destination: `${process.env.GO_INTERNAL_URL || "http://api-go:3000"}/api/1.0/requests/:path*`,
      },
      {
        source: "/laravel/api/1.0/users/:path*",
        destination: `${process.env.GO_INTERNAL_URL || "http://api-go:3000"}/api/1.0/users/:path*`,
      },
      {
        source: "/laravel/api/1.0/groups/:path*",
        destination: `${process.env.GO_INTERNAL_URL || "http://api-go:3000"}/api/1.0/groups/:path*`,
      },
      // Proxy everything else to Laravel backend
      {
        source: "/laravel/:path*",
        destination: `${process.env.LARAVEL_INTERNAL_URL || "http://api:80"}/:path*`,
      },
    ];
  },
};

export default nextConfig;
