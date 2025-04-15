/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/DevAdora-Portfolio' : '',
  assetPrefix: isProd ? '/DevAdora-Portfolio/' : '',
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  }, 

};

module.exports = nextConfig;
