import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react"

type StatementProps = PropsWithChildren<{
    heading?: string
}> & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export function Statement({ heading, children, ...props }: StatementProps) {
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
