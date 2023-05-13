import { Motion } from "@/components/ui"

import { cn } from "@/lib"
import { cva } from "class-variance-authority"
import { forwardRef } from "react"

import type { VariantProps } from "class-variance-authority"
import type { HTMLMotionProps } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"

const rootVariants = cva("relative overflow-hidden rounded-3xl shadow-lg", {
    variants: {
        glass: {
            true: "glass bg-blur before:bg-base-200/[22.36%]",
        },
    },
})

type CardRootProps = HTMLMotionProps<"div"> &
    VariantProps<typeof rootVariants> &
    Partial<ComponentPropsWithoutRef<typeof Motion.Link>>

const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(({ className, href, glass, ...props }, ref) => {
    if (!href) {
        return (
            <Motion.Div
                ref={ref}
                className={cn(rootVariants({ className, glass }))}
                {...props}
            />
        )
    }
    return (
        <Motion.Link
            href={href}
            className={cn("block [&_h3]:text-primary-content", rootVariants({ className, glass }))}
            {...props}
        />
    )
})
CardRoot.displayName = "CardRoot"

export { CardRoot }
