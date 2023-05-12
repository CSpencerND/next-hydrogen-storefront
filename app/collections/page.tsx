import Collection from "@/components/collection"
import { ProductCard } from "@/components"

import { getCollections } from "@/lib"

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
                        <li key={id}>
                            <ProductCard {...{ title, href, image }} />
                        </li>
                    )
                })}
            </Collection.Grid>
        </Collection.Section>
    )
}
