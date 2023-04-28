import storefrontQuery from "./storefrontClient"

import type { Collection, Product } from "@shopify/hydrogen-react/storefront-api-types"

type ProductsByCollection = {
    collectionTitle: string
    collectionDescription: string
    products: Product[]
}

const gql = String.raw

export async function getProductsByCollection(handle: string): Promise<ProductsByCollection> {
    const data = await storefrontQuery<"collection", Collection>(allProductsQuery, { handle })

    const collectionTitle: string = data.collection.title
    const collectionDescription: string = data.collection.descriptionHtml
    const products: Product[] = data.collection.products.nodes
    return { collectionTitle, collectionDescription, products }
}

export async function getProductByHandle(handle: string): Promise<Product> {
    const data = await storefrontQuery<"product", Product>(productByHandleQuery, { handle })
    return data.product
}

export async function getProductRecommendations(id: string): Promise<Product[]> {
    const data = await storefrontQuery<"productRecommendations", Product[]>(
        recommendedProductsQuery,
        { id }
    )
    return data.productRecommendations
}

const allProductsQuery = gql`
    query getProductsByCollection($handle: String!) {
        collection(handle: $handle) {
            title
            descriptionHtml
            products(first: 99) {
                nodes {
                    id
                    handle
                    title
                    priceRange {
                        maxVariantPrice {
                            currencyCode
                            amount
                        }
                        minVariantPrice {
                            currencyCode
                            amount
                        }
                    }
                    descriptionHtml
                    images(first: 99) {
                        nodes {
                            url
                            altText
                            width
                            height
                            id
                        }
                    }
                    variants(first: 99) {
                        nodes {
                            id
                            title
                            price {
                                amount
                                currencyCode
                            }
                            selectedOptions {
                                name
                                value
                            }
                            sellingPlanAllocations(first: 1) {
                                nodes {
                                    sellingPlan {
                                        name
                                    }
                                }
                            }
                        }
                    }
                    options(first: 99) {
                        name
                        values
                    }
                    metafield(namespace: "swatch", key: "colors") {
                        value
                    }
                    collections(first: 9) {
                        nodes {
                            title
                        }
                    }
                    sellingPlanGroups(first: 1) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }
`

const productByHandleQuery = gql`
    query getProductByHandle($handle: String!) {
        product(handle: $handle) {
            id
            handle
            title
            descriptionHtml
            priceRange {
                maxVariantPrice {
                    currencyCode
                    amount
                }
                minVariantPrice {
                    currencyCode
                    amount
                }
            }
            images(first: 99) {
                nodes {
                    url
                    altText
                    width
                    height
                    id
                }
            }
            variants(first: 99) {
                nodes {
                    id
                    title
                    price {
                        amount
                        currencyCode
                    }
                    selectedOptions {
                        name
                        value
                    }
                    sellingPlanAllocations(first: 1) {
                        nodes {
                            sellingPlan {
                                name
                            }
                        }
                    }
                }
            }
            options(first: 99) {
                name
                values
            }
            metafield(namespace: "swatch", key: "colors") {
                value
            }
            collections(first: 9) {
                nodes {
                    title
                }
            }
            sellingPlanGroups(first: 1) {
                nodes {
                    name
                }
            }
        }
    }
`

const recommendedProductsQuery = gql`
    query Recommendations($id: ID!) {
        productRecommendations(productId: $id) {
            featuredImage {
                url
                altText
                width
                height
            }
            title
            id
            handle
            onlineStoreUrl
        }
    }
`
