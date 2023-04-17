import { getCollections } from "@/lib/storefront"

import type Children from "types"

export type CollectionSegmentParams = {
    params: { collection: string }
}

export type ProductSegmentParams = {
    params: { product: string }
}

export type FullPathParams = CollectionSegmentParams & ProductSegmentParams

export async function generateStaticParams() {
    const collections = await getCollections()

    return collections.map((collection) => ({
        collection: collection.handle,
    }))
}

export default function CollectionLayout({children}: Children){
    return (
        <>{children}</>
    )
}
