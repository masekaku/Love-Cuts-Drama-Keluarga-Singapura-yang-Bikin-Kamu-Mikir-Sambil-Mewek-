/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.videy.co'],
  },
  experimental: {
    nextScriptWorkers: true,
  },
  async rewrites() {
    return [
      {
        source: '/mock-videos.json',
        destination: '/api/videos',
      }
    ]
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://your-domain.vercel.app',
  }
};

module.exports = nextConfig;