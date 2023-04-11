import { getCollections, getProductsByCollection } from "@/lib/storefront"

import Collection from "@/components/collection"
import Product from "@/components/product"

// import type { ProductProviderProps } from "@/lib/ProductStore"

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
                        <li key={p.id}>
                            <Product.Card href="#">
                                <Product.Image
                                    image={p.images.nodes[0]}
                                    title={p.title}
                                    key={p.id}
                                />
                                <Product.Title
                                    title={p.title}
                                    overlayed
                                    truncate
                                />
                            </Product.Card>
                        </li>
                    )
                })}

                {/* {products.map((product) => { */}
                {/*     if(!product) throw new Error("No product found!") */}
                {/*     const hexCodes = JSON.parse(product.metafield!.value) as string[] */}
                {/*     if(!hexCodes) throw new Error("No hex codes found!") */}

                {/*     const initProviderProps: ProductProviderProps = { */}
                {/*         product: product, */}
                {/*         currentImage: product.images.nodes[0], */}
                {/*         isModalOpen: false, */}
                {/*         images: product.images.nodes, */}
                {/*         hexCodes: hexCodes, */}
                {/*     } */}
                {/*     return <Product {...initProviderProps} key={product.id} /> */}
                {/* })} */}
            </Collection.Grid>
        </Collection.Section>
    )
}
