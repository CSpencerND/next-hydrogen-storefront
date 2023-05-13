import { getShop } from "@/lib"
import { logoSquare } from "@/static"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export async function Footer() {
    const shop = await getShop()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="container mx-auto max-w-7xl space-y-6">
            <section className="footer max-md:footer-center">
                <div className="form-control text-sm">
                    <label className="label">
                        <span className="text-sm font-bold text-base-content/80">Sign Up To Our Newsletter!</span>
                    </label>
                    <div className="relative isolate">
                        <div
                            aria-hidden={true}
                            className={`
                                absolute -inset-x-0.5 -top-1 bottom-1 -z-10 rounded-xl
                                bg-gradient-to-bl from-accent-content/70 to-primary-content/50 blur
                            `}
                        />
                        <input
                            type="email"
                            inputMode="email"
                            placeholder="username@site.com"
                            className="input mb-2 w-full bg-base-300"
                        />
                        <button className="btn-secondary btn absolute right-0 top-0 rounded-l-none">Sub</button>
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
            <section className="footer border-t border-base-200 py-6 max-md:footer-center">
                <div className="grid-flow-col items-center">
                    {logoSquare ? (
                        <Link
                            href="/"
                            className="h-14 w-14 hover:opacity-80"
                        >
                            <Image
                                src={logoSquare}
                                alt={shop.name}
                                placeholder="blur"
                                className="h-full w-auto"
                            />
                        </Link>
                    ) : (
                        <h3>square logo</h3>
                    )}
                    <p>
                        © {currentYear} All rights reserved {shop.name}
                    </p>
                </div>
            </section>
        </footer>
    )
}
