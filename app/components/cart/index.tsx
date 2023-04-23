"use client"

import {
    CartCheckoutButton,
    CartCost,
    CartLineProvider,
    useCart,
    useCartLine,
} from "@shopify/hydrogen-react"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"

import { Popover } from "@headlessui/react"
import { ArrowRight, Trash2 as Delete, Minus, Plus, ShoppingCart } from "lucide-react"
import Link from "next/link"

import type { Transition } from "framer-motion"

const transition: Transition = {
    type: "spring",
    stiffness: 1000,
    damping: 42.5,
} as const

export default function Cart() {
    const { lines } = useCart()

    return (
        <Popover>
            {({ open }) => (
                <>
                    <Popover.Button className="btn-ghost btn-square btn grid place-items-center">
                        <ShoppingCart />
                    </Popover.Button>

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
                                    <Popover.Panel className="flex h-screen flex-col">
                                        <header className="flex items-center justify-between border-b border-base-100 px-6 py-4">
                                            <h1 className="text-lg font-medium">
                                                In Your Cart
                                            </h1>
                                            <Popover.Button className="btn-primary btn-square btn rounded-sq">
                                                <ArrowRight />
                                            </Popover.Button>
                                        </header>

                                        <motion.menu
                                            variants={{
                                                open: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                    },
                                                },
                                            }}
                                            className="h-full divide-y divide-base-100 px-6 py-4"
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
                                                            </motion.li>
                                                        </CartLineProvider>
                                                    )
                                                })
                                            )}
                                        </motion.menu>

                                        <footer className="border-t border-base-100 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-sm font-medium">
                                                <p className="flex w-full justify-between">
                                                    Subtotal
                                                    <CartCost
                                                        as="span"
                                                        amountType="subtotal"
                                                    />
                                                </p>
                                            </div>
                                            <p className="mt-2 text-xs">
                                                Shipping and taxes calculated at checkout.
                                            </p>

                                            <CartCheckoutButton className="btn-secondary btn-block btn mt-6">
                                                Checkout
                                            </CartCheckoutButton>

                                            <div className="mt-6 flex justify-center text-center text-sm">
                                                <p>
                                                    or
                                                    <Popover.Button className="pl-2 font-medium text-primary-content hover:text-opacity-80">
                                                        Continue Shopping
                                                    </Popover.Button>
                                                </p>
                                            </div>
                                        </footer>
                                    </Popover.Panel>
                                </motion.div>
                            </MotionConfig>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="bg-blur-clear fixed inset-0 z-30 cursor-pointer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </Popover>
    )
}

// function CartButton() {
//     return (
//         <Menu.Button className="btn-ghost btn-square btn grid place-items-center">
//             <ShoppingCart />
//         </Menu.Button>
//     )
// }

// function Wrapper({ children }) {
//     return (
//         <AnimatePresence>
//             {open && (
//                 <MotionConfig transition={{ ...transition }}>
//                     <motion.div
//                         className="fixed inset-0 z-50 h-screen border-l border-neutral-focus bg-base-300/60"
//                         key="navMenuSidebar"
//                         variants={{
//                             close: {
//                                 x: "100%",
//                                 transition: {
//                                     when: "afterChildren",
//                                 },
//                             },
//                             open: {
//                                 x: 0,
//                                 transition: {
//                                     when: "beforeChildren",
//                                     ...transition,
//                                 },
//                             },
//                         }}
//                         initial="close"
//                         animate={open ? "open" : "close"}
//                         exit="close"
//                     >
//                         {children}
//                     </motion.div>
//                 </MotionConfig>
//             )}
//         </AnimatePresence>
//     )
// }

// function Header() {
//     return (
//         <header className="flex items-center justify-between border-b border-base-100 px-6 py-4">
//             <h1 className="text-lg font-medium">In Your Cart</h1>
//             <Menu.Button className="btn-primary btn-square btn rounded-sq">
//                 <ArrowRight />
//             </Menu.Button>
//         </header>
//     )
// }

// function Body() {
//     return (
//         <Menu.Items
//             as={motion.menu}
//             variants={{
//                 open: {
//                     transition: {
//                         staggerChildren: 0.05,
//                     },
//                 },
//             }}
//             className="menu w-screen p-4"
//         >
//             {!lines ? (
//                 <p>Your Cart Is Empty</p>
//             ) : (
//                 lines.map((line) => {
//                     if (!line) return null
//                     return (
//                         <CartLineProvider
//                             line={line}
//                             key={line.id}
//                         >
//                             <motion.li
//                                 variants={{
//                                     close: {
//                                         x: "10%",
//                                         opacity: 0,
//                                     },
//                                     open: {
//                                         x: 0,
//                                         opacity: 1,
//                                     },
//                                 }}
//                             >
//                                 <p>Cart Item</p>
//                                 {/* <Menu.Item></Menu.Item> */}
//                             </motion.li>
//                         </CartLineProvider>
//                     )
//                 })
//             )}
//         </Menu.Items>
//     )
// }

// function Footer() {
//     return (
//         <footer className="border-t border-base-100 px-4 py-6 sm:px-6">
//             <div className="flex justify-between text-sm font-medium">
//                 <p className="flex w-full justify-between">
//                     Subtotal
//                     <CartCost
//                         as="span"
//                         amountType="subtotal"
//                     />
//                 </p>
//             </div>
//             <p className="mt-2 text-xs">Shipping and taxes calculated at checkout.</p>

//             <CartCheckoutButton className="btn-secondary btn-block btn-sm btn mt-6">
//                 Checkout
//             </CartCheckoutButton>

//             <div className="mt-6 flex justify-center text-center text-sm">
//                 <p>
//                     or
//                     <Menu.Button as={Fragment}>
//                         <button
//                             type="button"
//                             className="pl-2 font-medium text-primary-content hover:text-opacity-80"
//                         >
//                             Continue Shopping
//                         </button>
//                     </Menu.Button>
//                 </p>
//             </div>
//         </footer>
//     )
// }
