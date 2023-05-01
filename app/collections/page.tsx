import Collection from "@/components/collection"
import { getCollections } from "@/lib/storefront"

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
                            <Collection.Card
                                href={href}
                                rounded
                                key={id}
                            >
                                {image ? (
                                    <Collection.Image
                                        image={image}
                                        title={title}
                                    />
                                ) : (
                                    <p className="flex flex-col text-center text-base font-bold">
                                        <span>Collection</span>
                                        <span>Image</span>
                                    </p>
                                )}
                                <Collection.Title
                                    title={title}
                                    centered
                                    rounded
                                />
                            </Collection.Card>
                        )
                    })}
            </Collection.Grid>
        </Collection.Section>
    )
}
