import type { Collection, CollectionConnection } from "@shopify/hydrogen-react/storefront-api-types"
import type { Product, ProductConnection, ProductVariant } from "@shopify/hydrogen-react/storefront-api-types"
import type { Maybe, Seo as SEO, Shop } from "@shopify/hydrogen-react/storefront-api-types"

export type { Collection, Product, Shop }

export type Connection<T> = {
    edges: Array<Edge<T>>
}

export type Edge<T> = {
    node: T
}

export type ShopOperation = {
    data: {
        shop: Shop
    }
}

export type CollectionsOperation = {
    data: {
        collections: CollectionConnection
    }
}

export type CollectionOperation = {
    data: {
        collection: Collection
    }
    variables: {
        handle: string
    }
}

export type ProductsOperation = {
    data: {
        products: ProductConnection
    }
    variables: {
        query?: string
        reverse?: boolean
        sortKey?: string
    }
}

export type ProductOperation = {
    data: { product: Product }
    variables: {
        handle: string
    }
}

export type ProductsOperation = {
    data: {
        collection: {
            products: ProductConnection
        }
    }
    variables: {
        handle: string
    }
}

export type ProductRecommendationsOperation = {
    data: {
        productRecommendations: Product[]
    }
    variables: {
        productID: string
    }
}

// export type Cart = Omit<ShopifyCart, "lines"> & {
//     lines: CartItem[]
// }

// export type CartItem = {
//     id: string
//     quantity: number
//     cost: {
//         totalAmount: Money
//     }
//     merchandise: {
//         id: string
//         title: string
//         selectedOptions: {
//             name: string
//             value: string
//         }[]
//         product: Product
//     }
// }

// export type Image = {
//     url: string
//     altText: string
//     width: number
//     height: number
// }

// export type Menu = {
//     title: string
//     path: string
// }

// export type Money = {
//     amount: string
//     currencyCode: string
// }

// export type Page = {
//     id: string
//     title: string
//     handle: string
//     body: string
//     bodySummary: string
//     seo?: SEO
//     createdAt: string
//     updatedAt: string
// }

// export type ProductOption = {
//     id: string
//     name: string
//     values: string[]
// }

// export type ShopifyCart = {
//     id: string
//     checkoutUrl: string
//     cost: {
//         subtotalAmount: Money
//         totalAmount: Money
//         totalTaxAmount: Money
//     }
//     lines: Connection<CartItem>
//     totalQuantity: number
// }

// export type ShopifyCartOperation = {
//     data: {
//         cart: ShopifyCart
//     }
//     variables: {
//         cartId: string
//     }
// }

// export type ShopifyCreateCartOperation = {
//     data: { cartCreate: { cart: ShopifyCart } }
// }

// export type ShopifyAddToCartOperation = {
//     data: {
//         cartLinesAdd: {
//             cart: ShopifyCart
//         }
//     }
//     variables: {
//         cartId: string
//         lines: {
//             merchandiseId: string
//             quantity: number
//         }[]
//     }
// }

// export type ShopifyRemoveFromCartOperation = {
//     data: {
//         cartLinesRemove: {
//             cart: ShopifyCart
//         }
//     }
//     variables: {
//         cartId: string
//         lineIds: string[]
//     }
// }

// export type ShopifyUpdateCartOperation = {
//     data: {
//         cartLinesUpdate: {
//             cart: ShopifyCart
//         }
//     }
//     variables: {
//         cartId: string
//         lines: {
//             id: string
//             merchandiseId: string
//             quantity: number
//         }[]
//     }
// }

// export type ShopifyMenuOperation = {
//     data: {
//         menu?: {
//             items: {
//                 title: string
//                 url: string
//             }[]
//         }
//     }
//     variables: {
//         handle: string
//     }
// }

// export type ShopifyPageOperation = {
//     data: { pageByHandle: Page }
//     variables: { handle: string }
// }

// export type ShopifyPagesOperation = {
//     data: {
//         pages: Connection<Page>
//     }
// }
