"use client"

import { createContext } from "react"
import { createStore } from "zustand"

import { ProductProvider as ShopifyProductProvider } from "@shopify/hydrogen-react"
import { useContext, useRef } from "react"
import { useStore } from "zustand"

import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { ProductProps, ProductState, ProductProviderProps } from "types"

const createProductStore = (initProps?: ProductProps) => {
    const DEFAULT_PROPS: ProductProps = {
        product: {} as Product,
        images: [{}] as Image[],
        currentImage: {} as Image,
        isModalOpen: false,
        selectedColor: "",
        colorOptions: [""],
        hexCodes: [""],
        selectedSize: "",
    }

    return createStore<ProductState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        setCurrentImage: (i) => set((state) => ({ currentImage: state.images[i] })),
        setSelectedColor: (color) => set(() => ({ selectedColor: color })),
        setSelectedSize: (size) => set(() => ({ selectedSize: size })),
        toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
    }))
}

const ProductContext = createContext<ProductStore | null>(null)

type ProductStore = ReturnType<typeof createProductStore>

export function ProductProvider({ children, ...props }: ProductProviderProps) {
    const storeRef = useRef<ProductStore>()

    if (!storeRef.current) {
        storeRef.current = createProductStore(props)
    }

    return (
        <ShopifyProductProvider data={props.product}>
            <ProductContext.Provider value={storeRef.current}>
                {children}
            </ProductContext.Provider>
        </ShopifyProductProvider>
    )
}

export function useProduct<T>(
    selector: (state: ProductState) => T,
    equalityFn?: (left: T, right: T) => boolean
): T {
    const store = useContext(ProductContext)
    if (!store) {
        throw new Error("Missing ProductContext.Provider in the tree!")
    }
    return useStore(store, selector, equalityFn)
}
