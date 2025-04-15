/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DevAdora-Portfolio', // replace with repo name
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  }, 

};

module.exports = nextConfig;
