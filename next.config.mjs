/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['openweathermap.org'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
    ],
  },
};

export default nextConfig;
