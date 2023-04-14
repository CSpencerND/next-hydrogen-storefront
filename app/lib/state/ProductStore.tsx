"use client"

import { ProductProvider as ShopifyProductProvider } from "@shopify/hydrogen-react"
import { createContext, useContext, useRef } from "react"
import { createStore, useStore } from "zustand"

import type { Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { ProductProps, ProductProviderProps, ProductState } from "types"

const createProductStore = (initProps: ProductProps) => {
    return createStore<ProductState>()((set) => ({
        ...initProps,
        setCurrentImage: (i) => set((state) => ({ currentImage: state.images[i] })),
        setSelectedColor: (color) => set(() => ({ selectedColor: color })),
        setSelectedSize: (size) => set(() => ({ selectedSize: size })),
        toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
    }))
}

const ProductContext = createContext<ProductStore | null>(null)

type ProductStore = ReturnType<typeof createProductStore>

function EXProductProvider({ children, ...props }: ProductProviderProps) {
    const storeRef = useRef<ProductStore>()

    if (!storeRef.current) {
        storeRef.current = createProductStore(props)
    }

    return (
        <ProductContext.Provider value={storeRef.current}>{children}</ProductContext.Provider>
    )
}

export function ProductProvider({ children, product }: {children: React.ReactNode, product: Product}) {
    const colorOptions = product.options.find((option) => option.name === "Color")!.values
    const sizeOptions = product.options.find((option) => option.name === "Size")!.values

    const initProps: ProductProviderProps = {
        product: product,
        images: product.images.nodes,
        currentImage: product.images.nodes[0],
        hexCodes: JSON.parse(product.metafield!.value) as string[],
        colorOptions,
        sizeOptions,
        selectedColor: colorOptions[0],
        selectedSize: sizeOptions[0],
        isModalOpen: false,
    }

    return (
        <ShopifyProductProvider data={product}>
            <EXProductProvider {...initProps}>{children}</EXProductProvider>
        </ShopifyProductProvider>
    )
}

export function useProductStore<T>(
    selector: (state: ProductState) => T,
    equalityFn?: (left: T, right: T) => boolean
): T {
    const store = useContext(ProductContext)
    if (!store) {
        throw new Error("Missing ProductContext.Provider in the tree!")
    }
    return useStore(store, selector, equalityFn)
}

export { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
