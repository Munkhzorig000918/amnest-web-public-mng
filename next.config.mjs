/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Remove this in production and use proper image optimization
  },
};

export default nextConfig;
