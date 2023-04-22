"use client"

// TODO: Get the links for the products

import Product from "@/components/product"

import {
    CartLineProvider,
    CartLineQuantity,
    CartLineQuantityAdjustButton,
    Money,
    useCart,
    useCartLine,
} from "@shopify/hydrogen-react"
import { Trash2 as Delete, Minus, Plus } from "lucide-react"

import type { ProductVariant } from "@shopify/hydrogen-react/storefront-api-types"

export function Body() {
    const { lines } = useCart()
    const merchandise = useCartLine().merchandise as ProductVariant
    const { product, title: variantTitle, image, price } = merchandise
    const { title: productTitle, handle } = product

    const productURL = `/collections/${handle}`

    return lines?.map((line) => {
        if (!line) throw new Error("No line found!")

        return (
            <CartLineProvider
                line={line}
                key={line.id}
            >
                <>
                    <Product.Image.Static
                        title={variantTitle}
                        image={image!}
                        className="w-1/4"
                    />
                    <div className="ml-4 flex flex-1 flex-col text-xs">
                        <div className="flex items-baseline justify-between">
                            <h3 className="w-2/3 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                                {/* <Link href={productURL}>{productTitle}</Link> */}
                                {productTitle}
                            </h3>
                            <Money
                                as="span"
                                data={price}
                            />
                        </div>

                        <div className="mt-1">
                            <span>{variantTitle}</span>
                        </div>

                        <div className="relative flex flex-1 items-end justify-between">
                            <p className="">
                                <span>Qty </span>
                                <CartLineQuantity />
                            </p>

                            <div className="relative -bottom-1.5 grid grid-cols-3 gap-3">
                                <CartLineQuantityAdjustButton
                                    adjust="decrease"
                                    className="btn-secondary btn-square btn-xs btn rounded-md"
                                >
                                    <span className="sr-only">Decrease Quantity</span>
                                    <Minus />
                                </CartLineQuantityAdjustButton>

                                <CartLineQuantityAdjustButton
                                    adjust="increase"
                                    className="btn-secondary btn-square btn-xs btn rounded-md"
                                >
                                    <span className="sr-only">Increase Quantity</span>
                                    <Plus />
                                </CartLineQuantityAdjustButton>

                                <CartLineQuantityAdjustButton
                                    adjust="remove"
                                    className="btn-secondary btn-square btn-xs btn rounded-md"
                                >
                                    <span className="sr-only">Remove Item</span>
                                    <Delete />
                                </CartLineQuantityAdjustButton>
                            </div>
                        </div>
                    </div>
                </>
            </CartLineProvider>
        )
    })
}
