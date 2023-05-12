"use client"

import NextImage from "next/image"

import { cn, useLoader } from "@/lib"
import { useUpdateEffect } from "@react-hookz/web"
import { forwardRef, useRef } from "react"

import type { Maybe, Image as TShopImage } from "@shopify/hydrogen-react/storefront-api-types"
import type { ComponentPropsWithoutRef } from "react"

type FigureProps = {
    image: Maybe<TShopImage> | undefined
    title?: string
} & Omit<ComponentPropsWithoutRef<typeof NextImage>, "src" | "alt" | "width" | "height">

const CardFigure = forwardRef<HTMLDivElement, FigureProps>(({ className, image, title, ...props }, ref) => {
    const { LoadingSpinner, setLoadingTrue, setLoadingFalse } = useLoader()
    const imgRef = useRef<HTMLImageElement | null>(null)

    useUpdateEffect(() => {
        if (imgRef.current && imgRef.current.complete) return
        setLoadingTrue()
    }, [image])

    return (
        <figure
            ref={ref}
            // className={cn("", className)}
            className="max-h-full"
            // className={cn("grid, place-items-center", className)}
            {...props}
        >
            <LoadingSpinner className="max-h-full" />
            {/* <LoadingSpinner className="max-h-fit max-w-fit py-28" /> */}
            {image && (
                <NextImage
                    ref={imgRef}
                    src={image.url}
                    alt={image.altText ?? title ?? " "}
                    width={image.width ?? 1024}
                    height={image.height ?? 1024}
                    role="presentation"
                    className="h-full object-cover object-center"
                    onLoadingComplete={setLoadingFalse}
                />
            )}
        </figure>
    )
})
CardFigure.displayName = "CardFigure"

export { CardFigure }
