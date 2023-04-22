"use client"

import { useShopifyProduct } from "@/lib/state/ProductStore"
// import { AddToCartButton, BuyNowButton } from "@shopify/hydrogen-react"

export function CartButton() {
    const variant = useShopifyProduct().selectedVariant
    const variantID = variant?.id
    const variantName = variant?.title

    return (
        <div className="flex justify-center gap-6 px-2.5 [&>button]:basis-1/2">
            <button
                onClick={() => alert(`${variantName}: ${variantID} added to cart.`)}
                className="btn-outline btn-primary btn rounded-xl border-2 border-primary !text-primary-content"
            >
                Add To Cart
            </button>
            <button
                className="btn-primary btn rounded-xl"
                // variantId={""}
                // variantId={variantID ?? ""}
            >
                Buy Now
            </button>
        </div>
    )
}

// export function Cart() {
//     const variant = useShopifyProduct().selectedVariant
//     const variantID = variant?.id
//     const variantName = variant?.title

//     return (
//         <div className="flex justify-center gap-6 px-2.5 [&>button]:basis-1/2">
//             <AddToCartButton
//                 className="btn-outline btn-primary btn rounded-xl border-2 border-primary !text-primary-content"
//                 variantId={variantID}
//                 accessibleAddingToCartLabel="Item is being added to cart with selected color and size"
//             >
//                 Add To Cart
//             </AddToCartButton>

//             <BuyNowButton
//                 className="btn-primary btn rounded-xl"
//                 variantId={variantID}
//                 accessibleAddingToCartLabel="Item is being added to cart with selected color and size"
//             >
//                 Buy Now
//             </BuyNowButton>
//         </div>
//     )
// }
