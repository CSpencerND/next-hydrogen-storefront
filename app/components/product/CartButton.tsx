"use client"

import { useShopifyProduct } from "@/lib/state/ProductStore"
import { AddToCartButton, BuyNowButton } from "@shopify/hydrogen-react"

export function CartButton() {
    const variant = useShopifyProduct().selectedVariant
    const variantID = variant?.id

    return (
        <div className="flex justify-center gap-6 px-2.5 [&>button]:basis-1/2">
            <AddToCartButton
                variantId={variantID ?? ""}
                className="btn-outline btn-primary btn rounded-2xl border-2 border-primary-content !text-primary-content"
                accessibleAddingToCartLabel="Item is being added to cart with selected color and size"
            >
                Add To Cart
            </AddToCartButton>
            {/* <BuyNowButton */}
            {/*     variantId={variantID ?? ""} */}
            {/*     className="btn-primary btn rounded-2xl" */}
            {/* > */}
            {/*     Buy Now */}
            {/* </BuyNowButton> */}
        </div>
    )
}
