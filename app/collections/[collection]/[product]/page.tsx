import { getCollectionByHandle, getProductByHandle } from "@/lib/storefront"

import Product from "@/components/product"
import RecommendedProducts from "./recommended"

import { LoadingSpinner } from "@/components/ui"
import { Suspense } from "react"

import type { FullPathParams } from "../layout"

export async function generateStaticParams({ params }: FullPathParams) {
    const products = await getCollectionByHandle(params.collection)

    return products.map((p) => ({
        product: p.handle,
    }))
}

export default async function ProductDynamicSegment({ params }: FullPathParams) {
    const p = await getProductByHandle(params.product)

    return (
        <>
            <Product.Layout
                product={p}
                key={p.id}
            >
                <div className="space-y-6">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Product.Image
                            title={p.title}
                            rounded="full"
                        />
                    </Suspense>
                    <Product.Title
                        className="text-accent-content md:text-lg"
                        title={p.title}
                    />
                </div>
                <Product.Layout.Body>
                    <Product.Swatch className="md:h-10 md:w-10" />
                    <Product.Size />
                    <div className="flex w-full items-center justify-between">
                        <Product.Variant />
                        <Product.Price className="text-right" />
                    </div>
                    <Product.CartButton />
                    <Product.Description text={p.descriptionHtml} />
                </Product.Layout.Body>
            </Product.Layout>
            {/* @ts-expect-error Server Component */}
            <RecommendedProducts productID={p.id} />
        </>
    )
}
