import NextImage from "next/image"
import { forwardRef } from "react"

import type { Maybe, Image as TShopImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { ComponentPropsWithoutRef } from "react"

type FigureProps = {
    image: Maybe<TShopImage> | undefined
    title?: string
} & Omit<ComponentPropsWithoutRef<typeof NextImage>, "src" | "alt" | "width" | "height">

const CardFigure = forwardRef<HTMLDivElement, FigureProps>(({ className, image, title, ...props }, ref) => (
    <figure
        ref={ref}
        className={className}
        {...props}
    >
        {image && (
            <NextImage
                src={image.url || ""}
                alt={image.altText ?? title ?? " "}
                width={image.width ?? 1024}
                height={image.height ?? 1024}
                role="presentation"
                className="h-full object-cover object-center"
            />
        )}
    </figure>
))
CardFigure.displayName = "CardFigure"

export { CardFigure }
