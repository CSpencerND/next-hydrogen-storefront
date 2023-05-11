import { cn } from "@/lib"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type HTMLAttributes } from "react"

const footerVariants = cva("p-2", {
    variants: {
        variant: {
            default: "flex items-center",
            absolute:
                "absolute bottom-0 w-full bg-white/10 p-3 backdrop-blur-lg backdrop-saturate-200",
        },
        defaultVariants: {
            variant: "default",
        },
    },
})

type CardFooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof footerVariants>

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ variant, className, ...props }, ref) => (
    <footer
        ref={ref}
        className={cn(footerVariants({ variant, className }))}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { CardFooter }
