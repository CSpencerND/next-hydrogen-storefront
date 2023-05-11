import { Card } from "@/components/primitives"
import type { ComponentProps } from "react"

type CardProps = ComponentProps<typeof Card.Figure> & ComponentProps<typeof Card.Root>

export function ProductCard({ image, title, href }: CardProps) {
    return (
        <Card.Root
            variant="glass"
            href={href}
        >
            <Card.Figure image={image} />
            <Card.Footer variant="absolute">
                <Card.Title>{title}</Card.Title>
            </Card.Footer>
        </Card.Root>
    )
}
