import type { HTMLAttributes, PropsWithChildren } from "react"

type SectionProps = PropsWithChildren & HTMLAttributes<HTMLElement>

export function Section({ children, ...props }: SectionProps) {
    return (
        <section
            className="mx-auto max-w-2xl space-y-8"
            {...props}
        >
            {children}
        </section>
    )
}
