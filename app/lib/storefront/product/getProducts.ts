import shopifyFetch, { removeEdgesAndNodes, removeUnavailable } from "../storefrontClient"
import { productQueryByCollection, productQueryRecommended, productQuerySingleton } from "./product"

import type { CollectionOperation, Product, ProductOperation, ProductRecommendationsOperation } from "../shopTypes"

type ProductsByCollection = {
    collectionTitle: string
    collectionDescription: string
    products: Product[]
}

export async function getProductsByCollection(handle: string): Promise<ProductsByCollection> {
    const res = await shopifyFetch<CollectionOperation>({
        query: productQueryByCollection,
        variables: { handle },
    })

    const { data } = res.body

    const collectionTitle: string = data.collection?.title
    const collectionDescription: string = data.collection?.descriptionHtml
    const products: Product[] = removeUnavailable(removeEdgesAndNodes(data.collection?.products))

    return { collectionTitle, collectionDescription, products }
}

export async function getProductByHandle(handle: string): Promise<Product | never> {
    const res = await shopifyFetch<ProductOperation>({
        query: productQuerySingleton,
        variables: {
            handle,
        },
    })

    const product = res.body?.data?.product

    if (!product.availableForSale) {
        throw new Error("Product not available")
    }

    return product
}

export async function getProductRecommendations(id: string) {
    const res = await shopifyFetch<ProductRecommendationsOperation>({
        query: productQueryRecommended,
        variables: { id },
    })

    const available = removeUnavailable(res.body?.data?.productRecommendations)
    const firstFour = available.slice(0, 4)

    return firstFour
}
