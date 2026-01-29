import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'plus.unsplash.com',
      },
      {
        hostname: 'unsplash.com',
      },
    ],
  },
};

export default nextConfig;
