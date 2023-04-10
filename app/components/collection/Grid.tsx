import type { HTMLAttributes, PropsWithChildren } from "react"

type GridProps = PropsWithChildren & HTMLAttributes<HTMLMenuElement>

export function Grid({ children, className, ...props }: GridProps) {
    return (
        <menu
            className="relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3"
            {...props}
        >
            {children}
        </menu>
    )
}
