import { getStorefrontProps } from "@/lib/storefront"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type FooterProps = {
    logo?: StaticImageData
}

async function Footer({ logo }: FooterProps) {
    const shop = await getStorefrontProps()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="container mx-auto space-y-6">
            <section className="footer max-md:footer-center">
                <div className="form-control text-sm">
                    <label className="label">
                        <span className="text-sm font-bold text-base-content/80">
                            Sign Up To Our Newsletter!
                        </span>
                    </label>
                    <div className="relative isolate">
                        <div
                            aria-hidden
                            className={`
                                absolute -inset-x-0.5 -top-1 bottom-1 -z-10 rounded-xl
                                bg-gradient-to-bl from-accent-content/40 to-primary-content/30 blur-md
                            `}
                        />
                        <input
                            type="email"
                            inputMode="email"
                            placeholder="username@site.com"
                            className="input mb-2 w-full bg-base-300"
                        />
                        <button className="btn-secondary btn absolute right-0 top-0 rounded-l-none">
                            Sub
                        </button>
                    </div>
                </div>
                <div className="md:place-self-center md:self-end md:justify-self-end">
                    <ul className="grid grid-flow-col">
                        <li>
                            <Link
                                href="https://www.instagram.com/word_play4lyfe/"
                                className="btn-ghost btn-square btn"
                            >
                                <Instagram />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="btn-ghost btn-square btn"
                            >
                                <Twitter />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="btn-ghost btn-square btn"
                            >
                                <Facebook />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="footer border-t border-neutral-focus py-6 max-md:footer-center">
                <div className="grid-flow-col items-center">
                    {logo && (
                        <Link
                            href="/"
                            className="h-14 w-14 hover:opacity-80"
                        >
                            <Image
                                src={logo}
                                alt={shop.name}
                                className="h-full w-auto"
                            />
                        </Link>
                    )}
                    <p>
                        © {currentYear} All rights reserved {shop.name}
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer as unknown as () => JSX.Element
