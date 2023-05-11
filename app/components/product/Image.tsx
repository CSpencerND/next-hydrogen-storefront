import { useProductStore } from "@/lib/state"
import { Figure } from "@/components/ui"

type ProductImageProps = {
    title: string
}

export function Image({ title }: ProductImageProps) {
    const currentImage = useProductStore((s) => s.currentImage)

    return (
        <Figure
            image={currentImage}
            title={title}
        />
    )
}
