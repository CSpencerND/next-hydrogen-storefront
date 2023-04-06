import { PropsWithChildren } from "react"

type StatementProps = PropsWithChildren<{
    heading?: string
}>

export function Statement({ heading, children }: StatementProps) {
    return (
        <article className="prose relative max-w-none space-y-6">
            <h3 className="text-accent-content md:text-lg">{heading}</h3>
            {children}
        </article>
    )
}
