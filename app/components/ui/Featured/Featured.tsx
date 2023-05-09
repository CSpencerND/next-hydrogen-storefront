"use client"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./Featured.css"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

import { useHydrated, useLoader } from "@/lib/state"
import { useWindowSize } from "@react-hookz/web/esm/useWindowSize"
import { useRef, useState } from "react"

import type { Product as TProduct } from "@shopify/hydrogen-react/storefront-api-types"

type FeaturedProps = {
    featured: TProduct[]
}

import NextImage from "next/image"
import { useMountEffect } from "@react-hookz/web"

export function FeaturedCollection({ featured }: FeaturedProps) {
    const sliderRef = useRef<AliceCarousel>(null)
    const width = useWindowSize(undefined, true).width
    const autoplay: boolean = useHydrated()

    const { toggleLoading, LoadingSpinner } = useLoader()
    const [items, setItems] = useState<JSX.Element[]>([ <LoadingSpinner /> ])

    useMountEffect(() => {
        const items = featured.map(({ featuredImage, title }) => (
            <div
                className="card image-full card-compact grid-cols-1 !rounded-3xl before:hidden"
                key={featuredImage?.id}
            >
                <figure className="glass rounded-3xl">
                    {featuredImage && (
                        <NextImage
                            src={featuredImage?.url}
                            alt={featuredImage.altText ?? title ?? " "}
                            width={featuredImage.width ?? 1024}
                            height={featuredImage.height ?? 1024}
                            role="presentation"
                            onDragStart={(e) => e.preventDefault()}
                        />
                    )}
                </figure>
                <span className="card-body mt-auto rounded-b-3xl bg-white/10 backdrop-blur-[10px] backdrop-saturate-[1.8]">
                    <h2 className="truncate text-center text-sm font-bold">{title}</h2>
                </span>
            </div>
        ))
        setItems(items)
        toggleLoading()
    })

    return (
        <>
            <AliceCarousel
                ref={sliderRef}
                items={items}
                infinite
                keyboardNavigation
                disableDotsControls
                disableButtonsControls
                mouseTracking
                paddingLeft={70}
                paddingRight={70}
                autoPlay={autoplay}
                autoPlayStrategy="all"
                autoPlayInterval={1250}
                innerWidth={width}
                responsive={{
                    0: {
                        items: 1,
                    },
                    640: {
                        items: 2,
                    },
                    1024: {
                        items: 3,
                    },
                    1280: {
                        items: 4,
                    },
                }}
            />

            <div className="flex items-center justify-evenly">
                <Link
                    href="collections/staff-picks"
                    className="btn-primary btn"
                >
                    See More
                </Link>

                <span className="flex gap-2">
                    <button
                        aria-controls="alice-carousel"
                        className="btn-square btn-sm btn rounded-lg bg-base-100"
                        onClick={() => sliderRef?.current?.slidePrev() || null}
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        aria-controls="alice-carousel"
                        className="btn-square btn-sm btn rounded-lg bg-base-100"
                        onClick={() => sliderRef?.current?.slideNext() || null}
                    >
                        <ChevronRight />
                    </button>
                </span>
            </div>
        </>
    )
}
