/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'development' ? '' : '/sasdev.github.io',
  images: {
    domains: ['reqres.in', 'via.placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;