"use client"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./Featured.css"

import Product from "@/components/product"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { useLoader } from "@/lib/state"
import { useWindowSize } from "@react-hookz/web/esm/useWindowSize"
import { useRef } from "react"

import type { Image, Product as TProduct } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"

type FeaturedProps = {
    featured: TProduct[]
} & HTMLAttributes<HTMLElement>

export function Featured({ featured, ...props }: FeaturedProps) {
    const { toggleLoading, LoadingSpinner } = useLoader()

    const sliderRef = useRef<AliceCarousel>(null)
    const width = useWindowSize(undefined, true).width

    const carouselItems = featured.map(({ featuredImage, title }, i) => (
        <Product.Card
            carouselItem
            key={i}
        >
            <Product.Image.Static
                key={featuredImage?.id}
                image={featuredImage as Image}
                title={title}
                imageProps={{
                    onDragStart: (e) => e.preventDefault(),
                }}
            />
            <Product.Title.Overlay>
                <Product.Title
                    truncate
                    title={title}
                />
            </Product.Title.Overlay>
        </Product.Card>
    ))

    return (
        <section
            className="bg-blur-200 card space-y-6 rounded-3xl py-6"
            {...props}
        >
            <h2 className="text-center text-lg font-bold text-accent-content">
                Featured Items
            </h2>

            <LoadingSpinner />

            <AliceCarousel
                onInitialized={toggleLoading}
                ref={sliderRef}
                items={carouselItems}
                infinite
                keyboardNavigation
                disableDotsControls
                disableButtonsControls
                mouseTracking
                paddingLeft={70}
                paddingRight={70}
                autoPlay
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
                    className="btn-primary btn rounded-xl"
                >
                    See More
                </Link>

                <span className="flex gap-2">
                    <button
                        aria-controls="alice-carousel"
                        className="btn-square btn-sm btn bg-base-100"
                        onClick={() => sliderRef?.current?.slidePrev() || null}
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        aria-controls="alice-carousel"
                        className="btn-square btn-sm btn bg-base-100"
                        onClick={() => sliderRef?.current?.slideNext() || null}
                    >
                        <ChevronRight />
                    </button>
                </span>
            </div>
        </section>
    )
}
