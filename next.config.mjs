/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    },
    typescript: {
        // Type checking is handled by tsconfig.json exclude
        ignoreBuildErrors: false,
    },
    webpack: (config, { isServer }) => {
        // Exclude Stellar-PayPulse-App from webpack compilation
        if (!isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
            };
        }
        
        // Ignore Stellar-PayPulse-App directory from file watching and compilation
        config.watchOptions = {
            ...config.watchOptions,
            ignored: [
                '**/node_modules/**',
                '**/.git/**',
                '**/Stellar-PayPulse-App/**',
            ],
        };
        
        return config;
    },
};

export default nextConfig;
