"use client"

import { ComponentProps, useState } from "react"
import { HashLoader as Loader } from "react-spinners"
import { cn } from "../utils/cn"

type LoaderState = {
    LoadingSpinner: ({ color, size, loading, className }: Partial<ComponentProps<typeof Loader>>) => JSX.Element
    toggleLoading: () => void
    setLoadingTrue: () => void
    setLoadingFalse: () => void
    isLoading: boolean
}

export const useLoader = (): LoaderState => {
    const [isLoading, setLoading] = useState<boolean>(true)
    const toggleLoading = () => setLoading((state) => !state)
    const setLoadingTrue = () => setLoading(true)
    const setLoadingFalse = () => setLoading(false)

    const LoadingSpinner = ({ className, color = "#00aaff", size = 96 }: Partial<ComponentProps<typeof Loader>>) => (
        <Loader
            color={color}
            size={size}
            loading={isLoading}
            className={cn("mx-auto h-fit max-h-full", className)}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )

    return { LoadingSpinner, toggleLoading, setLoadingTrue, setLoadingFalse, isLoading }
}
