import { getCollectionByHandle, getProductByHandle } from "@/lib"

import Product from "@/components/product"
import RecommendedProducts from "./recommended"

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
    const { id, title, descriptionHtml } = p

    return (
        <>
            <Product.Layout
                product={p}
                key={id}
            >
                <div className="space-y-6">
                    <Product.Image
                        title={title}
                        rounded="full"
                    />
                    <Product.Title
                        className="text-accent-content md:text-lg"
                        title={title}
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
                    <Product.Description text={descriptionHtml} />
                </Product.Layout.Body>
            </Product.Layout>
            <Suspense>
                {/* @ts-expect-error Server Component */}
                <RecommendedProducts productID={id} />
            </Suspense>
        </>
    )
}
