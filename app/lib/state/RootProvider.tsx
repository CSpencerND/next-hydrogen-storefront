"use client"

import Children from "types"

import { env } from "@/lib/storefront"

import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react"
import { useRef } from "react"

import { Info } from "lucide-react"
import { Id, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./Toast.css"

export function RootProvider({ children }: Children) {
    return (
        <ShopifyProvider
            storefrontId={env.ID}
            storefrontToken={env.TOKEN}
            storeDomain={`https://${env.DOMAIN}`}
            storefrontApiVersion={env.VERSION}
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
            autoClose: 3000,
            className: "animate-in zoom-in fade-in duration-300",
            icon: <Info className="stroke-info" />,
        })
    }

    return (
        <CartProvider
            onLineAdd={onStart}
            onLineRemove={onStart}
            onLineUpdate={onStart}
            onLineAddComplete={() => onComplete("Item added to cart")}
            onLineRemoveComplete={() => onComplete("Item removed from cart")}
            onLineUpdateComplete={() => onComplete("Item updated in cart")}
        >
            <ToastContainer
                position="top-right"
                autoClose={3000}
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
