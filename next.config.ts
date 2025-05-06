// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'yeeyangkok.netlify.app'], // Allow loading from localhost or any domain you want
  },
};

export default nextConfig;
