"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', "fonts.gstatic.com", "fonts.googleapis.com", "cdn.tuk.dev"]
  }
};
module.exports = nextConfig;