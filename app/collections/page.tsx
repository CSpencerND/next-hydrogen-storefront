import Collection from "@/components/collection"
import { getCollections } from "@/lib/storefront"
import NextLink from "next/link"
import NextImage from "next/image"

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
                            <NextLink
                                className="card image-full card-compact grid-cols-1 !rounded-3xl before:hidden"
                                href={href}
                                key={id}
                            >
                                <figure className="glass rounded-3xl">
                                    {image && (
                                        <NextImage
                                            src={image?.url}
                                            alt={image.altText ?? title ?? " "}
                                            width={image.width ?? 1024}
                                            height={image.height ?? 1024}
                                            role="presentation"
                                        />
                                    )}
                                </figure>
                                <span className="card-body mt-auto rounded-b-3xl bg-white/10 !py-2 backdrop-blur-[10px] backdrop-saturate-[1.8]">
                                    <h2 className="truncate text-center text-sm font-bold text-primary-content">
                                        {title}
                                    </h2>
                                </span>
                            </NextLink>
                        </li>
                    )
                })}
            </Collection.Grid>
        </Collection.Section>
    )
}
