type Env = {
    ID: string
    TOKEN: string
    DOMAIN: string
    VERSION: string
}

export const env = {
    ID: process.env.STOREFRONT_ID,
    TOKEN: process.env.STOREFRONT_TOKEN,
    DOMAIN: process.env.STOREFRONT_DOMAIN,
    VERSION: process.env.STOREFRONT_VERSION || "2023-01",
} as Env

export const shopify = {
    endpoint: `https://${env.DOMAIN}/api/${env.VERSION}/graphql.json`,
    headers: {
        "content-type": "application/json",
        "X-SDK-Variant": "hydrogen-react",
        "X-SDK-Variant-Source": "react",
        "X-SDK-Version": env.VERSION,
        "X-Shopify-Storefront-Access-Token": env.TOKEN,
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
