"use client"

import {
    CartLineQuantityAdjustButton,
    CartLineQuantity,
    Money,
    useCartLine,
} from "@shopify/hydrogen-react"

import Product from "@/components/product"
import { Minus, Plus, Trash2 as Remove } from "lucide-react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

import type { CartLine, Image, MoneyV2 } from "@shopify/hydrogen-react/storefront-api-types"
import type { Children, ClassName } from "types"

type ImageProps = {
    image: Image
    title: string
}

type BodyProps = {
    productTitle: string
    variantTitle: string
    price: MoneyV2
    className?: string
} & Children

function CartLine({ className }: ClassName) {
    const {
        merchandise: {
            image,
            price,
            title: variantTitle,
            product: { title: productTitle, handle },
        },
    } = useCartLine() as CartLine

    const productURL = `/products/${handle}`

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
            />
            <Body
                productTitle={productTitle}
                variantTitle={variantTitle}
                price={price}
            >
                <Actions />
            </Body>
        </motion.li>
    )
}

function Image({ image, title }: ImageProps) {
    return (
        <Product.Image.Static
            className="w-1/4"
            imageClassName="rounded-2xl sm:rounded-3xl"
            image={image}
            title={title}
        />
    )
}

function Body({ productTitle, variantTitle, price, className, children }: BodyProps) {
    return (
        <div className={cn("card-body p-0 text-xs", className)}>
            {/* <Link href={productURL}>{productTitle}</Link> */}
            <div className="flex justify-between">
                <Product.Title
                    title={productTitle}
                    truncate
                    className="w-2/3"
                />
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
