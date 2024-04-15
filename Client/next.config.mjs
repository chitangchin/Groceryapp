const nextConfig = {
    images: {
        // remotePatterns: ['img.spoonacular.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'img.spoonacular.com',
              port: '',
              pathname: '/**',
            },
          ],
    }, env: {
        BASE_URL: process.env.BASE_URL,
    }
};

export default nextConfig;