import { cn } from "@/lib"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type HTMLAttributes } from "react"

const footerVariants = cva("p-2 rounded-b-3xl flex items-center", {
    variants: {
        overlay: {
            true: "bg-blur absolute bottom-0 isolate w-full p-3 before:bg-neutral/20",
        },
        center: {
            true: "justify-center",
        },
    },
})

type CardFooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof footerVariants>

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ overlay, center, className, ...props }, ref) => (
    <footer
        ref={ref}
        className={cn(footerVariants({ overlay, center, className }))}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { CardFooter }
