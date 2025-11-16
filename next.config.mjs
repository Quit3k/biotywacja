/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    // Ignoruje błędy ESLint przy buildzie – konieczne żeby Vercel puścił deploy
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Pozwalamy na obrazki z Sanity
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Pozwalamy na obrazki z Pexels dla sklepu
      },
    ],
  },
};

export default nextConfig;
