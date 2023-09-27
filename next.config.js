/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};
module.exports = nextConfig;
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
})

module.exports = withPWA({
  reactStrictMode: false,
  swcMinify: true,
})