"use client"

import { useProductStore } from "@/lib/state"
import { ProductPrice } from "@shopify/hydrogen-react"

export function Price() {
    const product = useProductStore((s) => s.product)

    return (
        <ProductPrice
            as="p"
            className="text-xs md:text-sm"
            data={product}
            priceType="regular"
            valueType="max"
            withoutTrailingZeros
        />
    )
}
