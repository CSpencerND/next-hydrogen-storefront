import { cn } from "@/lib/utils"

type TitleProps = {
    title: string
    truncated?: boolean
    centered?: boolean
    className?: string
}

export function Title({ title, truncated, centered, className }: TitleProps) {
    return (
        <div
            className={`
                bg-blur-base flex absolute bottom-0 w-full
                bg-gradient-to-t from-base-100 to-transparent p-2
            `}
        >
            <h2
                className={cn(
                    "text-sm font-bold",
                    centered ? "mx-auto" : "",
                    truncated ? "truncate" : "",
                    className
                )}
            >
                {title}
            </h2>
        </div>
    )
}

