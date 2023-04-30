import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

const domainNameValidator = (value) => {
    const regex = /^(?!http(s)?:\/\/)([a-zA-Z0-9-]+)\.myshopify\.com$/
    const isValid = regex.test(value)

    return isValid
}

export const env = createEnv({
    server: {},
    client: {
        NEXT_PUBLIC_STOREFRONT_ID: z.string().min(30).max(30).optional(),
        NEXT_PUBLIC_STOREFRONT_TOKEN: z.string().min(32).max(32),
        NEXT_PUBLIC_STOREFRONT_DOMAIN: z.string().refine(domainNameValidator, {
            message:
                'Invalid store URL. It should match the pattern: {storename}.myshopify.com without "http(s)://"',
        }),
        NEXT_PUBLIC_STOREFRONT_VERSION: z.string().min(7).max(7),
    },
    runtimeEnv: {
        NEXT_PUBLIC_STOREFRONT_ID: process.env.NEXT_PUBLIC_STOREFRONT_ID,
        NEXT_PUBLIC_STOREFRONT_TOKEN: process.env.NEXT_PUBLIC_STOREFRONT_TOKEN,
        NEXT_PUBLIC_STOREFRONT_DOMAIN: process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN,
        NEXT_PUBLIC_STOREFRONT_VERSION: process.env.NEXT_PUBLIC_STOREFRONT_VERSION ?? "2023-04",
    },
})
