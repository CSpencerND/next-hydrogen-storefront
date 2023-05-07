import { gql } from "../storefrontClient"

export const productQueryByCollection = gql`
    query getProductsByCollection($handle: String!) {
        collection(handle: $handle) {
            title
            descriptionHtml
            products(first: 99) {
                nodes {
                    availableForSale
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

export const productQuerySingleton = gql`
    query getProductByHandle($handle: String!) {
        product(handle: $handle) {
            availableForSale
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

export const productQueryRecommended = gql`
    query Recommendations($id: ID!) {
        productRecommendations(productId: $id) {
            featuredImage {
                url
                altText
                width
                height
            }
            availableForSale
            title
            id
            handle
            onlineStoreUrl
        }
    }
`
