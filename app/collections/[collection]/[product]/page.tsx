import {
    getCollectionByHandle,
    getProductByHandle,
    getProductRecommendations,
} from "@/lib/storefront"

import Product from "@/components/product"
import Collection from "@/components/collection"

import type { FullPathParams } from "../layout"

export async function generateStaticParams({ params }: FullPathParams) {
    const products = await getCollectionByHandle(params.collection)

    return products.map((p) => ({
        product: p.handle,
    }))
}

export default async function ProductDynamicSegment({ params }: FullPathParams) {
    const p = await getProductByHandle(params.product)
    const r = await getProductRecommendations(p.id)

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
            <section>
                <h3 className="mb-4 text-lg font-bold text-accent-content">
                    You may also like
                </h3>
                <ul className="mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                    {r.slice(0, 4).map((p) => {
                        const { id, title, featuredImage, onlineStoreUrl, handle } = p
                        return (
                            <Collection.Card
                                href={onlineStoreUrl ?? `/collections/full-catalog/${handle}`}
                                key={id}
                                rounded
                            >
                                <Collection.Image
                                    title={title}
                                    image={featuredImage!}
                                />
                                <Collection.Title title={title} centered />
                            </Collection.Card>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}
