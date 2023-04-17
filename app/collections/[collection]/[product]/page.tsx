import { getProductByHandle } from "@/lib/storefront"

import Product from "@/components/product"
import { ProductProvider } from "@/lib/state"

import type { FullPathParams } from "../layout"
import { Breadcrumbs } from "@/components/navigation"

// export async function generateStaticParams() {
//     const products = await getProductsByCollection("full-catalog")
//
//     return collections.map((collection) => ({
//         collection: collection.handle,
//     }))
// }

export default async function ProductDynamicSegment({ params }: FullPathParams) {
    const p = await getProductByHandle(params.product)

    return (
        <>
            <Breadcrumbs segments={[params.collection, params.product]} />
            <section className="card mx-auto max-w-lg lg:max-w-7xl">
                <ProductProvider
                    product={p}
                    key={p.id}
                >
                    <div
                        className={`
                        bg-blur-200 card-body space-y-6 rounded-3xl lg:card-side
                        md:p-8 lg:space-x-12 lg:p-12 xl:p-16 [&>*]:md:basis-1/2
                    `}
                    >
                        <div className="h-full w-full overflow-hidden rounded-3xl">
                            <Product.Image
                                title={p.title}
                                rounded="full"
                            />
                        </div>
                        <div className="space-y-6 lg:space-y-9">
                            <div>
                                <Product.Title
                                    className="md:text-lg"
                                    title={p.title}
                                />
                                <Product.Price />
                            </div>
                            <div className="space-y-6 lg:space-y-9">
                                <Product.Swatch className="md:h-10 md:w-10" />
                                <Product.Size />
                                <Product.Description text={p.descriptionHtml} />
                            </div>
                        </div>
                    </div>
                </ProductProvider>
            </section>
        </>
    )
}
