import { isShopifyError } from "@/lib/type-guards"
import { env } from "env.mjs"
import { Connection, Product } from "./shopTypes"

type ExtractVariables<T> = T extends { variables: object } ? T["variables"] : never

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

export default async function shopifyFetch<T>({
    query,
    variables,
}: {
    query: string
    variables?: ExtractVariables<T>
    headers?: HeadersInit
    cache?: RequestCache
}): Promise<{ status: number; body: T } | never> {
    try {
        const result = await fetch(shopify.endpoint, {
            method: "POST",
            headers: shopify.headers,
            body: JSON.stringify({
                ...(query && { query }),
                ...(variables && { variables }),
            }),
            next: { revalidate: 86400 },
        })

        const body = await result.json()

        if (body.errors) {
            throw body.errors[0]
        }

        return {
            status: result.status,
            body,
        }
    } catch (e) {
        if (isShopifyError(e)) {
            throw {
                status: e.status || 500,
                message: e.message,
                query,
            }
        }

        throw {
            error: e,
            query,
        }
    }
}

export const gql = String.raw

export function removeEdgesAndNodes(array: Connection<any>) {
    return array.edges.map((edge) => edge?.node)
}

export function removeUnavailable(products: Product[]) {
    return products.filter((p) => p.availableForSale)
}
