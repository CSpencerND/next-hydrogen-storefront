"use client"

import { useLoader } from "@/lib/state"
import { useWindowSize } from "@react-hookz/web/esm/useWindowSize"
import { useRef } from "react"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./Featured.css"

import { ProductImage } from "@/components/common"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "react-iconly"
import PulseLoader from "react-spinners/PulseLoader"

import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { LoaderSizeProps } from "react-spinners/helpers/props"

type LoaderT = ({
    loading,
    color,
    speedMultiplier,
    cssOverride,
    size,
    ...additionalprops
}: LoaderSizeProps) => JSX.Element | null

type FeaturedProps = {
    featured: Product[]
    renderLoader?: {
        Loader: LoaderT
        loaderColor: string
        loaderSize: number
    }
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export function Featured({ featured, renderLoader, ...props }: FeaturedProps) {
    const isLoading = useLoader((s) => s.isLoading)
    const setLoadingFalse = useLoader((s) => s.setLoadingFalse)

    const sliderRef = useRef<AliceCarousel>(null)
    const width = useWindowSize(undefined, true).width

    const carouselItems = featured.map(({ featuredImage, title }) => (
        <ProductImage
            key={featuredImage?.id}
            image={featuredImage as Image}
            title={title}
            imageProps={{
                onDragStart: (e) => e.preventDefault(),
            }}
        />
    ))

    const {
        Loader = PulseLoader,
        loaderColor = "#00aaff",
        loaderSize,
    } = renderLoader ?? {}

    return (
        <section
            className="bg-blur-200 card space-y-6 rounded-3xl py-6"
            {...props}
        >
            <h2 className="text-center text-lg font-bold text-accent-content">
                Featured Items
            </h2>

            <Loader
                loading={isLoading}
                color={loaderColor}
                size={loaderSize}
                className="mx-auto"
            />

            <AliceCarousel
                onInitialized={setLoadingFalse}
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
                        className="btn-square btn-sm btn rounded-md bg-base-100"
                        onClick={() => sliderRef?.current?.slidePrev() || null}
                    >
                        <ChevronLeft set="curved" />
                    </button>

                    <button
                        aria-controls="alice-carousel"
                        className="btn-square btn-sm btn rounded-md bg-base-100"
                        onClick={() => sliderRef?.current?.slideNext() || null}
                    >
                        <ChevronRight set="curved" />
                    </button>
                </span>
            </div>
        </section>
    )
}
