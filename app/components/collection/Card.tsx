import { cn } from "@/lib/utils"

import Link from "next/link"

import type { Url } from "next/dist/shared/lib/router/router"
import type { PropsWithChildren } from "react"

type CardProps = PropsWithChildren<{
    href: Url
    rounded?: boolean
    className?: string
}>

export function Card({ href, children, rounded, ...props }: CardProps) {
    return (
        <li
            className={cn(
                `
                relative h-full overflow-hidden
                text-primary-content transition
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
        </li>
    )
}
