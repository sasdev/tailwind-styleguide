const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'development' ? '' : '/sasdev.github.io',
  images: {
    domains: ['reqres.in', 'via.placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;