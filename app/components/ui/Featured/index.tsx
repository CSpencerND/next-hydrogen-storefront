import { getCollectionByHandle } from "@/lib"
import { FeaturedCollection } from "./Featured"

export async function Featured({ collectionHandle }: { collectionHandle: string }) {
    const featured = await getCollectionByHandle(collectionHandle)

    return (
        <section className="card bg-blur space-y-6 rounded-3xl bg-base-200/60 py-6">
            <h2 className="text-center text-lg font-bold text-accent-content">Featured Items</h2>
            <FeaturedCollection featured={featured} />
        </section>
    )
}
