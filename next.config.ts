import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development"

const nextConfig: NextConfig = {
  output: isDev ? undefined : "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
