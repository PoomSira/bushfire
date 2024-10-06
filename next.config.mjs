/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/PoomSira/bushfire@main/public/**", // jsDelivr for images
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dxtvfgaud/**", // Cloudinary for videos and images
      },
    ],
    domains: ["public.tableau.com"],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*", // When the frontend makes requests to /api/...
        destination: "/api/:path*", // It should map to the Vercel serverless function at the same path
      },
    ];
  },
};

export default nextConfig;
