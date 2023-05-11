"use client"

import {
    CartLineQuantity,
    CartLineQuantityAdjustButton,
    Money,
    useCartLine,
} from "@shopify/hydrogen-react"

import Product from "@/components/product"
import { Popover } from "@headlessui/react"
import { Minus, Plus } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib"
import { motion } from "framer-motion"

import type {
    CartLine,
    Image as TImage,
    MoneyV2,
} from "@shopify/hydrogen-react/storefront-api-types"
import type { Children, ClassName } from "types"
import { Fragment } from "react"

type ImageProps = {
    image: TImage
    title: string
    productURL: string
}

type BodyProps = {
    productTitle: string
    variantTitle: string
    productURL: string
    price: MoneyV2
    className?: string
} & Children

function CartLine({ className }: ClassName) {
    const {
        merchandise: {
            image,
            price,
            title: variantTitle,
            product: { title: productTitle, handle, onlineStoreUrl },
        },
    } = useCartLine() as CartLine

    const productURL = `/collections/full-catalog/${handle}`
    // const productURL = onlineStoreUrl ?? `/collections/full-catalog/${handle}`

    return (
        <motion.li
            className={cn("card card-side gap-6 rounded-none py-4 shadow-none", className)}
            variants={{
                close: {
                    x: "10%",
                    opacity: 0,
                },
                open: {
                    x: 0,
                    opacity: 1,
                },
            }}
        >
            <Image
                image={image!}
                title={productTitle}
                productURL={productURL}
            />
            <Body
                productTitle={productTitle}
                variantTitle={variantTitle}
                productURL={productURL}
                price={price}
            />
        </motion.li>
    )
}

function Image({ image, title, productURL }: ImageProps) {
    return (
        <Popover.Button as={Fragment}>
            <Link
                href={productURL}
                className="w-2/5 sm:w-1/4"
            >
                {/* <Product.Image.Static */}
                {/*     imageClassName="rounded-2xl sm:rounded-3xl" */}
                {/*     image={image} */}
                {/*     title={title} */}
                {/* /> */}
            </Link>
        </Popover.Button>
    )
}

function Body({ productTitle, variantTitle, productURL, price, className }: BodyProps) {
    return (
        <div className={cn("card-body p-0 text-xs sm:text-base w-3/5 sm:w-3/4", className)}>
            <div className="flex justify-between">
                <Popover.Button as={Fragment}>
                    <Link
                        href={productURL}
                        className="text-primary-content w-full"
                    >
                        <Product.Title
                            title={productTitle}
                            truncate
                            className="text-sm sm:text-base"
                        />
                    </Link>
                </Popover.Button>
            </div>
            <p>{variantTitle}</p>
            <div className="flex justify-between">
                <span className="self-center">
                    <Money
                        as="span"
                        data={price}
                    />
                </span>
                <span className="items-center card-actions gap-4">
                    <CartLineQuantityAdjustButton
                        adjust="decrease"
                        className="btn-secondary btn-square btn-xs btn rounded-sq sm:btn-sm"
                    >
                        <span className="sr-only">Decrease Quantity</span>
                        <Minus size={16} />
                    </CartLineQuantityAdjustButton>
                    <CartLineQuantity />
                    <CartLineQuantityAdjustButton
                        adjust="increase"
                        className="btn-secondary btn-square btn-xs btn rounded-sq sm:btn-sm"
                    >
                        <span className="sr-only">Increase Quantity</span>
                        <Plus size={16} />
                    </CartLineQuantityAdjustButton>
                </span>
            </div>
        </div>
    )
}

export default CartLine
