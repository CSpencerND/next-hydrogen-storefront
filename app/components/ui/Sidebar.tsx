"use client"

import type { Transition } from "framer-motion"
import type { HTMLAttributes } from "react"

import { Menu } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"
import { ShoppingCart } from "lucide-react"

import { cn } from "@/lib/utils"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"

type SidebarProps = {
    items: JSX.Element[]
    center?: boolean
    buttonPosition?: "fixed"
    direction?: "ltr" | "rtl"
    type: "menu" | "cart" | "account"
    header?: JSX.Element
    footer?: JSX.Element
} & HTMLAttributes<HTMLMenuElement>

const transition: Transition = {
    type: "spring",
    stiffness: 1000,
    damping: 42.5,
} as const

export function Sidebar(props: SidebarProps) {
    const { items, center, buttonPosition, direction = "ltr", type = "menu" } = props

    return (
        <Menu>
            {({ open }) => (
                <>
                    <div
                        className={cn(
                            type === "menu" ? "z-40" : "",
                            buttonPosition === "fixed" ? "fixed bottom-0 right-0 p-6" : ""
                        )}
                    >
                        <Menu.Button
                            className={cn(
                                "btn-square btn grid place-items-center",
                                buttonPosition === "fixed"
                                    ? "btn-secondary rounded-sq border border-secondary-content/30 bg-opacity-60 backdrop-blur-sm"
                                    : "btn-ghost"
                            )}
                        >
                            {type === "menu" ? (
                                <HamburgerIcon
                                    toggled={open}
                                    size={24}
                                    distance="lg"
                                    rounded
                                    label="Toggle Navigation Menu"
                                />
                            ) : (
                                <ShoppingCart />
                            )}
                        </Menu.Button>
                    </div>
                    <AnimatePresence>
                        {open && (
                            <MotionConfig transition={{ ...transition }}>
                                <motion.div
                                    className={cn(
                                        "fixed inset-0 h-screen border-neutral-focus bg-base-300/60",
                                        direction === "ltr" ? " border-r" : "border-l",
                                        type === "menu" && direction === "ltr" ? "mr-24" : "",
                                        type === "menu" ? "z-40 flex" : "z-50"
                                    )}
                                    key="navMenuSidebar"
                                    variants={{
                                        close: {
                                            x: direction === "ltr" ? "-100%" : "100%",
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
                                    {props.header}
                                    <Menu.Items
                                        as={motion.menu}
                                        variants={{
                                            open: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                },
                                            },
                                        }}
                                        className={cn(
                                            "menu w-screen p-4",
                                            type === "menu" && direction === "ltr" ? "" : "",
                                            center ? "self-center" : ""
                                        )}
                                    >
                                        {items.map((item) => (
                                            <motion.li
                                                variants={{
                                                    close: {
                                                        x: direction === "ltr" ? "-10%" : "10%",
                                                        opacity: 0,
                                                    },
                                                    open: {
                                                        x: 0,
                                                        opacity: 1,
                                                    },
                                                }}
                                                key={item.key}
                                                className={cn(type === "menu" ? "" : "")}
                                            >
                                                <Menu.Item>{item}</Menu.Item>
                                            </motion.li>
                                        ))}
                                    </Menu.Items>
                                    {props.footer}
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
