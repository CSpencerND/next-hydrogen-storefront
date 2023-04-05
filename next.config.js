/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["cdn.shopify.com"],
    },
    env: {
        STOREFRONT_ID: process.env.NEXT_SHOPIFY_STOREFRONT_ID,
        STOREFRONT_TOKEN: process.env.NEXT_SHOPIFY_STOREFRONT_TOKEN,
        STOREFRONT_DOMAIN: process.env.NEXT_SHOPIFY_STOREFRONT_DOMAIN,
        STOREFRONT_VERSION: process.env.NEXT_SHOPIFY_STOREFRONT_VERSION,
    },
}

module.exports = nextConfig
