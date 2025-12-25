/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.overseascommercegurukul.com",
      },
      {
        protocol: "https",
        hostname: "overseascommercegurukul.com",
      },
      {
        protocol: "https",
        hostname: "themeholy.com",
      },
    ],
  },
};

export default nextConfig;
