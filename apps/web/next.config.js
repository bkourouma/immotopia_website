/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@monorepo/ui', '@monorepo/contracts', '@monorepo/utils'],
};

module.exports = nextConfig;

