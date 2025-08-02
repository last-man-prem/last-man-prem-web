import type { NextConfig } from "next";

const basePath = '/last-man-prem-web';
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: isProduction ? 'docs' : '.next', // Use docs folder only for production builds
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for GitHub Pages
  basePath: isProduction ? basePath : '', // Only use basePath in production
  assetPrefix: isProduction ? basePath : '', // Only use assetPrefix in production
};

export default nextConfig;
