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
function Title({ title, centered, truncate, ...props }: TitleProps) {
    return (
        <h2
            className={cn(
                "text-sm font-bold",
                centered ? "mx-auto" : "",
                truncate ? "truncate" : "",
                props.className
            )}
        >
            {title}
        </h2>
    )
}

/**
 *  @usage Wrap this around Text to position absolute and overlay on bottom of Image
 *
 *  @memberof Title
 */
function Overlay({ children, ...props }: Children) {
    return (
        <div
            id="titleOverlay"
            className={cn(`
                bg-blur-base absolute bottom-0 w-full
                bg-gradient-to-t from-base-100 to-transparent p-2
            `)}
            {...props}
        >
            {children}
        </div>
    )
}

Title.Overlay = Overlay
export { Title }
