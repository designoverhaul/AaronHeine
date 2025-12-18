import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.aaronheine.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'wp.aaronheine.com',
        pathname: '/wp-content/uploads/**',
      },
      // Keep old domain for backwards compatibility during transition
      {
        protocol: 'https',
        hostname: 'aaronheine.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
