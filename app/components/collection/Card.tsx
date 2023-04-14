import { cn } from "@/lib/utils"

import Link from "next/link"

import type { Url } from "next/dist/shared/lib/router/router"
import type { PropsWithChildren } from "react"

type CardProps = PropsWithChildren<{
    href: Url
    rounded?: boolean
}>

export function Card({ href, children, rounded, ...props }: CardProps) {
        return (
            <Link
                href={href}
                className={cn(`
                    relative h-full overflow-hidden
                    text-primary-content transition
                    hover:brightness-105 active:scale-95
                `,
                    rounded ? "rounded-2xl" : ""
                )}
                {...props}
            >
                {children}
            </Link>
        )
}