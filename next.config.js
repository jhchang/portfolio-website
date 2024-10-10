/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: [
      '@react-email/render',
      '@react-email/tailwind',
    ],
  },
};

module.exports = nextConfig;
