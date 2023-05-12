"use client"

import { ProductCard } from "@/components"

import { useProductStore } from "@/lib/state"

import type { ComponentProps } from "react"
type CardProps = Omit<ComponentProps<typeof ProductCard>, "image">

export function Preview({ href, title }: CardProps) {
    const currentImage = useProductStore((s) => s.currentImage)

    return (
        <ProductCard
            image={currentImage}
            href={href}
            title={title}
        />
    )
}
