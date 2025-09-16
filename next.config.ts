import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: '/blog',
  assetPrefix: '/blog',
  trailingSlash: false,
};

export default nextConfig;
