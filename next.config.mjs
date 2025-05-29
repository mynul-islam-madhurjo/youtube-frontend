/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost', 'i.ytimg.com', 'yt3.ggpht.com'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8000',
          pathname: '/static/**',
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8000/api/:path*',
        },
      ];
    },
  }
  
  export default nextConfig