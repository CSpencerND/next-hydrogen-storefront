import { Sidebar } from "@/components/ui"

type LinkData = {
    title: string
    href: string
}

import Link from "next/link"

export function NavMenu({ linkData }: { linkData: LinkData[] }) {
    const links = linkData.map((link) => (
        <Link
            key={link.href}
            href={link.href}
            className="font-bold text-base ui-active:active"
        >
            {link.title}
        </Link>
    ))

    return (
        <Sidebar
            type="menu"
            position="fixed"
            direction="ltr"
            center={true}
            items={links}
        />
    )
}
