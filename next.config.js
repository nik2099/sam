module.exports = {
  // basePath: '/',
  reactStrictMode: true,
  // distDir: 'build',
  swcMinify: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '/',
  },

  
  
};
