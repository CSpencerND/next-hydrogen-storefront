import type { HTMLAttributes } from "react"

type TitleProps = {
    title: string
} & HTMLAttributes<HTMLHeadingElement>

export function Title({ title, ...props }: TitleProps) {
    return (
        <h1
            className="text-accent-content"
            {...props}
        >
            {title}
        </h1>
    )
}
