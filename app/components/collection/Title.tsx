import type { HTMLAttributes } from "react"

type TitleProps = {
    title: string
    centered?: boolean
} & HTMLAttributes<HTMLHeadingElement>

export function Title({ title, centered, ...props }: TitleProps) {
    return (
        <div
            className={`
                bg-blur-base card-body absolute bottom-0 w-full
                bg-gradient-to-t from-base-100 to-transparent p-2
            `}
        >
            <h1
                className={centered ? "card-title mx-auto" : ""}
                {...props}
            >
                {title}
            </h1>
        </div>
    )
}
