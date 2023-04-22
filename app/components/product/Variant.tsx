"use client"

import type { ProductVariant } from "@shopify/hydrogen-react/storefront-api-types"

import { useProductStore, useShopifyProduct } from "@/lib/state/ProductStore"
import { useIsomorphicLayoutEffect } from "@react-hookz/web"

export function Variant() {
    const variants = useShopifyProduct().variants as ProductVariant[]
    const color = useProductStore((s) => s.selectedColor) as string
    const size = useProductStore((s) => s.selectedSize) as string

    const variant = useVariant(variants, color, size)
    const variantName = variant?.title

    return <p className="text-sm text-info">Selected: {variantName}</p>
}

function useVariant(variants: ProductVariant[], color: string, size: string) {
    const selectedOptions = useShopifyProduct().selectedOptions
    const setSelectedVariant = useShopifyProduct().setSelectedVariant
    const variant = useShopifyProduct().selectedVariant

    useIsomorphicLayoutEffect(() => {
        const variant = variants.find(
            (variant) =>
                variant.selectedOptions.some(
                    (option) => option.name === "Color" && option.value === color
                ) &&
                variant.selectedOptions.some(
                    (option) => option.name === "Size" && option.value === size
                )
        )
        if (variant) setSelectedVariant(variant)
    }, [selectedOptions])

    return variant
}
