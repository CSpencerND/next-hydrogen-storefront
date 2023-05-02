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
                absolute bottom-0 flex w-full
                bg-gradient-to-t from-base-100 to-transparent
                p-2 backdrop-blur-lg backdrop-saturate-150
            `,
                rounded ? "rounded-b-3xl" : ""
            )}
        >
            <div
                aria-hidden={true}
                className="absolute left-0 top-0 -z-10 h-full w-full backdrop-blur-lg backdrop-saturate-150"
            />
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
