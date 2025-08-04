import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: "/cat-app",
  assetPrefix: "/cat-app/",
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
