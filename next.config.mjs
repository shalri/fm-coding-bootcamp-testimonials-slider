/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // basePath: "/fm-coding-bootcamp-testimonials-slider",
  // assetPrefix: "/fm-coding-bootcamp-testimonials-slider",
};

export default nextConfig;
