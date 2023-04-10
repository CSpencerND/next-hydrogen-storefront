"use client"

import { useState } from "react"

import { HashLoader as Loader } from "react-spinners"

const loaderProps = {
    color: "#00aaff",
    size: 96,
}

type LoaderState = {
    LoadingSpinner: () => JSX.Element
    toggleLoading: () => void
    isLoading: boolean
}

export const useLoader = (size?: number, color?: string): LoaderState => {
    const [isLoading, setLoading] = useState<boolean>(true)
    const toggleLoading = () => setLoading((state) => !state)

    const LoadingSpinner = () => (
        <Loader
            color={color ?? loaderProps.color}
            size={size ?? loaderProps.size}
            loading={isLoading}
            className="mx-auto"
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )

    return { LoadingSpinner, toggleLoading, isLoading }
}
