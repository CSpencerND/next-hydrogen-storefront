"use client"

import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"

import { useLoader } from "@/lib/state"
import { useWindowSize } from "@react-hookz/web/esm/useWindowSize"
import { useRef } from "react"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./Featured.css"

import ProductImage from "@/components/common"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "react-iconly"

/** NOTE: import your loader from react-spinners
  *
  * import Loader from "react-spinners/HashLoader"
  */

type FeaturedProps = {
    featured: Product[]
    LoadingSpinner?: JSX.Element
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export function Featured({ featured, LoadingSpinner, ...props }: FeaturedProps) {
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

    return (
        <section className="bg-blur-200 card space-y-6 rounded-3xl py-6" {...props}>
            <h2 className="text-center text-lg font-bold text-accent-content">
                Featured Items
            </h2>
            
            { LoadingSpinner }
            {/** Define your loader here
               *
               * <Loader
               *     loading={isLoading}
               *     className="mx-auto"
               *     color="hsl(170, 79%, 43%)"
               *     size={96}
               * />
               */}

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
