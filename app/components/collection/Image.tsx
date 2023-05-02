import NextImage, { ImageProps } from "next/image"

import type { Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type ProductImageProps = {
    image: TImage
    title: string
    rounded?: true | false | "top" | "bottom"
    containerProps?: HTMLAttributes<HTMLElement>
    imageProps?: Partial<ImageProps>
}

export function Image(props: ProductImageProps) {
    const { image, title, rounded = true, containerProps, imageProps } = props
    const altText = image?.altText ?? title ?? ""
    const { url, width, height } = image

    return (
        <figure
            className={cn(
                "glass overflow-hidden",
                rounded === true ? "rounded-3xl" : "",
                rounded === "top" ? "rounded-t-3xl" : "",
                rounded === "bottom" ? "rounded-b-3xl" : "",
                "flex flex-col"
            )}
            {...containerProps}
        >
            <NextImage
                role="presentation"
                src={url}
                width={width ?? 1024}
                height={height ?? 1024}
                alt={altText ?? "loading"}
                {...imageProps}
            />
        </figure>
    )
}
