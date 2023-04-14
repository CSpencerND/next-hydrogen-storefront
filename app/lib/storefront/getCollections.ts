import storefrontQuery from "./storefrontClient"

import type {
    Collection,
    CollectionConnection,
    Product,
} from "@shopify/hydrogen-react/storefront-api-types"

const gql = String.raw

export async function getCollections(): Promise<Collection[]> {
    const data = await storefrontQuery<"collections", CollectionConnection>(query)
    const collections: Collection[] = data.collections.nodes
    return collections
}

const query = gql`
    {
        collections(first: 9) {
            nodes {
                id
                handle
                title
                descriptionHtml
                image {
                    url
                    altText
                    width
                    height
                }
            }
        }
    }
`

export async function getFeaturedCollection(handle: string): Promise<Product[]> {
    const data = await storefrontQuery<"collection", Collection>(featuredQuery, { handle })
    return data.collection.products.nodes
}

const featuredQuery = gql`
    query getFeaturedProducts($handle: String!) {
        collection(handle: $handle) {
            products(first: 99) {
                nodes {
                    title
                    featuredImage {
                        url
                        altText
                        width
                        height
                        id
                    }
                }
            }
        }
    }
`

