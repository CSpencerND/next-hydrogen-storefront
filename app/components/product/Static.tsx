import NextImage, { ImageProps as NextImageProps } from "next/image"

import type { Image as TImage } from "@shopify/hydrogen-react/storefront-api-types"

type ImageProps = {
    image: TImage
    title: string
    className?: string
    imageProps?: Partial<NextImageProps>
}

export function Static(props: ImageProps) {
    const { image, title } = props
    const { url, altText, width, height } = image

    return (
        <div className="card image-full card-compact grid-cols-1 !rounded-3xl before:hidden">
            <figure className="glass rounded-3xl">
                {image && (
                    <NextImage
                        src={url}
                        alt={altText ?? title ?? " "}
                        width={width ?? 1024}
                        height={height ?? 1024}
                        role="presentation"
                    />
                )}
            </figure>k
            <span className="card-body mt-auto rounded-b-3xl bg-white/10 backdrop-blur-[10px] backdrop-saturate-[1.8]">
                <h2 className="truncate text-center text-sm font-bold">{title}</h2>
            </span>
        </div>
    )
}
