import { getCollections } from "@/lib/storefront"

import { PageTitle, ProductImage } from "@/components/common"
import ProductGrid from "@/components/ui/grid"
import Link from "next/link"

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
        <section className="mx-auto max-w-2xl space-y-8">
            <PageTitle title="Collections Directory" />

            <ProductGrid>
                {collections.map(({ id, title, href, image }) => {
                    return (
                        <li key={id}>
                            <Link
                                href={href}
                                className={`
                                    card relative h-full overflow-hidden rounded-2xl
                                    text-primary-content transition-all
                                    hover:scale-105 hover:brightness-105
                                    active:scale-95
                                `}
                            >
                                {image && (
                                    <ProductImage
                                        image={image}
                                        title={title}
                                    />
                                )}
                                <div
                                    className={`
                                        bg-blur-300 card-body absolute
                                        bottom-0 w-full border-t
                                        border-base-100 p-1
                                        sm:p-2
                                    `}
                                >
                                    <h2 className="card-title mx-auto whitespace-nowrap text-sm">
                                        {title}
                                    </h2>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ProductGrid>
        </section>
    )
}
