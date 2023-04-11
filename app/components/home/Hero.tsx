import type { Brand, Maybe } from "@shopify/hydrogen-react/storefront-api-types"
import type { NextFont } from "next/dist/compiled/@next/font"
import type { StaticImageData } from "next/image"

import { cn } from "@/lib/utils"

import Image from "next/image"

type HeroProps = {
    image: StaticImageData
    data: Maybe<Brand>
    font?: NextFont
    rounded?: boolean
}

export function Hero({ data, font, image, rounded, ...props }: HeroProps) {
    return (
        <section
            className={cn("hero overflow-hidden shadow-box", rounded ? "rounded-3xl" : "")}
        >
            <Image
                className="aspect-video max-h-[calc(100vh-196px)] object-cover object-top"
                src={image}
                alt={data?.slogan ?? data?.coverImage?.alt ?? ""}
                placeholder="blur"
                {...props}
            />
            <div
                aria-hidden
                className="hero-overlay bg-black/30"
            />
            <div className="hero-content">
                <h1
                    className={cn(font?.className ?? "", "text-3xl")}
                    style={{
                        textShadow: "1px 2px 2px black, -1px -2px 2px black",
                    }}
                >
                    {data?.slogan ?? data?.coverImage?.alt}
                </h1>
            </div>
        </section>
    )
}
