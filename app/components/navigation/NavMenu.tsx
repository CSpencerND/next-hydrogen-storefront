"use client"

import type { Transition } from "framer-motion"

import { Menu } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

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
        <>
            <Menu>
                {({ open }) => (
                    <>
                        <div className="fixed bottom-0 right-0 z-40 p-6 lg:hidden">
                            <Menu.Button
                                className={`
                                btn-secondary btn-square btn grid place-items-center
                                rounded-sq bg-opacity-60 shadow-box shadow-secondary-content backdrop-blur-sm
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
                                <motion.div
                                    className={`
                                    fixed inset-0 z-40 mr-24 flex h-screen border-r
                                    border-neutral-focus bg-base-300/60 lg:hidden
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
                                                        x: -20,
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
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    className="bg-blur fixed inset-0 z-30 cursor-pointer"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </AnimatePresence>
                    </>
                )}
            </Menu>
            <Desktop linkData={linkData} />
        </>
    )
}

function isActiveLink(linkHref: string, currentPathname: string) {
    return (
        linkHref === currentPathname ||
        (currentPathname.startsWith(linkHref + "/") && linkHref !== "/collections")
    )
}

function Desktop({ linkData }: { linkData: LinkData[] }) {
    const pathname = usePathname() as string

    return (
        <menu
            tabIndex={0}
            className="tabs flex-none flex-row p-2 max-lg:hidden"
        >
            {linkData.map((link, i) => {
                return (
                    <li
                        key={i}
                        className={cn(
                            "relative tab",
                            link.href !== "/collections" &&
                                link.href !== "/collections/full-catalog"
                                ? "max-xl:hidden"
                                : ""
                        )}
                    >
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-bold"
                        >
                            {isActiveLink(link.href, pathname) && (
                                <motion.span
                                    aria-hidden={true}
                                    layoutId="indicator"
                                    // TODO: Make a prop that can be passed in to select which hl method
                                    className="glow absolute inset-0 bottom-[8px] mx-auto w-2/3"
                                    // className="absolute inset-0 -bottom-[21px] mx-auto w-11/12 border-b border-info"
                                    // className="absolute left-0 right-0 -top-1 rounded-xl bg-info/30 h-[120%]"
                                />
                            )}
                            <span
                                className={cn(
                                    "relative",
                                    isActiveLink(link.href, pathname) ? "text-info" : ""
                                )}
                            >
                                {link.title}
                            </span>
                        </Link>
                    </li>
                )
            })}
        </menu>
    )
}

// function Desktop({ linkData }: { linkData: LinkData[] }) {
//     const pathname = usePathname() as string

//     return (
//         <menu
//             tabIndex={0}
//             className="menu menu-compact flex-none flex-row p-2 max-lg:hidden"
//         >
//             {linkData.map((link, i) => {
//                 return (
//                     <li
//                         key={i}
//                         className={cn(
//                             link.href !== "/collections" &&
//                                 link.href !== "/collections/full-catalog"
//                                 ? "max-xl:hidden"
//                                 : "",
//                             isActiveLink(link.href, pathname)
//                                 ? "bg-primary text-primary-content"
//                                 : ""
//                         )}
//                     >
//                         <Link
//                             key={link.href}
//                             href={link.href}
//                             className="text-sm font-bold ui-active:active"
//                         >
//                             {link.title}
//                         </Link>
//                     </li>
//                 )
//             })}
//         </menu>
//     )
// }
