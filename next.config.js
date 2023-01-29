/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.BASE_PATH === 'production' ? '/sasdev.github.io' : '',
}

module.exports = nextConfig
