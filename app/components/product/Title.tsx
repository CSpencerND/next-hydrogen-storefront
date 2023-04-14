import { ConditionalWrapper } from "@/components/ui"
import { cn } from "@/lib/utils"
import type Children from "types"

type TitleProps = {
    title: string
    centered?: boolean
    truncate?: boolean
    overlayed?: boolean
}

function Overlay({ children }: Children) {
    return (
        <div className="bg-blur-base absolute bottom-0 w-full bg-gradient-to-t from-base-100 to-transparent p-2">
            {children}
        </div>
    )
}

export function Title({ title, centered, truncate, overlayed = false, ...props }: TitleProps) {
    return (
        <ConditionalWrapper
            condition={overlayed}
            wrapper={(children) => <Overlay>{children}</Overlay>}
        >
            <h2
                className={cn(
                    "text-sm font-bold",
                    centered ? "mx-auto" : "",
                    truncate ? "truncate" : ""
                )}
                {...props}
            >
                {title}
            </h2>
        </ConditionalWrapper>
    )
}
