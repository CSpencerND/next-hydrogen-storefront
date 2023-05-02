import { cn } from "@/lib/utils"
import NextImage, { ImageProps as NextImageProps } from "next/image"

import type { Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"

type StaticProps = {
    image: TImage
    title: string
    rounded?: "full" | "top" | "bottom" | "none"
    className?: string
    imageClassName?: string
    imageProps?: Partial<NextImageProps>
}

export function Static(props: StaticProps) {
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
