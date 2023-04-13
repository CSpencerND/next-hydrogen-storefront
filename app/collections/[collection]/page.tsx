import { getCollections, getProductsByCollection } from "@/lib/storefront"

import Collection from "@/components/collection"
import Product from "@/components/product"
import { ProductProvider } from "@/lib/state"

export async function generateStaticParams() {
    const collections = await getCollections()

    return collections.map((collection) => ({
        collection: collection.handle,
    }))
}

type SegmentParams = {
    params: { collection: string }
}

export default async function CollectionDynamicSegment({ params }: SegmentParams) {
    const data = await getProductsByCollection(params.collection)
    const { collectionTitle, collectionDescription, products } = data

    return (
        <Collection.Section>
            <Collection.Heading
                collectionTitle={collectionTitle}
                collectionDescription={collectionDescription}
            />
            <Collection.Grid>
                {products.map((p) => {
                    if (!p) throw new Error("No product found!")
                    return (
                        <ProductProvider
                            product={p}
                            key={p.id}
                        >
                            <Product.Item />
                        </ProductProvider>
                    )
                })}
            </Collection.Grid>
        </Collection.Section>
    )
}
