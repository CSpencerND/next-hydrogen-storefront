"use client"

import { useProduct } from "@/lib/state"

import { Card } from "./Card"
import { ProductImage } from "./Image"
import { Swatch } from "./Swatch"
import { Title } from "./Title"

/** Renders a full product card with all it's subcomponents.
 *  Must be wrapped in a ProductProvider.
 */
export function Item() {
    const currentImage = useProduct((s) => s.currentImage)
    const title = useProduct((s) => s.product.title)
    const handle = useProduct((s) => s.product.handle)

    return (
        <li className="card relative h-full overflow-hidden rounded-2xl">
            <Card href="\0">
                <ProductImage
                    image={currentImage}
                    title={title ?? "Product"}
                    rounded={false}
                />
                <Title
                    overlayed
                    truncate
                    title={title ?? "Product"}
                />
            </Card>
            <Swatch attached />
        </li>
    )
}
