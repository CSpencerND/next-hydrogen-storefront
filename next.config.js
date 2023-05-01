/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["cdn.shopify.com"],
    },
    env: {
        NEXT_PUBLIC_STOREFRONT_ID: process.env.NEXT_PUBLIC_STOREFRONT_ID,
        NEXT_PUBLIC_STOREFRONT_TOKEN: process.env.NEXT_PUBLIC_STOREFRONT_TOKEN,
        NEXT_PUBLIC_STOREFRONT_DOMAIN: process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN,
        NEXT_PUBLIC_STOREFRONT_VERSION: process.env.NEXT_PUBLIC_STOREFRONT_VERSION,
    },
}

module.exports = nextConfig
