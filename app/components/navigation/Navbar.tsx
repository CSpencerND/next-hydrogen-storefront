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

async function Navbar({ logo }: { logo?: StaticImageData }) {
    const linkData = await getData()

    return (
        <header className="before-blur-300 sticky top-0 z-40">
            <nav
                className={`
                    navbar isolate mx-auto max-w-7xl
                    border-b border-neutral-focus px-6 py-4
                `}
            >
                <div className="navbar-start">
                    <Link
                        href="/"
                        className="btn-link btn hover:opacity-80"
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

export default Navbar as unknown as () => JSX.Element
