"use client"

type LinkData = {
    title: string
    href: string
}

import { Dialog } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"
import Link from "next/link"

import { create } from "zustand"

type SidebarState = {
    isOpen: boolean
    toggleSidebar: () => void
}

const useSidebar = create<SidebarState>()((set) => ({
    isOpen: false,
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export function Sidebar({ linkData }: { linkData: LinkData[] }) {
    const { isOpen, toggleSidebar } = useSidebar((state) => state)
    return (
        <>
            <button
                className="btn-ghost btn-square btn"
                onClick={toggleSidebar}
            >
                <HamburgerIcon
                    toggled={isOpen}
                    size={24}
                    distance="lg"
                    rounded
                />
            </button>
            <Dialog
                open={isOpen}
                onClose={toggleSidebar}
            >
                <Dialog.Panel>
                    <ul>
                        {linkData.map((link, i) => (
                            <li key={i}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}
