"use client"

import type { PropsWithChildren } from "react"
import { motion } from "framer-motion"

type CardProps = PropsWithChildren<{
    carouselItem?: boolean
}>

const fadeInUp = {
    hidden: { y: -80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

/**
 *  @usage Wraps the Product component.
 *
 *  @prop {boolean} carouselItem - Use this to avoid error if used as a carousel item, which are automatically wrapped in <li> tags.
 */
export function Card({ children, carouselItem, ...props }: CardProps) {
    if (carouselItem) {
        return (
            <motion.div
                variants={fadeInUp}
                className={`
                    relative h-full overflow-hidden rounded-3xl
                    hover:brightness-105
                `}
                {...props}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <motion.li
            variants={fadeInUp}
            className={`
                relative h-full overflow-hidden rounded-3xl
                hover:brightness-105
            `}
            {...props}
        >
            {children}
        </motion.li>
    )
}
