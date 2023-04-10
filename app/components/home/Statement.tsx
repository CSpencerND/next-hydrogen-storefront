import type { HTMLAttributes, PropsWithChildren } from "react"

type StatementProps = PropsWithChildren & {
    heading?: string
} & HTMLAttributes<HTMLElement>

export function Statement({ heading, children, className, ...props }: StatementProps) {
    return (
        <article
            className="prose relative max-w-none space-y-6"
            {...props}
        >
            <h3 className="text-accent-content md:text-lg">{heading}</h3>
            {children}
        </article>
    )
}
