import { Card } from "@/components/primitives"
import { Backdrop } from "./Backdrop"
import type { ComponentProps } from "react"

type CardProps = ComponentProps<typeof Card.Figure> & ComponentProps<typeof Card.Root>

export function ProductCard({ image, title, href }: CardProps) {
    return (
        <Card.Root
            variant="glass"
            href={href}
        >
            <Backdrop />
            <Card.Figure image={image}/>
            <Card.Footer variant="absolute">
                <Backdrop />
                <Card.Title className="z-50">{title}</Card.Title>
            </Card.Footer>
        </Card.Root>
    )
}
