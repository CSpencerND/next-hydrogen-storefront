import { env } from "env.mjs"

export const shopify = {
    endpoint: `https://${env.NEXT_PUBLIC_STOREFRONT_DOMAIN}/api/${env.NEXT_PUBLIC_STOREFRONT_VERSION}/graphql.json`,
    headers: {
        "content-type": "application/json",
        "X-SDK-Variant": "hydrogen-react",
        "X-SDK-Variant-Source": "react",
        "X-SDK-Version": env.NEXT_PUBLIC_STOREFRONT_VERSION,
        "X-Shopify-Storefront-Access-Token": env.NEXT_PUBLIC_STOREFRONT_TOKEN,
    },
} as const

export default async function storefrontQuery<K extends string, V>(
    query: string,
    vars = {}
): Promise<Record<K, V>> {
    const response = await fetch(shopify.endpoint, {
        body: JSON.stringify({ query, variables: vars }),
        headers: shopify.headers,
        method: "POST",
    })

    if (!response.ok) {
        throw new Error(`Storefront query failed: ${response.statusText}`)
    }

    const { data } = (await response.json()) as { data: Record<K, V> }
    return data
}
