"use client"
import type { ShopifyImageProps } from "@shopify/hydrogen-react/dist/types/Image"
import type { Image as ImageT } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import { Image } from "@shopify/hydrogen-react"

type ProductImageProps = {
    image: ImageT
    title: string
    rounded?: true | false | "top" | "bottom"
    containerProps?: HTMLAttributes<HTMLElement>
    imageProps?: Partial<ShopifyImageProps>
}

export function ProductImage(props: ProductImageProps) {
    const { image, title, rounded = true, containerProps, imageProps } = props
    const altText = image?.altText ?? title

    return (
        <figure
            className={cn(
                "bg-glass overflow-hidden",
                rounded === true ? "rounded-2xl" : "",
                rounded === "top" ? "rounded-t-2xl" : "",
                rounded === "bottom" ? "rounded-b-2xl" : "",
                containerProps?.className ?? "",
                "flex flex-col"
            )}
        >
            <Image
                role="presentation"
                data={image}
                alt={altText ?? "loading"}
                {...imageProps}
            />
        </figure>
    )
}
