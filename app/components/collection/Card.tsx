"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"

import type { Url } from "next/dist/shared/lib/router/router"
import type { PropsWithChildren } from "react"

type CardProps = PropsWithChildren<{
    href: Url
    rounded?: boolean
    className?: string
}>

const fadeInUp = {
    hidden: { y: -80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

export function Card({ href, children, rounded, ...props }: CardProps) {
    return (
        <motion.li
            variants={fadeInUp}
            className={cn(
                `
                relative h-full overflow-hidden text-primary-content
                hover:brightness-105 active:scale-95
            `,
                rounded ? "rounded-3xl" : ""
            )}
        >
            <Link
                href={href}
                className={cn("text-primary-content transition", props.className)}
            >
                {children}
            </Link>
        </motion.li>
    )
}
