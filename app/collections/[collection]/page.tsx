import { getProductsByCollection } from "@/lib/storefront"

import Collection from "@/components/collection"
import Product from "@/components/product"
import { ProductProvider } from "@/lib"

import type { CollectionSegmentParams } from "./layout"

export default async function CollectionDynamicSegment({ params }: CollectionSegmentParams) {
    const data = await getProductsByCollection(params.collection)
    const { collectionTitle, collectionDescription, products } = data

    return (
        <>
            <Collection.Section>
                <Collection.Heading
                    collectionTitle={collectionTitle}
                    collectionDescription={collectionDescription}
                />
                <Collection.Grid>
                    {products.map((p) => {
                        if (!p) throw new Error("No product found!")

                        const { title, handle } = p
                        const href = `/collections/${params.collection}/${handle}`

                        return (
                            <li key={p.id}>
                                <ProductProvider product={p}>
                                    <Product.Card {...{ title, href }} />
                                    {/* <Product.Swatch attached /> */}
                                </ProductProvider>
                            </li>
                        )
                    })}
                </Collection.Grid>
            </Collection.Section>
        </>
    )
}
