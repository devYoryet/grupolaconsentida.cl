import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    staticGenerationRetryCount: 0,
  },
};

export default nextConfig;
