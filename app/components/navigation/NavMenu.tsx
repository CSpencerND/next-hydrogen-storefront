"use client"

import type { Transition } from "framer-motion"

import { Menu } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"
import Link from "next/link"

import { AnimatePresence, MotionConfig, motion } from "framer-motion"

type LinkData = {
    title: string
    href: string
}

const transition: Transition = {
    type: "spring",
    stiffness: 1000,
    damping: 42.5,
} as const

export default function NavMenu({ linkData }: { linkData: LinkData[] }) {
    const links = linkData.map((link) => (
        <Link
            key={link.href}
            href={link.href}
            className="text-base font-bold ui-active:active"
        >
            {link.title}
        </Link>
    ))

    return (
        <Menu>
            {({ open }) => (
                <>
                    <div className="fixed bottom-0 right-0 z-40 p-6">
                        <Menu.Button
                            className={`
                                btn-secondary btn-square btn grid place-items-center
                                rounded-sq border border-secondary-content/30 bg-opacity-60 backdrop-blur-sm
                            `}
                        >
                            <HamburgerIcon
                                toggled={open}
                                size={24}
                                distance="lg"
                                rounded
                                label="Toggle Navigation Menu"
                            />
                        </Menu.Button>
                    </div>
                    <AnimatePresence>
                        {open && (
                            <MotionConfig transition={{ ...transition }}>
                                <motion.div
                                    className={`
                                        fixed inset-0 z-40 mr-24 flex h-screen
                                        border-r border-neutral-focus bg-base-300/60
                                    `}
                                    key="navMenuSidebar"
                                    variants={{
                                        close: {
                                            x: "-100%",
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
                                        className="menu w-screen self-center p-4"
                                    >
                                        {links.map((link) => (
                                            <motion.li
                                                variants={{
                                                    close: {
                                                        x: "-10%",
                                                        opacity: 0,
                                                    },
                                                    open: {
                                                        x: 0,
                                                        opacity: 1,
                                                    },
                                                }}
                                                key={link.key}
                                            >
                                                <Menu.Item>{link}</Menu.Item>
                                            </motion.li>
                                        ))}
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
