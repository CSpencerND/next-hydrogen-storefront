"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Breadcrumbs() {
    const pathname = usePathname() as string
    const segments = pathname.split("/").filter((s) => s !== "")

    return (
        <nav className="breadcrumbs mx-auto text-sm">
            {/* <ul className="bg-blur-200 w-fit rounded-2xl p-4 shadow-lg [&_a]:text-primary-content"> */}
            <ul className="w-fit [&_a]:text-primary-content">
                {segments.map((s, i) => {
                    const path = `/${segments.slice(0, i + 1).join("/")}`
                    if (i !== segments.length - 1) {
                        return (
                            <li key={s}>
                                <Link href={path}>{s}</Link>
                            </li>
                        )
                    }
                    return (
                        <li key={s}>
                            <span className="text-accent-content">{s}</span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
