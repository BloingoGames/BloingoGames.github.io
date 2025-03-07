import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  assetPrefix: "./", // Ensures assets load correctly
};

export default nextConfig;
