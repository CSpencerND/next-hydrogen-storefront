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

export type CollectionSegmentParams = {
    params: { collection: string }
}

export default async function CollectionDynamicSegment({ params }: CollectionSegmentParams) {
    const data = await getProductsByCollection(params.collection)
    const { collectionTitle, collectionDescription, products } = data

    // const PRODUCT_URL =  as const
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
                            <Product.Card>
                                <Product.Link
                                    href={`/collections/${params.collection}/${p.handle}`}
                                >
                                    <Product.Image rounded="top" title={p.title} />
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
    )
}

        // <li className="card relative h-full overflow-hidden rounded-2xl">
        //     <Card>
        //         <Image
        //             image={currentImage}
        //             title={title}
        //             rounded="none"
        //         />
        //         <Title.Overlay>
        //             <Title
        //                 truncate
        //                 title={title}
        //             />
        //         </Title.Overlay>
        //     </Card>
        //     <Swatch attached />
        // </li>
