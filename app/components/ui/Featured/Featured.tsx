"use client"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./Featured.css"

import { ProductCard } from "@/components"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

import { useHydrated, useLoader } from "@/lib/state"
import { useMountEffect } from "@react-hookz/web"
import { useWindowSize } from "@react-hookz/web/esm/useWindowSize"
import { useRef, useState } from "react"

import type { Product as TProduct } from "@shopify/hydrogen-react/storefront-api-types"

type FeaturedProps = {
    featured: TProduct[]
    collectionHandle: string
}

export function FeaturedCollection({ featured, collectionHandle }: FeaturedProps) {
    const sliderRef = useRef<AliceCarousel>(null)
    const width = useWindowSize(undefined, true).width
    const autoplay: boolean = useHydrated()

    const { toggleLoading, LoadingSpinner } = useLoader()
    const [items, setItems] = useState<JSX.Element[]>([<LoadingSpinner />])

    useMountEffect(() => {
        const items = featured.map((product) => {
            const { featuredImage: image, title, handle } = product
            const href = `/collections/${collectionHandle}/${handle}`

            return (
                <ProductCard
                    title={title}
                    href={href}
                    image={image}
                    onDragStart={(e) => e.preventDefault()}
                />
            )
        })
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
                        onClick={() => sliderRef?.current?.slidePrev() ?? null}
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        aria-controls="alice-carousel"
                        className="btn-square btn-sm btn rounded-lg bg-base-100"
                        onClick={() => sliderRef?.current?.slideNext() ?? null}
                    >
                        <ChevronRight />
                    </button>
                </span>
            </div>
        </>
    )
}
