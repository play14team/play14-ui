/** @type {import('next').NextConfig} */

const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.play14.org",
        port: "",
        pathname: "/strapi-uploads/assets/**",
      },
      {
        protocol: "https",
        hostname: "play14-cdn.azureedge.net",
        port: "",
        pathname: "/strapi-uploads/assets/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}

module.exports = nextConfig
