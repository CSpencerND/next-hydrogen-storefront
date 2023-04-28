import { getProductsByCollection } from "@/lib/storefront"

import Collection from "@/components/collection"
import Product from "@/components/product"
import { ProductProvider } from "@/lib/state"

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
                        return (
                            <ProductProvider
                                product={p}
                                key={p.id}
                            >
                                <Product.Card>
                                    <Product.Link
                                        href={`/collections/${params.collection}/${p.handle}`}
                                    >
                                        <Product.Image
                                            rounded="top"
                                            title={p.title}
                                        />
                                        <Product.Title.Overlay>
                                            <Product.Title
                                                truncate
                                                title={p.title}
                                            />
                                        </Product.Title.Overlay>
                                    </Product.Link>
                                    <Product.Swatch attached />
                                </Product.Card>
                            </ProductProvider>
                        )
                    })}
                </Collection.Grid>
            </Collection.Section>
        </>
    )
}
