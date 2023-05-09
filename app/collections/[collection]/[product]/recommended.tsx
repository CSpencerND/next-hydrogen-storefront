import { getProductRecommendations } from "@/lib/storefront"
import NextImage from "next/image"
import NextLink from "next/link"

export default async function RecommendedProducts({ productID }: { productID: string }) {
    const r = await getProductRecommendations(productID)

    return (
        <section>
            <h3 className="mb-4 text-lg font-bold text-info">You may also like</h3>
            <ul className="mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                {r.slice(0, 4).map((p) => {
                    const { id, title, featuredImage: image, handle } = p
                    const href = `/collections/full-catalog/${handle}`

                    return (
                        <li key={id}>
                            <NextLink
                                className="card image-full card-compact grid-cols-1 !rounded-3xl before:hidden"
                                href={href}
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
            </ul>
        </section>
    )
}
