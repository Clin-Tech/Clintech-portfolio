/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    domains: ["img.youtube.com", "i.ytimg.com"],
  },
  compress: true,
};

export default nextConfig;
