import Link from "next/link"

import type { PropsWithChildren } from "react"
import { Swatch } from "./Swatch"

type CardProps = PropsWithChildren<{
    href?: string
    colorSwatch?: boolean
}>

export function Card({ href, children, colorSwatch, ...props }: CardProps) {
    return (
        <li className="card h-full overflow-hidden">
            <CardBody
                href={href}
                {...props}
            >
                {children}
            </CardBody>
            {colorSwatch && (
                <span className="w-full overflow-x-scroll p-4 bg-gradient-to-t from-base-200 to-base-100">
                    <Swatch />
                </span>
            )}
        </li>
    )
}

function CardBody({ href, children, ...props }: CardProps) {
    if (!!href) {
        return (
            <Link
                href={href}
                className={`
                    relative text-primary-content transition
                    hover:brightness-105 active:scale-95
                `}
                {...props}
            >
                {children}
            </Link>
        )
    }

    return (
        <div
            className="relative"
            {...props}
        >
            {children}
        </div>
    )
}
