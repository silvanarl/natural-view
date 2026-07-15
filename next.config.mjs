/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'inaturalist-open-data.s3.amazonaws.com',
                // Add path prefixes if needed
                // pathname: '/photos/**',
            },
            {
                protocol: 'https',
                hostname: 'static.inaturalist.org',
            },
        ],
    },
};

export default nextConfig;
