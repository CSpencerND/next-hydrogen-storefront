import { getCollectionByHandle, getProductByHandle } from "@/lib/storefront"

import Product from "@/components/product"
import RecommendedProducts from "./recommended"

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
                <Product.Image
                    title={p.title}
                    rounded="full"
                />
                <Product.Layout.Body>
                    <Product.Title
                        className="md:text-lg"
                        title={p.title}
                    />
                    <Product.Price />
                    <Product.Swatch className="md:h-10 md:w-10" />
                    <Product.Size />
                    <Product.Variant />
                    <Product.CartButton />
                    <Product.Description text={p.descriptionHtml} />
                </Product.Layout.Body>
            </Product.Layout>
            {/* @ts-expect-error Server Component */}
            <RecommendedProducts productID={p.id} />
        </>
    )
}
