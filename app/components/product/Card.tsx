import Link from "next/link"

import type { ElementType, PropsWithChildren } from "react"

type CardProps = PropsWithChildren<{
    href?: string
}>

export function Card({ href, children, ...props }: CardProps) {
    if (href) {
        return (
            <Link
                href={href}
                className={`
                    card relative h-full overflow-hidden
                    rounded-2xl text-primary-content
                    transition-all hover:brightness-105 active:scale-95
                `}
                {...props}
            >
                {children}
            </Link>
        )
    }
    return (
        <div
            className="card relative h-full overflow-hidden rounded-2xl transition-all"
            {...props}
        >
            {children}
        </div>
    )
}

// type WrapperProps<P = Record<string, unknown>> = PropsWithChildren & {
//     as?: ElementType
// } & P

// type CardProps<P = Record<string, unknown>> = PropsWithChildren & {
//     href?: string
//     props?: P
// }

// function Wrapper({ children, as: Component = Link, ...props }: WrapperProps) {
//     return <Component {...props}>{children}</Component>
// }

// export function Card({ href, children, ...props }: CardProps) {
//     return (
//         <Wrapper
//             as={href ? Link : "div"}
//             href={href}
//             className={`
//                 card relative h-full overflow-hidden rounded-2xl
//                 text-primary-content transition-all
//                 hover:scale-105 hover:brightness-105
//                 active:scale-95
//             `}
//             {...props}
//         >
//             {children}
//         </Wrapper>
//     )
// }
