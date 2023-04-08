"use client"

type LinkData = {
    title: string
    href: string
}

import { Spiral as HamburgerIcon } from "hamburger-react"
import Link from "next/link"

export function Sidebar({ linkData }: { linkData: LinkData[] }) {
    return (
        <>
            <HamburgerIcon />
            <ul>
                {linkData.map((link, i) => (
                    <li key={i}>
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
