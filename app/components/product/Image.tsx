"use client"

import type { HydrogenImageProps } from "@shopify/hydrogen-react/dist/types/Image"
import type { Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { ImageProps as NextImageProps } from "next/image"

import { useProductStore } from "@/lib/state"
import { cn } from "@/lib/utils"

import { Image as ShopImage } from "@shopify/hydrogen-react"
import NextImage from "next/image"

type ProductImageProps = {
    title: string
    rounded?: "full" | "top" | "bottom" | "none"
    imageProps?: Partial<HydrogenImageProps>
    imageClassName?: string
    className?: string
}

type StaticImageProps = Omit<ProductImageProps, "imageProps"> & {
    image: TImage
    imageProps?: Partial<NextImageProps>
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
                alt={currentImage.altText ?? title ?? ""}
                className={cn(
                    "glass h-full w-full object-cover object-center",
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
    const { url, altText, width, height } = image

    return (
        <figure className={cn("overflow-hidden", className)}>
            <NextImage
                role="presentation"
                src={url}
                alt={altText ?? title ?? ""}
                width={width || 1024}
                height={height || 1024}
                className={cn(
                    "glass h-full w-full object-cover object-center",
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
