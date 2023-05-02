import { cn } from "@/lib/utils"

import type Children from "types"

type TitleProps = {
    title: string
    centered?: boolean
    truncate?: boolean
    className?: string
}

/**
 *  @prop title The title of the product.
 *  @prop centered Centers the title in the parent container.
 *  @prop truncate Truncates the title to one line with ellipsis.
 *
 *  @member Overlay.
 */
function Title({ title, centered, truncate, className }: TitleProps) {
    return (
        <h2
            className={cn(
                "text-sm font-bold",
                centered ? "mx-auto" : "",
                truncate ? "truncate" : "",
                className
            )}
        >
            {title}
        </h2>
    )
}

type OverlayProps = Children & {
    rounded?: boolean
}

/**
 *  @usage Wrap this around Text to position absolute and overlay on bottom of Image
 *
 *  @memberof Title
 */
function Overlay({ children, rounded, ...props }: OverlayProps) {
    return (
        <div
            id="titleOverlay"
            className={cn(
                `
                absolute bottom-0 flex w-full
                bg-gradient-to-t from-base-100 to-transparent
                p-2 backdrop-blur-lg backdrop-saturate-150
            `,

                rounded ? "rounded-b-3xl" : ""
            )}
            {...props}
        >
            <div
                aria-hidden
                className="absolute left-0 top-0 -z-10 h-full w-full backdrop-blur-lg backdrop-saturate-150"
            />
            {children}
        </div>
    )
}

Title.Overlay = Overlay

export { Title }
