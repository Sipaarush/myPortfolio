/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // React compiler (auto-memoization) — Next 14 opt-in
    reactCompiler: false,
  },
};

module.exports = nextConfig;
