"use client"

import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react"
import type { Transition } from "framer-motion"

import { Menu } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"

import { cn } from "@/lib/utils"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"

type SidebarProps = PropsWithChildren & {
    items: JSX.Element[]
    center?: boolean
    position?: "fixed" | "static"
    direction?: "ltr" | "rtl"
    type: "menu" | "cart" | "account"
} & DetailedHTMLProps<HTMLAttributes<HTMLMenuElement>, HTMLMenuElement>

const transition: Transition = {
    type: "spring",
    stiffness: 1000,
    damping: 42.5,
} as const

export function Sidebar(props: SidebarProps) {
    const { items, center, position = "static", direction = "ltr", type = "menu" } = props

    return (
        <Menu>
            {({ open }) => (
                <>
                    <div
                        className={cn(
                            type === "menu" ? "z-40" : "",
                            position === "fixed" ? "fixed bottom-0 right-0 p-6" : ""
                        )}
                    >
                        <Menu.Button
                            className={cn(
                                "btn-square btn grid place-items-center",
                                position === "fixed"
                                    ? "btn-secondary rounded-xl border border-secondary-content/30 bg-opacity-60"
                                    : "btn-ghost"
                            )}
                        >
                            {type === "menu" && (
                                <HamburgerIcon
                                    toggled={open}
                                    size={24}
                                    distance="lg"
                                    rounded
                                    label="Toggle Navigation Menu"
                                />
                            )}
                        </Menu.Button>
                    </div>
                    <AnimatePresence>
                        {open && (
                            <MotionConfig transition={{ ...transition }}>
                                <motion.div
                                    className={cn(
                                        "fixed inset-0 z-40 flex h-screen border-neutral-focus bg-base-300/60",
                                        direction === "ltr" ? " border-r" : "border-l",
                                        type === "menu" && direction === "ltr" ? "mr-24" : ""
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
                                </motion.div>
                            </MotionConfig>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>{open && <Overlay />}</AnimatePresence>
                </>
            )}
        </Menu>
    )
}

export function Overlay() {
    return (
        <motion.div
            className="bg-blur-clear fixed inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />
    )
}

// <Transition.Child
//     as="label"
//     enter="ease-out duration-300 delay-75"
//     enterFrom="opacity-0"
//     enterTo="opacity-100"
//     leave="ease-in duration-300 delay-75"
//     leaveFrom="opacity-100"
//     leaveTo="opacity-0"
// />
