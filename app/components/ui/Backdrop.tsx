import { cn } from "@/lib"
import { HTMLAttributes, forwardRef } from "react"

const Backdrop = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        aria-hidden={true}
        className={cn(
            "pointer-events-none absolute inset-0 -z-10 h-full w-full rounded-[inherit] backdrop-blur-[10px] backdrop-saturate-[1.8]",
            className
        )}
        {...props}
    />
))
Backdrop.displayName = "Backdrop"

export { Backdrop }
