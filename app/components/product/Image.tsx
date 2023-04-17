"use client"

import type { ShopifyImageProps } from "@shopify/hydrogen-react/dist/types/Image"
import type { Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"

import { useProductStore } from "@/lib/state"
import { cn } from "@/lib/utils"

import { Image as ShopImage } from "@shopify/hydrogen-react"

type ProductImageProps = {
    title: string
    rounded?: "full" | "top" | "bottom" | "none"
    containerProps?: HTMLAttributes<HTMLElement>
    imageProps?: Partial<ShopifyImageProps>
}

type StaticImageProps = ProductImageProps & {
    image: TImage
}

/**
 * @usage Omits the use of useProductStore for use without ProductProvider. Must provide image data.
 */
function Static(props: StaticImageProps) {
    const { image, title, rounded = "full", containerProps, imageProps } = props

    return (
        <figure
            className={cn(
                "bg-glass mx-auto flex flex-col overflow-hidden",
                rounded === "full" ? "rounded-2xl" : "",
                rounded === "top" ? "rounded-t-2xl" : "",
                rounded === "bottom" ? "rounded-b-2xl" : ""
            )}
            {...containerProps}
        >
            <ShopImage
                role="presentation"
                data={image}
                alt={image.altText ?? title}
                className="h-full w-full object-cover object-center"
                {...imageProps}
            />
        </figure>
    )
}

/**
 * @usage Use the Static member if not using inside ProductProvider
 * @member Static - Omits the use of useProductStore for use without ProductProvider
 */
function Image(props: ProductImageProps) {
    const { title, rounded = "full", containerProps, imageProps } = props

    const currentImage = useProductStore((s) => s.currentImage)

    return (
        <figure
            className={cn(
                "bg-glass mx-auto flex flex-col overflow-hidden",
                rounded === "full" ? "rounded-2xl" : "",
                rounded === "top" ? "rounded-t-2xl" : "",
                rounded === "bottom" ? "rounded-b-2xl" : ""
            )}
            {...containerProps}
        >
            <ShopImage
                role="presentation"
                data={currentImage}
                alt={currentImage.altText ?? title}
                className="h-full w-full object-cover object-center"
                {...imageProps}
            />
        </figure>
    )
}

Image.Static = Static
export { Image }
