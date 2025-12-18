import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aaronheine.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'aaronheine.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
