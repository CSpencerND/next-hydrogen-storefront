"use client"

import {
    CartLineQuantity,
    CartLineQuantityAdjustButton,
    Money,
    useCartLine,
} from "@shopify/hydrogen-react"

import Product from "@/components/product"
import { Popover } from "@headlessui/react"
import { Minus, Plus, Trash2 as Remove } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

import type { CartLine, Image as TImage, MoneyV2 } from "@shopify/hydrogen-react/storefront-api-types"
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

    const productURL = onlineStoreUrl ?? `/collections/full-catalog/${handle}`

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
            >
                <Actions />
            </Body>
        </motion.li>
    )
}

function Image({ image, title, productURL }: ImageProps) {
    return (
        <Popover.Button as={Fragment}>
            <Link
                href={productURL}
                className="w-1/4"
            >
                <Product.Image.Static
                    imageClassName="rounded-2xl sm:rounded-3xl"
                    image={image}
                    title={title}
                />
            </Link>
        </Popover.Button>
    )
}

function Body({
    productTitle,
    variantTitle,
    productURL,
    price,
    className,
    children,
}: BodyProps) {
    return (
        <div className={cn("card-body p-0 text-xs sm:text-sm", className)}>
            <div className="flex justify-between">
                <Popover.Button as={Fragment}>
                    <Link
                        href={productURL}
                        className="w-2/3 text-primary-content"
                    >
                        <Product.Title
                            title={productTitle}
                            truncate
                        />
                    </Link>
                </Popover.Button>
                <Money
                    as="span"
                    data={price}
                    className="self-center"
                />
            </div>
            <p>{variantTitle}</p>
            <div className="flex items-center justify-between">
                <p>
                    <span>Qty </span>
                    <CartLineQuantity />
                </p>
                {children}
            </div>
        </div>
    )
}

function Actions() {
    return (
        <div className="card-actions">
            <CartLineQuantityAdjustButton
                adjust="decrease"
                className="btn-secondary btn-square btn-xs btn rounded-sq sm:btn-sm"
            >
                <span className="sr-only">Decrease Quantity</span>
                <Minus size={16} />
            </CartLineQuantityAdjustButton>

            <CartLineQuantityAdjustButton
                adjust="increase"
                className="btn-secondary btn-square btn-xs btn rounded-sq sm:btn-sm"
            >
                <span className="sr-only">Increase Quantity</span>
                <Plus size={16} />
            </CartLineQuantityAdjustButton>

            <CartLineQuantityAdjustButton
                adjust="remove"
                className="btn-secondary btn-square btn-xs btn rounded-sq sm:btn-sm"
            >
                <span className="sr-only">Remove Item</span>
                <Remove size={16} />
            </CartLineQuantityAdjustButton>
        </div>
    )
}

export default CartLine
