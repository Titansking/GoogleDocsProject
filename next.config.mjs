/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  onDemandEntries: {
    // Keep compiled entries in memory longer to prevent chunk timeouts
    maxInactiveAge: 24 * 60 * 60 * 1000,
    pagesBufferLength: 20,
  },
  webpack: (config) => {
    // Increase chunk load timeout from 12s to 60s to prevent ChunkLoadError
    config.output = config.output || {};
    config.output.chunkLoadTimeout = 60000;
    return config;
  },
};

export default nextConfig;
