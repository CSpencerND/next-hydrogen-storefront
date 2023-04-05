import type { Brand, Maybe } from "@shopify/hydrogen-react/storefront-api-types"
import type { NextFont } from "next/dist/compiled/@next/font"
import type { StaticImageData } from "next/image"

import cn from "clsx"

import Image from "next/image"

type HeroProps = {
    data: Maybe<Brand> | undefined
    font?: NextFont
    image: StaticImageData
}

export function Hero({ data, font, image, ...props }: HeroProps) {
    return (
        <section className="hero overflow-hidden rounded-3xl shadow-box">
            <Image
                className="aspect-video max-h-[calc(100vh-196px)] object-cover object-top"
                src={image}
                alt={data?.slogan ?? data?.coverImage?.alt ?? ""}
                placeholder="blur"
                {...props}
            />
            <div aria-hidden className="hero-overlay bg-black/30" />
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
