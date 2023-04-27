import { getFeaturedCollection, getProductByHandle } from "@/lib/storefront"

import Product from "@/components/product"

import type { FullPathParams } from "../../../layout"

export async function generateStaticParams({ params }: FullPathParams) {
    const products = await getFeaturedCollection(params.collection)

    return products.map((p) => ({
        product: p.handle,
    }))
}

export default async function ProductDynamicSegment({ params }: FullPathParams) {
    const p = await getProductByHandle(params.product)

    return (
        <Product.Modal>
            <Product.Layout
                product={p}
                key={p.id}
            >
                <div className="absolute right-0 top-0 p-2">
                    <Product.Modal.CloseButton icon="x" />
                </div>
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
                <Product.Modal.CloseButton icon="arrowLeft" />
            </Product.Layout>
        </Product.Modal>
    )
}
