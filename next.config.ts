import type { NextConfig } from "next";

const basePath = '/last-man-prem-web';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs', // Use docs folder instead of .next
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? basePath : '', // Only use basePath in production
  assetPrefix: process.env.NODE_ENV === 'production' ? basePath : '', // Only use assetPrefix in production
};

export default nextConfig;
