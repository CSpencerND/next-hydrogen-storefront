"use client"

import { cn } from "@/lib/utils"

import { useProductStore } from "@/lib/state"
import { ProductPrice } from "@shopify/hydrogen-react"

import type { ClassName } from "types"

export function Price({ className }: ClassName) {
    const product = useProductStore((s) => s.product)

    return (
        <ProductPrice
            as="p"
            className={cn("text-xs md:text-sm", className)}
            data={product}
            priceType="regular"
            valueType="max"
            withoutTrailingZeros
        />
    )
}
