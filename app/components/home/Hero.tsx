import type { NextFont } from "next/dist/compiled/@next/font"
import type { StaticImageData } from "next/image"

import { getStorefrontProps } from "@/lib/storefront"
import { cn } from "@/lib/utils"

import Image from "next/image"
import Link from "next/link"

type HeroProps = {
    image: StaticImageData
    font?: NextFont
    rounded?: boolean
    buttonText?: string
}

export async function Hero({
    font,
    image,
    rounded,
    buttonText = "Go Shopping!",
    ...props
}: HeroProps) {
    const { brand } = await getStorefrontProps()

    return (
        <section className={cn("hero overflow-hidden shadow-lg", rounded ? "rounded-3xl" : "")}>
            <Image
                className="aspect-video max-h-[calc(100vh-196px)] object-cover object-top"
                src={image}
                alt={brand?.slogan ?? brand?.coverImage?.alt ?? ""}
                placeholder="blur"
                priority
                {...props}
            />
            <div
                aria-hidden
                className="hero-overlay bg-black/30"
            />
            <div className="hero-content flex flex-col text-center">
                <h1
                    className={cn(font?.className ?? "", "text-3xl")}
                    style={{
                        textShadow: "1px 2px 2px black, -1px -2px 2px black",
                    }}
                >
                    {brand?.slogan ?? brand?.coverImage?.alt}
                </h1>
                <Link
                    href="/collections"
                    className="bg-blur glass btn"
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    )
}
