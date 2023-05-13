import { Motion } from "@/components/ui"
import { cn } from "@/lib"
import type { HTMLAttributes, PropsWithChildren } from "react"

type GridProps = PropsWithChildren & HTMLAttributes<HTMLMenuElement>

export function Grid({ children, className }: GridProps) {
    return (
        <Motion.Menu
            className={cn("relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3", className)}
        >
            {children}
        </Motion.Menu>
    )
}
