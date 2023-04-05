import type { Shop } from "@shopify/hydrogen-react/storefront-api-types"
import storefrontQuery from "./storefrontClient"

export async function getStorefrontProps(): Promise<{ shop: Shop }> {
    const { shop } = await storefrontQuery<"shop", Shop>(shopQuery)
    return { shop }
}

const gql = String.raw
const shopQuery = gql`
    query {
        shop {
            name
            description
            brand {
                shortDescription
                slogan
                colors {
                    primary {
                        background
                        foreground
                    }
                    secondary {
                        background
                        foreground
                    }
                }
                coverImage {
                    alt
                    id
                    image {
                        altText
                        id
                        url
                        height
                        width
                    }
                }
                logo {
                    alt
                    id
                    image {
                        altText
                        id
                        url
                        height
                        width
                    }
                }
                squareLogo {
                    alt
                    id
                    image {
                        altText
                        id
                        url
                        height
                        width
                    }
                }
            }
        }
    }
`
