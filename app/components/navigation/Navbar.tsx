import { getCollections } from "@/lib/storefront"

import Image from "next/image"
import Link from "next/link"

// import Account from "@/components/account"
import Cart from "@/components/cart"
import NavMenu from "./NavMenu"

import { logoMain } from "@/static"

const getData = async () => {
    const collections = await getCollections()

    const linkData = collections.map((collection) => {
        return {
            title: collection.title,
            href: `/collections/${collection.handle}`,
        }
    })

    return [
        {
            title: "Collections Directory",
            href: "/collections",
        },
        ...linkData,
    ]
}

export async function Navbar() {
    const linkData = await getData()

    return (
        <header className="sticky top-0 z-40 sm:-mx-6">
            <nav
                className={`
                    navbar relative isolate mx-auto max-h-[74px] max-w-7xl
                    border-b border-neutral-focus px-3 py-6 sm:px-6
                `}
            >
                <div
                    aria-hidden={true}
                    className="absolute left-0 top-0 -z-10 h-full w-full backdrop-blur-lg backdrop-saturate-150"
                />
                <div className="navbar-start">
                    <Link
                        href="/"
                        className="btn-link btn pl-2 hover:opacity-80"
                    >
                        {logoMain ? (
                            <Image
                                src={logoMain}
                                alt="BrandLogo"
                                placeholder="blur"
                                className="h-full w-auto"
                            />
                        ) : (
                            <h1>brand logo</h1>
                        )}
                    </Link>
                </div>
                <div className="navbar-center">
                    <NavMenu linkData={linkData} />
                </div>
                <div className="navbar-end relative">
                    {/* <Account /> */}
                    <Cart />
                </div>
            </nav>
        </header>
    )
}
