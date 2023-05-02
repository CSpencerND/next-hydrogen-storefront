import { getCollections } from "@/lib/storefront"

import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

import Account from "@/components/account"
import Cart from "@/components/cart"
import NavMenu from "./NavMenu"

const getData = async () => {
    const collections = await getCollections()

    const linkData = collections.map((collection) => {
        return {
            title: collection.title,
            href: `/collections/${collection.handle}`,
        }
    })

    linkData.unshift({
        title: "Collections Directory",
        href: "/collections",
    })

    return linkData
}

export async function Navbar({ logo }: { logo?: StaticImageData }) {
    const linkData = await getData()

    return (
        <header className="sticky top-0 z-40 sm:-mx-6">
            <nav
                className={`
                    navbar relative isolate mx-auto max-w-7xl
                    border-b border-neutral-focus py-4
                `}
            >
                <div
                    aria-hidden
                    className="absolute left-0 top-0 -z-10 h-full w-full backdrop-blur-lg backdrop-saturate-150"
                />
                <div className="navbar-start">
                    <Link
                        href="/"
                        className="btn-link btn pl-2 hover:opacity-80"
                    >
                        {logo && (
                            <Image
                                src={logo}
                                alt="BrandLogo"
                                className="h-5/6 w-auto"
                            />
                        )}
                    </Link>
                </div>
                <div className="navbar-end relative">
                    <Account />
                    <Cart />
                    <NavMenu linkData={linkData} />
                </div>
            </nav>
        </header>
    )
}
