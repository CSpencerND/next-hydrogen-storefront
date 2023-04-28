import { getCollections } from "@/lib/storefront"

import { Breadcrumbs } from "@/components/navigation"

import type { ReactNode } from "react"

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

type CollectionLayoutProps = {
    children?: ReactNode
    modal?: ReactNode
}

export default function CollectionLayout({ children, modal }: CollectionLayoutProps) {

    return (
        <>
            <Breadcrumbs />
            {modal && (
                <>
                    <h2>Modal</h2>
                    {modal}
                </>
            )}

            {children}
        </>
    )
}
