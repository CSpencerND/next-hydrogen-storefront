import { getProductByHandle } from "@/lib/storefront"

import { Breadcrumbs } from "@/components/navigation"
import Product from "@/components/product"

import type { FullPathParams } from "../layout"

// export async function generateStaticParams() {
//     const products = await getProductsByCollection("full-catalog")
//
//     return collections.map((collection) => ({
//         collection: collection.handle,
//     }))
// }

export default async function ProductDynamicSegment({ params }: FullPathParams) {
    const p = await getProductByHandle(params.product)
    const pathSegments = [params.collection, params.product]

    return (
        <>
            <Breadcrumbs segments={pathSegments} />
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
        </>
    )
}
