import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a fully static site
  output: "export",
  // Generate directories for each route (e.g., /about/index.html)
  trailingSlash: true,
  // Disable built-in image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
