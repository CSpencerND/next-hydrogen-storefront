"use client"

import { useProduct } from "@/lib/state"

import { Card } from "./Card"
import { ProductImage } from "./Image"
import { Swatch } from "./Swatch"
import { Title } from "./Title"

/** Renders a full product card with all it's subcomponents.
 *  Must be wrapped in a ProductProvider.
 */
export function Item({collection}: {collection: string}) {
    const currentImage = useProduct((s) => s.currentImage)
    const title = useProduct((s) => s.product.title) as string
    const handle = useProduct((s) => s.product.handle) as string

    const PRODUCT_URL = `/collections/${collection}/${handle}` as const

    return (
        <li className="card relative h-full overflow-hidden rounded-2xl">
            <Card href={PRODUCT_URL}>
                <ProductImage
                    image={currentImage}
                    title={title}
                    rounded={false}
                />
                <Title
                    overlayed
                    truncate
                    title={title}
                />
            </Card>
            <Swatch attached />
        </li>
    )
}
