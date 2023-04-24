"use client"

import type { ShopifyImageProps } from "@shopify/hydrogen-react/dist/types/Image"
import type { Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"

import { useProductStore } from "@/lib/state"
import { cn } from "@/lib/utils"

import { Image as ShopImage } from "@shopify/hydrogen-react"

type ProductImageProps = {
    title: string
    rounded?: "full" | "top" | "bottom" | "none"
    imageProps?: Partial<ShopifyImageProps>
    imageClassName?: string
    className?: string
}

type StaticImageProps = ProductImageProps & {
    image: TImage
}

/**
 * @usage Use the Static member if not using inside ProductProvider
 * @member Static - Omits the use of useProductStore for use without ProductProvider
 */
function Image(props: ProductImageProps) {
    const { title, rounded = "full", className } = props

    const currentImage = useProductStore((s) => s.currentImage)

    return (
        <figure className={cn("overflow-hidden", className)}>
            <ShopImage
                role="presentation"
                data={currentImage}
                alt={currentImage.altText ?? title}
                className={cn(
                    "bg-glass h-full w-full object-cover object-center",
                    rounded === "full" ? "rounded-3xl" : "",
                    rounded === "top" ? "rounded-t-3xl" : "",
                    rounded === "bottom" ? "rounded-b-3xl" : "",
                    props.imageClassName
                )}
                {...props.imageProps}
            />
        </figure>
    )
}

/**
 * @usage Omits the use of useProductStore for use without ProductProvider. Must provide image data.
 */
function Static(props: StaticImageProps) {
    const { image, title, rounded = "full", className } = props

    return (
        <figure className={cn("overflow-hidden", className)}>
            <ShopImage
                role="presentation"
                data={image}
                alt={image.altText ?? title}
                className={cn(
                    "bg-glass h-full w-full object-cover object-center",
                    rounded === "full" ? "rounded-3xl" : "",
                    rounded === "top" ? "rounded-t-3xl" : "",
                    rounded === "bottom" ? "rounded-b-3xl" : "",
                    props.imageClassName
                )}
                {...props.imageProps}
            />
        </figure>
    )
}

Image.Static = Static
export { Image }
