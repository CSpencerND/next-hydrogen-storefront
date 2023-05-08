import { getShop } from "@/lib/storefront"
import { cn } from "@/lib/utils"
import { hero } from "@/static"
import Image from "next/image"
import Link from "next/link"

import type { NextFont } from "next/dist/compiled/@next/font"

type HeroProps = {
    font?: NextFont
    rounded?: boolean
    buttonText?: string
    aspect?: "portrait" | "landscape"
}

export async function Hero({
    font,
    rounded = true,
    aspect = "landscape",
    buttonText = "Go Shopping!",
    ...props
}: HeroProps) {
    const { brand } = await getShop()
    return (
        <section
            className="aspect-h-9 aspect-w-16 max-h-[calc(100vh-192px)]"
            {...props}
        >
            <div
                className={cn(
                    "hero overflow-hidden shadow-lg",
                    aspect === "portrait" ? "min-h-screen" : "",
                    rounded ? "rounded-3xl" : ""
                )}
            >
                <Image
                    className="h-auto w-full object-cover object-center"
                    src={hero}
                    alt={brand?.slogan ?? brand?.coverImage?.alt ?? ""}
                    placeholder="blur"
                    priority
                />
                <div
                    className="hero-overlay"
                    aria-hidden={true}
                />
                <div className="relative grid h-5/6 grid-rows-3 text-center text-neutral-content">
                    <div aria-hidden={true} />
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
                        className="glass btn relative mx-auto w-fit text-primary-content shadow-box shadow-primary-content"
                    >
                        <div
                            className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary/60 backdrop-blur-lg backdrop-saturate-150"
                            aria-hidden={true}
                        />
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    )
}
