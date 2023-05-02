"use client"

import Children from "types"

import { env } from "env.mjs"

import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react"
import { useRef } from "react"

import { Info } from "lucide-react"
import { Id, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./Toast.css"

export function RootProvider({ children }: Children) {
    return (
        <ShopifyProvider
            storefrontId={env.NEXT_PUBLIC_STOREFRONT_ID}
            storefrontToken={env.NEXT_PUBLIC_STOREFRONT_TOKEN}
            storeDomain={`https://${env.NEXT_PUBLIC_STOREFRONT_DOMAIN}`}
            storefrontApiVersion={env.NEXT_PUBLIC_STOREFRONT_VERSION}
            countryIsoCode="US"
            languageIsoCode="EN"
        >
            <ExtendedCartProvider>{children}</ExtendedCartProvider>
        </ShopifyProvider>
    )
}

export function ExtendedCartProvider({ children }: Children) {
    const toastId = useRef<null | Id>(null)

    const onStart = () => {
        toastId.current = toast.loading("Updating Cart", {})
    }

    const onComplete = (message: string) => {
        if (toastId.current === null) return

        toast.update(toastId.current, {
            render: message,
            type: toast.TYPE.INFO,
            isLoading: false,
            closeOnClick: true,
            draggable: true,
            closeButton: false,
            autoClose: 2000,
            className: "animate-in zoom-in fade-in duration-300",
            icon: <Info className="stroke-info" />,
        })
    }

    return (
        <CartProvider
            onCreate={onStart}
            onLineAdd={onStart}
            onLineRemove={onStart}
            onLineUpdate={onStart}
            onCreateComplete={() => onComplete("Item added to cart")}
            onLineAddComplete={() => onComplete("Item added to cart")}
            onLineRemoveComplete={() => onComplete("Item removed from cart")}
            onLineUpdateComplete={() => onComplete("Item updated in cart")}
        >
            <ToastContainer
                position="top-right"
                autoClose={2000}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeButton={false}
                theme="dark"
            />
            {children}
        </CartProvider>
    )
}
