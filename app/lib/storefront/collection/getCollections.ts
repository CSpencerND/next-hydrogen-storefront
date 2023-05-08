import { collectionQueryAll, collectionQuerySingleton } from "./collection"
import shopifyFetch, { removeEdgesAndNodes } from "../storefrontClient"

import type { Collection, CollectionOperation, CollectionsOperation, Product } from "../shopTypes"

export async function getCollections(): Promise<Collection[]> {
    const res = await shopifyFetch<CollectionsOperation>({
        query: collectionQueryAll,
    })
    const collections: Collection[] = removeEdgesAndNodes(res.body?.data?.collections)
    return collections
}

export async function getCollectionByHandle(handle: string): Promise<Product[]> {
    const res = await shopifyFetch<CollectionOperation>({
        query: collectionQuerySingleton,
        variables: {
            handle,
        },
    })

    return removeEdgesAndNodes(res.body?.data?.collection?.products)
}
