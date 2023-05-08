import { gql } from "../storefrontClient"

export const collectionQueryAll = gql`
    {
        collections(first: 9) {
            edges {
                node {
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
    }
`

export const collectionQuerySingleton = gql`
    query getFeaturedProducts($handle: String!) {
        collection(handle: $handle) {
            products(first: 99) {
                edges {
                    node {
                        title
                        handle
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
    }
`
