/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'development' ? '/test' : '/sasdev.github.io',
}

module.exports = nextConfig
