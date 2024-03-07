/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/hi",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
