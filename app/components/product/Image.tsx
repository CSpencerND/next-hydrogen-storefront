"use client"

import type { ShopifyImageProps } from "@shopify/hydrogen-react/dist/types/Image"
import type { Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"

import { useProductStore } from "@/lib/state"
import { cn } from "@/lib/utils"

import { Image as ShopImage } from "@shopify/hydrogen-react"

type ProductImageProps = {
    image?: TImage
    title?: string
    rounded?: "full" | "top" | "bottom" | "none"
    containerProps?: HTMLAttributes<HTMLElement>
    imageProps?: Partial<ShopifyImageProps>
}

export function Image(props: ProductImageProps) {
    const {
        image,
        title,
        rounded = "full",
        containerProps,
        imageProps,
    } = props

    const currentImage = image ?? useProductStore((s) => s.currentImage)

    return (
        <figure
            className={cn(
                "bg-glass flex flex-col overflow-hidden",
                rounded === "full" ? "rounded-2xl" : "",
                rounded === "top" ? "rounded-t-2xl" : "",
                rounded === "bottom" ? "rounded-b-2xl" : ""
            )}
            {...containerProps}
        >
            <ShopImage
                role="presentation"
                data={currentImage}
                alt={image?.altText ?? title}
                {...imageProps}
            />
        </figure>
    )
}
