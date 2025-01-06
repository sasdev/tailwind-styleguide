/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'development' ? '' : '/sasdev.github.io',
  images: {
    domains: ['reqres.in', 'via.placeholder.com'],
<<<<<<< HEAD
  },
=======
    unoptimized: true,
  },
  output: 'export',
>>>>>>> gh-pages
};

module.exports = nextConfig;