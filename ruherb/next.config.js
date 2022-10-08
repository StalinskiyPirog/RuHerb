/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', "fonts.gstatic.com","fonts.googleapis.com", "cdn.tuk.dev"],
  },
}

module.exports = nextConfig
