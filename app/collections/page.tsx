import { getCollections } from "@/lib/storefront"

import Collection from "@/components/collection"
import Product from "@/components/product"

const getData = async () => {
    const collections = await getCollections()

    const collectionData = collections.map(({ id, handle, title, image }) => {
        return {
            id,
            href: `/collections/${handle}`,
            image,
            title,
        }
    })

    return collectionData
}

export default async function CollectionDirectoryPage() {
    const collections = await getData()

    return (
        <Collection.Section>
            <Collection.Heading collectionTitle="Collection Directory" />
            <Collection.Grid>
                {collections.map(({ id, title, href, image }) => {
                    return (
                        <Product.Card href={href} rounded key={id}>
                            {image && (
                                <Product.Image
                                    image={image}
                                    title={title}
                                />
                            )}
                            <Product.Title
                                title={title}
                                centered
                                overlayed
                            />
                        </Product.Card>
                    )
                })}
            </Collection.Grid>
        </Collection.Section>
    )
}
