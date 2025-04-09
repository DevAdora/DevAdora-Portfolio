/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  }, 
  output: 'export', // enables static export
  basePath: '/DevAdora',  // this matches the repo name
  assetPrefix: '/DevAdora',
  trailingSlash: true,
};

module.exports = nextConfig;
