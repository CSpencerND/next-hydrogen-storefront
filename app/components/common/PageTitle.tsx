import type { HTMLAttributes } from "react"

type PageTitleProps = {
    title: string
} & HTMLAttributes<HTMLHeadingElement>

export function PageTitle({ title, className, ...props }: PageTitleProps) {
    return (
        <h1
            className="text-xl font-bold text-accent-content"
            {...props}
        >
            {title}
        </h1>
    )
}
