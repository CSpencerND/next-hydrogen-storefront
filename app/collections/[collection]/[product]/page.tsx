"use client"

import { getProductByHandle } from "@/lib/storefront"

import Product from "@/components/product"
import { ProductProvider } from "@/lib/state"

import type { CollectionSegmentParams } from "../page"

type ProductSegmentParams = CollectionSegmentParams & {
    params: { product: string }
}

// export async function generateStaticParams({ params }: ProductSegmentParams) {
//     const product = params.product
//     return [{ product: product }]
// }

export default async function ProductDynamicSegment({ params }: ProductSegmentParams) {
    const productData = await getProductByHandle(params.product)
    const {} = productData

    return (
        <section className="grid h-screen place-items-center">
            <ProductProvider product={productData}>
            </ProductProvider>
        </section>
    )
}
