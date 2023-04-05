"use client"

import { Popover, Transition } from "@headlessui/react"
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react"
import { Fragment } from "react"

import { env } from "../storefront"

import { useUpdateEffect } from "@react-hookz/web"
import { create } from "zustand"

import Children from "types"

export default function RootProvider({ children }: Children) {
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

type NotificationStore = {
    message: string
    shown: boolean
    showNotification: (message: string) => void
    hideNotification: () => void
}

const useNotification = create<NotificationStore>()((set) => ({
    message: "",
    shown: false,
    showNotification: (messageText: string) =>
        set({
            message: messageText,
            shown: true,
        }),
    hideNotification: () =>
        set({
            shown: false,
        }),
}))

export function ExtendedCartProvider({ children }: Children) {
    const showNotification = useNotification((s) => s.showNotification)

    const onStart = "Cart updating..."

    return (
        <CartProvider
            onLineAdd={() => showNotification(onStart)}
            onLineRemove={() => showNotification(onStart)}
            onLineUpdate={() => showNotification(onStart)}
            onLineAddComplete={() => showNotification("Item added to cart")}
            onLineRemoveComplete={() =>
                showNotification("Item removed from cart")
            }
            onLineUpdateComplete={() =>
                showNotification("Item updated in cart")
            }
        >
            <Notification />
            {children}
        </CartProvider>
    )
}

function Notification() {
    const message = useNotification((s) => s.message)
    const shown = useNotification((s) => s.shown)
    const hideNotification = useNotification((s) => s.hideNotification)

    useUpdateEffect(() => {
        if (shown === false) return
        setTimeout(() => {
            hideNotification()
        }, 3000)
    }, [shown])

    return (
        // TODO: Replace Transition with Framer Motion
        <Transition
            as={Fragment}
            appear
            show={shown}
            unmount={true}
            enter="transition ease-in duration-150"
            enterFrom="translate-x-[110%]"
            enterTo="translate-x-0"
            leave="transition opacity ease-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Popover className="toast toast-top z-[99] m-4 overflow-hidden rounded-xl p-0">
                <Popover.Panel
                    static
                    className={`
                        bg-blur-300 alert cursor-pointer
                        border border-info border-opacity-10
                        font-semibold text-info
                    `}
                    onClick={hideNotification}
                >
                    <p className="text-sm">{message}</p>
                </Popover.Panel>
            </Popover>
        </Transition>
    )
}
