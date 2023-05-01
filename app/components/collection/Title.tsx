import { cn } from "@/lib/utils"

type TitleProps = {
    title: string
    truncated?: boolean
    centered?: boolean
    rounded?: boolean
    className?: string
}

export function Title({ title, truncated, centered, rounded, className }: TitleProps) {
    return (
        <div
            className={cn(
                `
                bg-blur-base absolute bottom-0 flex w-full
                bg-gradient-to-t from-base-100 to-transparent p-2
            `,
                rounded ? "rounded-b-3xl" : ""
            )}
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
