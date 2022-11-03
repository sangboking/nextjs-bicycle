/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      {
        source: "/test",
        destination: "https://naver.com",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
