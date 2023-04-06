import type { ShopifyImageProps } from "@shopify/hydrogen-react/dist/types/Image"
import type { Image as ImageT } from "@shopify/hydrogen-react/storefront-api-types"

import { Image } from "@shopify/hydrogen-react"
import cn from "clsx"

// const nullImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3C/svg%3E`

type ProductImageProps = {
    image: ImageT
    title: string
    rounded?: true | false | "top" | "bottom"
    containerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    imageProps?: Partial<ShopifyImageProps>
}

export function ProductImage(props: ProductImageProps) {
    const { image, title, rounded = true, containerProps, imageProps } = props
    const altText = image?.altText ?? title

    return (
        <figure
            className={cn(
                "bg-glass overflow-hidden",
                rounded === true ? "rounded-2xl" : "",
                rounded === "top" ? "rounded-t-2xl" : "",
                rounded === "bottom" ? "rounded-b-2xl" : "",
                containerProps?.className ?? ""
            )}
        >
            <Image
                data={image}
                role="presentation"
                alt={altText ?? "loading"}
                // src={image?.url ?? nullImage}
                // width={image?.width ?? 1024}
                // height={image?.height ?? 1024}
                {...imageProps}
            />
        </figure>
    )
}
