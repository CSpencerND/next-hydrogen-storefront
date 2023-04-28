import { getCollectionByHandle } from "@/lib/storefront"
import { FeaturedCollection } from "./Featured"

async function Featured({ collectionHandle }: { collectionHandle: string }) {
    const featured = await getCollectionByHandle(collectionHandle)
    return <FeaturedCollection featured={featured} />
}

export default Featured as unknown as () => JSX.Element
