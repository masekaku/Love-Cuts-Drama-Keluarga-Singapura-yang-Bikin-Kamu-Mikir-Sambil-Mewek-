/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.videy.co'],
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
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://latothea.vercel.app',
  }
};