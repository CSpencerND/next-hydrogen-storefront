import { MotionDiv, MotionLink } from "@/lib"
import Link from "next/link"

import { cn } from "@/lib"
import { cva } from "class-variance-authority"
import { forwardRef } from "react"

import type { Variants } from "@/lib"
import type { VariantProps } from "class-variance-authority"
import type { HTMLMotionProps } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"

const fadeInUp: Variants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const rootVariants = cva("relative overflow-hidden rounded-3xl shadow-lg", {
    variants: {
        variant: {
            default: "bg-base-200/60",
            glass: "glass",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

type CardRootProps = HTMLMotionProps<"div"> &
    VariantProps<typeof rootVariants> &
    Partial<ComponentPropsWithoutRef<typeof Link>>

const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(({ className, variant, href, ...props }, ref) => {
    if (!href) {
        return (
            <MotionDiv
                ref={ref}
                className={cn(rootVariants({ variant, className }))}
                variants={fadeInUp}
                {...props}
            />
        )
    }
    return (
        <MotionLink
            ref={ref}
            href={href}
            className={cn("block [&_h3]:text-primary-content", rootVariants({ variant, className }))}
            variants={fadeInUp}
            {...props}
        />
    )
})
CardRoot.displayName = "CardRoot"

export { CardRoot }
