import { gql } from "../storefrontClient"

export const shopQuery = gql`
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
