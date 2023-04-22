"use client"

import type { Transition } from "framer-motion"

import { Menu } from "@headlessui/react"
import { Trash2 as Delete, Minus, Plus, ShoppingCart } from "lucide-react"
import Link from "next/link"

import { CartLineProvider, useCart, useCartLine } from "@shopify/hydrogen-react"

import { AnimatePresence, MotionConfig, motion } from "framer-motion"

const transition: Transition = {
    type: "spring",
    stiffness: 1000,
    damping: 42.5,
} as const

export default function Cart() {
    const { lines } = useCart()

    return (
        <Menu>
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="btn-ghost btn-square btn grid place-items-center">
                            <ShoppingCart />
                        </Menu.Button>
                    </div>
                    <AnimatePresence>
                        {open && (
                            <MotionConfig transition={{ ...transition }}>
                                <motion.div
                                    className="fixed inset-0 z-50 h-screen border-l border-neutral-focus bg-base-300/60"
                                    key="navMenuSidebar"
                                    variants={{
                                        close: {
                                            x: "100%",
                                            transition: {
                                                when: "afterChildren",
                                            },
                                        },
                                        open: {
                                            x: 0,
                                            transition: {
                                                when: "beforeChildren",
                                                ...transition,
                                            },
                                        },
                                    }}
                                    initial="close"
                                    animate={open ? "open" : "close"}
                                    exit="close"
                                >
                                    <header className="flex items-center justify-between border-b border-base-100 px-4 py-3">
                                        <h1 className="text-lg font-medium">In Your Cart</h1>
                                        {/* <Menu.Button as={Fragment}> */}
                                        {/*     <CloseButton */}
                                        {/*         icon="right" */}
                                        {/*     /> */}
                                        {/* </Menu.Button> */}
                                    </header>
                                    <Menu.Items
                                        as={motion.menu}
                                        variants={{
                                            open: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                },
                                            },
                                        }}
                                        className="menu w-screen p-4"
                                    >
                                        {!lines ? (
                                            <p>Your Cart Is Empty</p>
                                        ) : (
                                            lines.map((line) => {
                                                if (!line) return null
                                                return (
                                                    <CartLineProvider
                                                        line={line}
                                                        key={line.id}
                                                    >
                                                        <motion.li
                                                            variants={{
                                                                close: {
                                                                    x: "10%",
                                                                    opacity: 0,
                                                                },
                                                                open: {
                                                                    x: 0,
                                                                    opacity: 1,
                                                                },
                                                            }}
                                                        >
                                                            <p>Cart Item</p>
                                                            {/* <Menu.Item></Menu.Item> */}
                                                        </motion.li>
                                                    </CartLineProvider>
                                                )
                                            })
                                        )}
                                    </Menu.Items>
                                </motion.div>
                            </MotionConfig>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="bg-blur-clear fixed inset-0 z-30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </Menu>
    )
}
