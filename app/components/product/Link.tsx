import NextLink from "next/link"

import type { Url } from "next/dist/shared/lib/router/router"
import type { PropsWithChildren } from "react"

type LinkProps = PropsWithChildren<{
    href: Url
    rounded?: boolean
}>

export function Link({ href, children, ...props }: LinkProps) {
    return (
        <NextLink
            href={href}
            className="text-primary-content transition [&>#titleOverlay]:bottom-12"
            {...props}
        >
            {children}
        </NextLink>
    )
}
