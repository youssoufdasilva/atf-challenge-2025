/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "localhost" }, { hostname: "randomuser.me" }],
  },
  output: "export",
  basePath: "/atf-challenge-2025",
};

export default nextConfig;
