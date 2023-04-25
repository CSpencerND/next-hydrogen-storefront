"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { HTMLAttributes, PropsWithChildren } from "react"

type GridProps = PropsWithChildren & HTMLAttributes<HTMLMenuElement>

const staggerChildren = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.1,
        },
    },
}

export function Grid({ children, className }: GridProps) {
    return (
        <motion.menu
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className={cn("relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3", className)}
        >
            {children}
        </motion.menu>
    )
}
