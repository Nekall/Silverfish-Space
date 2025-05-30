import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mineskin.eu",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
