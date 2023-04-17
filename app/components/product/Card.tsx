import type { PropsWithChildren } from "react"

type CardProps = PropsWithChildren<{
    carouselItem?: boolean
}>

/**
 *  @usage Wraps the Product component.
 *
 *  @prop {boolean} carouselItem - Use this to avoid error if used as a carousel item, which are automatically wrapped in <li> tags.
 */
export function Card({ children, carouselItem, ...props }: CardProps) {
    const Wrapper = carouselItem ? "div" : "li"
    return (
        <Wrapper
            className={`
                relative h-full overflow-hidden
                rounded-2xl transition
                hover:brightness-105
            `}
            {...props}
        >
            {children}
        </Wrapper>
    )
}
