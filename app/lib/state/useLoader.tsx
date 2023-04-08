"use client"

import { create } from "zustand"

import { HashLoader as Loader } from "react-spinners"
const loaderProps = {
    color: "#00aaff",
    size: 96,
}

type LoaderStore = {
    isLoading: boolean
    LoadingSpinner: () => JSX.Element
    setLoadingTrue: () => void
    setLoadingFalse: () => void
}

export const useLoader = create<LoaderStore>((set, get) => ({
    isLoading: true,
    LoadingSpinner: () => (
        <Loader
            {...loaderProps}
            className="mx-auto"
            loading={get().isLoading}
        />
    ),
    setLoadingTrue: () => set(() => ({ isLoading: true })),
    setLoadingFalse: () => set(() => ({ isLoading: false })),
}))
