import type { Product as TProduct, Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { ReactNode } from "react"

type CardProps = {
    href: URL
    product?: TProduct
    image?: TImage
    children: (image: TProduct["featuredImage"], title: TProduct["title"]) => ReactNode
}

export function Card({ children, href, product, image }: CardProps) {
    const { featuredImage: image, title } = product

    return (
        <Link
            className="card image-full card-compact grid-cols-1 !rounded-3xl before:hidden"
            variants={fadeInUp}
            href={href}
        >
            {children(image, title)}
            <span className="card-body mt-auto rounded-b-3xl bg-white/10 !py-2 backdrop-blur-[10px] backdrop-saturate-[1.8]">
                <h2 className="truncate text-center text-sm font-bold text-primary-content">{title}</h2>
            </span>
        </Link>
    )
}
