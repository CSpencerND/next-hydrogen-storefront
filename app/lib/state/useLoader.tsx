"use client"

import { create } from "zustand"

type LoaderStore = {
    isLoading: boolean
    setLoadingTrue: () => void
    setLoadingFalse: () => void
}

export const useLoader = create<LoaderStore>()((set) => ({
    isLoading: true,
    setLoadingTrue: () => set(() => ({ isLoading: true })),
    setLoadingFalse: () => set(() => ({ isLoading: false })),
}))
