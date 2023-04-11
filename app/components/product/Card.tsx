import Link from "next/link"

import type { PropsWithChildren } from "react"

type CardProps = PropsWithChildren<{
    href?: string
}>

export function Card({ href, children, ...props }: CardProps) {
    return (
        <li className="card h-full overflow-hidden rounded-2xl ">
            <CardBody
                href={href}
                {...props}
            >
                {children}
            </CardBody>
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
