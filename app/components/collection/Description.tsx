"use client"

import type { HTMLAttributes } from "react"

import { useIsomorphicLayoutEffect } from "@react-hookz/web"
import { sanitize } from "dompurify"
import { useState } from "react"

type DescriptionProps = {
    descriptionHtml: string
} & HTMLAttributes<HTMLElement>

export function Description({ descriptionHtml }: DescriptionProps) {
    const [sanitizedDescription, setSanitizedDescription] = useState<string>("")

    useIsomorphicLayoutEffect(() => {
        if (!descriptionHtml) return
        const desc = sanitize(descriptionHtml)
        setSanitizedDescription(desc)
    }, [])

    return (
        <aside
            dangerouslySetInnerHTML={{
                __html: sanitizedDescription,
            }}
        />
    )
}
